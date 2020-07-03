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

const getReviewsOfProduct = (id = 1, sortString = 'relevant') => {
  return axios.get(`http://18.224.200.47/reviews/${id}/list?sort=${sortString}:asc`);
};

const reportReview = (reviewId) => {
  return axios.put(`http://18.224.200.47/reviews/report/${reviewId}`);
};

const postReview = (
  id = 1,
  rating,
  summary,
  body,
  recommend,
  name,
  email,
  photos,
  characteristics
) => {
  return axios.post(`http://18.224.200.47/reviews/${id}`, {
    rating: rating,
    summary: summary,
    body: body,
    recommend: recommend,
    name: name,
    email: email,
    photos: photos,
    characteristics: characteristics,
  });
};

const getCart = (userToken) => {
  return axios.get(`http://18.224.200.47/cart/${userToken}`);
};

const getSpecificAnsers = (questionId) => {
  return axios.get(`http://18.224.200.47/qa/${questionId}/answers`);
};

const askQuestion = (id, text, name, email) => {
  return axios.post(`http://18.224.200.47/qa/${id}`, {
    body: text,
    name: name,
    email: email,
  });
};

const answerQuestion = (questionId, text, name, email, photos) => {
  return axios.post(`http://18.224.200.47/qa/${questionId}/answers`, {
    body: text,
    name: name,
    email: email,
    photos: photos,
  });
};

const markQAsHelpful = (questionId) => {
  return axios.put(`http://18.224.200.47/qa/question/${questionId}/helpful`);
};

const reportQuestion = (questionId) => {
  return axios.put(`http://18.224.200.47/qa/question/${questionId}/report`);
};

const markAnsAsHelpful = (answerID) => {
  return axios.put(`http://18.224.200.47/qa/answer/${answerID}/helpful`);
};

const reportAns = (answerID) => {
  return axios.put(`http://18.224.200.47/qa/answer/${answerID}/report`);
};

const apiMaster = {
  getProductList: getProductList,
  getProductInfo: getProductInfo,
  getProductStyles: getProductStyles,
  getRelatedProducts: getRelatedProducts,
  getQA: getQA,
  getSpecificAnsers: getSpecificAnsers,
  askQuestion: askQuestion,
  answerQuestion: answerQuestion,
  markQAsHelpful: markQAsHelpful,
  reportQuestion: reportQuestion,
  markAnsAsHelpful: markAnsAsHelpful,
  reportAns: reportAns,
  getReviewMetaData: getReviewMetaData,
  getReviewsOfProduct: getReviewsOfProduct,
  postReview: postReview,
  reportReview: reportReview,
  getCart: getCart,
};

export default apiMaster;
