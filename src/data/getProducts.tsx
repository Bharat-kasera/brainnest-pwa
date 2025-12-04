import {URLS} from '../config';

export async function getProducts() {
  const response = await fetch(URLS.GET_PRODUCTS);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const json = await response.json();
  return json.products;
}
