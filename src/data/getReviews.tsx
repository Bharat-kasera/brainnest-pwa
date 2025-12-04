import {URLS} from '../config';

export async function getReviews() {
  const response = await fetch(URLS.GET_REVIEWS);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const json = await response.json();
  return json.reviews;
}
