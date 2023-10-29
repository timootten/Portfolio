export const getCookies = (documentCookie: string): { [key: string]: string } => {
  // Get the cookies from the document.cookie string.
  const cookies = documentCookie.split(';');

  // Create an empty object to store the cookies.
  const cookiesObject: { [key: string]: string } = {};

  // Iterate over the cookies and add them to the object.
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split('=');

    cookiesObject[cookieName] = decodeURIComponent(cookieValue);
  }

  // Return the object containing all of the cookies.
  return cookiesObject;
};