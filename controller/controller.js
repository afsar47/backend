const catchAsyncError = require('../middleware/catchAsyncError');
const sendToken = require('../utils/sendToken');
const SuperAdmin = require('../model/superAdminSchema');
const Dealer = require('../model/dealerSchema')
const errorHandler = require('../utils/errorHandler');

exports.getHomepage = async(req, res, next) => {
    res.status(200).json({
        messgae: "Welcome to Homepgae"
    })
}



exports.logOut = catchAsyncError(async(req, res, next)=>{
    res.clearCookie('token')
    res.status(200).send({
        message: "Logged Out Successfully !"
    })
})



exports.userSignIn = catchAsyncError(async (req, res, next) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return next(new errorHandler("Please provide username and password", 400));
    }

    // Try to find the user in the SuperAdmin collection first
    let user = await SuperAdmin.findOne({ username }).select('+password');
    let role = 'superAdmin';

    // If the user is not found in SuperAdmin, check in the Dealer collection
    if (!user) {
        user = await Dealer.findOne({ username }).select('+password');
        role = 'dealer'; // Change role if user is found in Dealer collection
    }

    // If no user is found in either collection, return error
    if (!user) {
        return next(new errorHandler("Invalid username or password", 400));
    }

    // Check if the provided password matches the stored hashed password
    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
        return next(new errorHandler("Invalid username or password", 400));
    }

    // Generate the token and send it in the response
    sendToken(user, 200, res, role); // Pass role to sendToken
});
