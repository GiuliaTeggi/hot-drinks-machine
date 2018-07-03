const checkResponse = (response) => {
  if (response.status !== 200) {
    throw new Error(`Error: getData response status ${response.status}`);
  }
  return response.json();
};

const getData = url => fetch(url)
  .then(checkResponse)
  .catch((err) => {
    throw new Error(`getData failed ${err}`);
  });

export default getData;
