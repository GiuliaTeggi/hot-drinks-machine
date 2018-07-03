const checkResponse = (response) => {
  if (response.status !== 200) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }
  response.json();
};

const getData = url => fetch(url)
  .then(checkResponse)
  .catch((err) => {
    throw new Error(`getRecipes failed ${err}`);
  });

export default getData;
