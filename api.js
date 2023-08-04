export const fetchFromUrl = () =>
  fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
    return response.json();
  });

export const fetchFromProxy = () =>
  fetch("http://localhost:3000/posts").then((response) => {
    return response.json();
  });
