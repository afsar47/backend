const catchAsyncError = require('../middleware/catchAsyncError');
const dealersCategorySchema = require('../model/dealerModels/dealersCategorySchema');
const dealersVendorSchema = require('../model/dealerModels/dealersVendorSchema');
const dealerPartsSchema = require('../model/dealerModels/Inventory/dealerPartsSchema');
const partsBrandSchema = require('../model/dealerModels/Inventory/partsBrandSchema');
const DealerCustomerSchema = require('../model/dealerModels/Lists/CustomerSchema');
const ErrorHandler = require('../utils/errorHandler');


exports.dealerAddNewPart = catchAsyncError(async (req, res, next) => {
    const {
        partName,
        partSerialNo,
        partSku,
        note,
        quantity,
        minQuantity,
        maxQuantity,
        bin,
        cost,
        retail,
        markUp,
        margin,
        taxable,
        displaySerialOnEstimateAndInvoice,
        displayPriceAndQuantityOnEstimateAndInvoice,
        displayNoteOnEstimateAndInvoice,
        partUrl,
        pricingMatrix,
        category,
        brand,
        vendor
    } = req.body
    console.log(req.body);
    const part = await dealerPartsSchema.create({
        partName: partName,
        partSerialNo: partSerialNo,
        partSku: partSku,
        note: note,
        quantity: quantity,
        minQuantity: minQuantity,
        maxQuantity: maxQuantity,
        bin: bin,
        cost: cost,
        retail: retail,
        markUp: markUp,
        margin: margin,
        taxable: taxable,
        displaySerialOnEstimateAndInvoice: displaySerialOnEstimateAndInvoice,
        displayPriceAndQuantityOnEstimateAndInvoice: displayPriceAndQuantityOnEstimateAndInvoice,
        displayNoteOnEstimateAndInvoice: displayNoteOnEstimateAndInvoice,
        partUrl: partUrl,
        pricingMatrix: pricingMatrix,
        category: category,
        brand: brand,
        vendor: vendor
    })
    res.status(201).send({
        status: 'success',
        part,
    })
})


exports.dealerAddNewCustomer = catchAsyncError(async (req, res, next) => {
    const {
        firstName,
        lastName,
        phoneNumber,
        email,
        // preferredContactMethod,
        // tags,
        // note,
        // referralSource,
        // company,
        // fleet,
        // paymentTerms,
        // address1,
        // address2,
        // city,
        // state,
        // zipCode
    } = req.body;

    console.log(req.body);

    // Create a new customer using the extracted data
    const customer = await DealerCustomerSchema.create({
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber, // Expecting an array of objects { contactType, contactNumber }
        email: email, // Expecting an array of email addresses
        // preferredContactMethod: preferredContactMethod,
        // tags: tags,
        // note: note,
        // referralSource: referralSource, 
        // company: company, 
        // fleet: fleet, 
        // paymentTerms: paymentTerms,
        // address1: address1,
        // address2: address2,
        // city: city,
        // state: state,
        // zipCode: zipCode
    });

    // Send back the response
    res.status(201).json({
        status: 'success',
        data: {
            customer
        }
    });
});

exports.dealerGetAllParts = catchAsyncError(async (req, res, next) => {
    let allParts = await dealerPartsSchema.find({}).populate('brand').populate('category').populate('vendor')
    console.log(allParts);
    res.status(200).json({
        status: 'success',
        allParts
    })
})



exports.dealerAddNewBrand = catchAsyncError(async (req, res, next) => {
    const { 
        brandName
     } = req.body;


    const brand = await partsBrandSchema.create({
        label: brandName
    })
    console.log(brand);

    // Send back the response
    res.status(201).json({
        status: 'success',
        data: {
            brand
        }
    });

})


exports.dealerGetAllBrands = catchAsyncError(async (req, res, next) => {
    let allBrands = await partsBrandSchema.find({})

    res.status(200).json({
        status: 'success',
        allBrands
    })
})



exports.dealerAddNewVendor = catchAsyncError(async (req, res, next) => {
    console.log(req.body);

    const vendor = await dealersVendorSchema.create(req.body)
    console.log(vendor);

    // Send back the response
    res.status(201).json({
        status: 'success',
        data: {
            vendor
        }
    });

})


exports.dealerGetAllVendors = catchAsyncError(async (req, res, next) => {
    let allVendors = await dealersVendorSchema.find({})

    res.status(200).json({
        status: 'success',
        allVendors
    })
})

exports.dealerAddNewCategory = catchAsyncError(async (req, res, next) => {
    console.log(req.body);

    const category = await dealersCategorySchema.create(req.body)
    console.log(category);

    // Send back the response
    res.status(201).json({
        status: 'success',
        data: {
            category
        }
    });

})


exports.dealerGetAllCategories = catchAsyncError(async (req, res, next) => {
    let allCategories = await dealersCategorySchema.find({}, '_id categoryName')

    res.status(200).json({
        status: 'success',
        allCategories
    })
})

