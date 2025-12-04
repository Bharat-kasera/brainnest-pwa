import {URLS} from '../config';

export async function getOrders() {
  const response = await fetch(URLS.GET_ORDERS);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const json = await response.json();
  return json.orders;
}
