const { dealerAddNewPart, dealerAddNewCustomer, dealerGetAllParts, dealerAddNewBrand, dealerGetAllcategory, dealerAddNewVendor, dealerGetAllVendors, dealerAddNewCategory, dealerGetAllCategories, dealerGetAllBrands } = require('../controller/dealerController');
const router = require('./routes');

const dealerRoutes = require('express').Router();


/**
 * @desc   Dealer Sign Up
 * @route  POST /dealer/add-new-part
 * @access Public
 */
router.route('/dealer/add-new-part')
    // You can enable the authentication & authorization middleware for this
    // .post(isAuthenticatedUser, isAuthorizedRole("superAdmin"), superAdminCreateDealer);
    .post(dealerAddNewPart);


/**
* @desc   Get All Parts
* @route  POST /dealer/get-all-parts
* @access Public
*/
router.route('/dealer/get-all-parts')
    // You can enable the authentication & authorization middleware for this
    // .post(isAuthenticatedUser, isAuthorizedRole("superAdmin"), superAdminCreateDealer);
    .get(dealerGetAllParts);

/**
* @desc   Dealer Sign Up
* @route  POST /dealer/add-new-customer
* @access Public
*/
router.route('/dealer/add-new-customer')
    // You can enable the authentication & authorization middleware for this
    // .post(isAuthenticatedUser, isAuthorizedRole("superAdmin"), superAdminCreateDealer);
    .post(dealerAddNewCustomer);


/**
* @desc   Dealer Add new brand
* @route  POST /dealer/add-new-brand
* @access Public
*/
router.route('/dealer/add-new-brand')
    // You can enable the authentication & authorization middleware for this
    // .post(isAuthenticatedUser, isAuthorizedRole("superAdmin"), superAdminCreateDealer);
    .post(dealerAddNewBrand);


/**
* @desc   Get All Brands
* @route  POST /dealer/get-all-brands
* @access Public
*/
router.route('/dealer/get-all-brands')
    // You can enable the authentication & authorization middleware for this
    // .post(isAuthenticatedUser, isAuthorizedRole("superAdmin"), superAdminCreateDealer);
    .get(dealerGetAllBrands);


/**
* @desc   Dealer Add new VENDOR
* @route  POST /dealer/add-new-vendor
* @access Public
*/
router.route('/dealer/add-new-vendor')
    // You can enable the authentication & authorization middleware for this
    // .post(isAuthenticatedUser, isAuthorizedRole("superAdmin"), superAdminCreateDealer);
    .post(dealerAddNewVendor);


/**
* @desc   Get All Brands
* @route  POST /dealer/get-all-brands
* @access Public
*/
router.route('/dealer/get-all-vendors')
    // You can enable the authentication & authorization middleware for this
    // .post(isAuthenticatedUser, isAuthorizedRole("superAdmin"), superAdminCreateDealer);
    .get(dealerGetAllVendors);


/**
* @desc   Dealer Add new category
* @route  POST /dealer/add-new-category
* @access Public
*/
router.route('/dealer/add-new-category')
    // You can enable the authentication & authorization middleware for this
    // .post(isAuthenticatedUser, isAuthorizedRole("superAdmin"), superAdminCreateDealer);
    .post(dealerAddNewCategory);


/**
* @desc   Get All category
* @route  POST /dealer/get-all-categories
* @access Public
*/
router.route('/dealer/get-all-categories')
    // You can enable the authentication & authorization middleware for this
    // .post(isAuthenticatedUser, isAuthorizedRole("superAdmin"), superAdminCreateDealer);
    .get(dealerGetAllCategories);



module.exports = dealerRoutes;
