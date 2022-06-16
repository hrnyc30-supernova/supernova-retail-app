import axios from "axios";
const url = "http://18.224.200.47";
const questionsUrl="http://18.208.240.168:3000";

const getProductList = () => {
  return axios.get(`${url}/products`);
};

const getProductInfo = (id = 1) => {
  return axios.get(`${url}/products/${id}`);
};

const getProductStyles = (id = 1) => {
  return axios.get(`${url}/products/${id}/styles`);
};

const getRelatedProducts = (id = 1) => {
  return axios.get(`${url}/products/${id}/related`);
};

const getQA = (id = 1) => {
  return axios.get(`${questionsUrl}/qa/questions?product_id=${id}`);
};

const getReviewMetaData = (id = 1) => {
  return axios.get(`${url}/reviews/${id}/meta`);
};

const getReviewsOfProduct = (id = 1, sortString = "relevant", count = 20) => {
  return axios.get(
    `${url}/reviews/${id}/list?sort=${sortString}:asc&count=${count}}`
  );
};

const reportReview = (reviewId) => {
  return axios.put(`${url}/reviews/report/${reviewId}`);
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
  return axios.post(`${url}/reviews/${id}`, {
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
  return axios.get(`${url}/cart/${userToken}`);
};

const addToCart = (user_token, sku_id) => {
  console.log(user_token);
  console.log(sku_id);
  return axios.post(`${url}/cart/`, {
    user_token: user_token,
    sku_id: sku_id,
  });
};

const getSpecificAnswers = (questionId) => {
  return axios.get(`${questionsUrl}/qa/questions/${questionId}/answers`);
};

const askQuestion = (id, text, name, email) => {
  return axios.post(`${questionsUrl}/qa/questions`, {
    body: text,
    name: name,
    email: email,
    product_id: id,
  });
};

const answerQuestion = (questionId, text, name, email, photos = []) => {
  return axios.post(`${questionsUrl}/qa/questions/${questionId}/answers`, {
    body: text,
    name: name,
    email: email,
    photos: photos,
  });
};

const markQAsHelpful = (questionId) => {
  return axios.put(`${questionsUrl}/qa/questions/${questionId}/helpful`);
};

const reportQuestion = (questionId) => {
  return axios.put(`${questionsUrl}/qa/questions/${questionId}/report`);
};

const markAnsAsHelpful = (answerID) => {
  return axios.put(`${questionsUrl}/qa/answers/${answerID}/helpful`);
};

const reportAns = (answerID) => {
  return axios.put(`${questionsUrl}/qa/answers/${answerID}/report`);
};

const apiMaster = {
  getProductList: getProductList,
  getProductInfo: getProductInfo,
  getProductStyles: getProductStyles,
  getRelatedProducts: getRelatedProducts,
  getQA: getQA,
  getSpecificAnswers: getSpecificAnswers,
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
  addToCart: addToCart,
};

export default apiMaster;
