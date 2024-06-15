import {getProduct} from '../NetworkUrl';
import {get} from '../main';

const getProductApi = () => {
  const productUrl = getProduct;
  return get(productUrl);
};

const getDetailApi = id => {
  const productDetail = getProduct + id;
  return get(productDetail);
};

export {getProductApi, getDetailApi};
