import {URLS} from '../config';

export async function getBanners() {
  const response = await fetch(URLS.GET_BANNERS);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const json = await response.json();
  return json.banners;
}
