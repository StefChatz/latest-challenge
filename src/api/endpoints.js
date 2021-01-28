const baseUrl = "http://localhost:8080";

/// /////////////////////////// GET requests //////////////////////////////

const ridesHistoryUrl = (pageNumber, pageItemsLimit) =>
  `${baseUrl}/items?_page=${pageNumber}&_limit=${pageItemsLimit}`;

const rideDetailsUrl = (rideId) => `${baseUrl}/items/${rideId}`;

/// /////////////////////////// POST requests //////////////////////////////

const commentSubmissionUrl = `${baseUrl}/comments`;

export { ridesHistoryUrl, rideDetailsUrl, commentSubmissionUrl };
