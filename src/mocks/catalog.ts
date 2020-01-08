import { Product } from '../Cards';
const catalogData = require('./catalog.json');

interface CatalogData {
  success: boolean;
  count: number;
  body: Product[];
}

type FetchCatalogItems = () => Promise<CatalogData>;

export const fetchCatalogItems: FetchCatalogItems = () => {
  return new Promise((resolve, reject) => {
    console.log('Fetching catalog data...');
    setTimeout(() => {
      resolve(catalogData);
    }, 1000);
  });
};

export const fetchSingleCatalogItem: (
  productId: number
) => Promise<{
  success: boolean;
  body: Product;
}> = (productId: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        success: true,
        body: catalogData.body[productId - 1],
      });
    }, 500);
  });
};
