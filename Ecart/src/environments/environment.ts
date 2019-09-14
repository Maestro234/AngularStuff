// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  sellerAPIUrl: 'http://localhost:8080/EKart_Server/SellerAPI',
  updateSellerAPI: 'http://localhost:8080/EKart_Server/SellerAPI',
  updateCustomerAPI: 'http://localhost:8080/EKart_Server/CustomerAPI',
  customerAPIUrl: 'http://localhost:8080/EKart_Server/CustomerAPI',
  customerCartUrl: 'http://localhost:8080/EKart_Server/CustomerCartAPI',
  SellerProductManagementAPI: 'http://localhost:8080/EKart_Server/SellerProductAPI',
  sellerOrderAPI: 'http://localhost:8080/EKart_Server/SellerOrderAPI',
  productAPIUrl: 'http://localhost:8080/EKart_Server/SellerProductAPI',
  CustomerProductAPI: 'http://localhost:8080/EKart_Server/CustomerProductAPI',
  ////////////////////////////////////////////////////////////////////////////
  customerWishlistAPI: 'http://localhost:8080/EKart_Server/CustomerWishListAPI',
  sellerWishlistProductsAPI: 'http://localhost:8080/EKart_Server/SellerWishListAPI'
};