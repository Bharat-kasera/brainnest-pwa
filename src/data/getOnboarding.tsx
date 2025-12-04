import {URLS} from '../config';

export async function getOnboarding() {
  const response = await fetch(URLS.GET_ONBOARDING);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const json = await response.json();
  return json.onboarding;
}
