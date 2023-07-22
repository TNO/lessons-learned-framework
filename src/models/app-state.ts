/** During development, use this URL to access the server. */
const apiService = API_SERVER || window.location.origin;

console.log(`API service: ${apiService}`);

/** Application state */
export const AppState = {
  isSearching: false,
  searchQuery: "",
  apiService,
};
