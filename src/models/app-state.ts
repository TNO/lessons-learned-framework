/** During development, use this URL to access the server. */
const apiService = (
  API_SERVER || `${window.location.origin}${window.location.pathname || ""}`
).replace(/\/$/, ""); // remove trailing backslash

console.log(`API service: ${apiService}`);

/** Application state */
export const AppState = {
  isSearching: false,
  searchQuery: "",
  apiService,
};
