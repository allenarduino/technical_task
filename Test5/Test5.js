/*Write a function that gets JSON from the following link
(https://jsonplaceholder.typicode.com/posts) and returns an object with id = 5.
*/

function getFilterJson() {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      let filteredData = data.filter((item) => item.id === 5);
      console.log(filteredData);
      return filteredData;
    })
    .catch((err) => console.log(err));
}

getFilterJson();
