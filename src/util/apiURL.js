export const apiURL = () => {
  if (
    process.env.NODE_ENV === "development" ||
    process.env.NODE_ENV === "test"
  ) {
    return "http://localhost:3024";
  }
  return "https://mighty-springs-93765.herokuapp.com";
};
