import {URLS} from '../config';

export async function getPromocodes() {
  const response = await fetch(URLS.GET_PROMOCODES);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const json = await response.json();
  return json.promocodes;
}
