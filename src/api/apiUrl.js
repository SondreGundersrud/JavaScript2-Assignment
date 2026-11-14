// Documentation: https://docs.noroff.dev/docs/v2

export const BASE_URL = "https://v2.api.noroff.dev";
// export const API_KEY = `${BASE_URL}/auth/create-api-key`;
export const LOGIN = `${BASE_URL}/auth/login`;
export const REGISTER = `${BASE_URL}/auth/register`;
export const POSTS = `${BASE_URL}/social/posts`;
export const ALL_PROFILES = `${BASE_URL}/social/profiles`;
export const SINGLE_PROFILE = `${BASE_URL}/social/profiles/<name>`;
export const UPDATE_PROFILE = `${BASE_URL}/social/profiles/<name>`;
export const ALL_POSTS_BY_PROFILE = `${BASE_URL}/social/profiles/<name>/posts`;
export const FOLLOW_PROFILE = `${BASE_URL}/social/profiles/<name>/follow`;
export const UNFOLLOW_PROFILE = `${BASE_URL}/social/profiles/<name>/unfollow`;
export const SEARCH_PROFILES = `${BASE_URL}/social/profiles/search?q=<query>`;
