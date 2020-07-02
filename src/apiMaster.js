import axios from 'axios';

const getProductList = () => {
  return axios.get(`http://18.224.200.47/products`);
};

const getProductInfo = (id = 1) => {
  return axios.get(`http://18.224.200.47/products/${id}`);
};

const getProductStyles = (id = 1) => {
  return axios.get(`/products/${id}/styles`);
};

const getRelatedProducts = (id = 1) => {
  return axios.get(`http://18.224.200.47/products/${id}/related`);
};

const getQA = (id = 1) => {
  return axios.get(`http://18.224.200.47/qa/${id}`);
};

const getReviewMetaData = (id = 1) => {
  return axios.get(`http://18.224.200.47/reviews/${id}/meta`);
};

const getReviewsOfProduct = (id = 2) => {
  return axios.get(`http://18.224.200.47/reviews/${id}/list`);
};

const apiMaster = {
  getProductList: getProductList,
  getProductInfo: getProductInfo,
  getProductStyles: getProductStyles,
  getRelatedProducts: getRelatedProducts,
  getQA: getQA,
  getReviewMetaData: getReviewMetaData,
  getReviewsOfProduct: getReviewsOfProduct
};

export default apiMaster;
