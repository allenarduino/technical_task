/*Write a function that gets JSON from the following link
(https://jsonplaceholder.typicode.com/posts) and returns an object with id = 5.
*/

async function getFilterJson() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await response.json();
    let filteredData = data.filter((item) => item.id === 5);
    console.log(filteredData);
  } catch (err) {
    console.log(err);
  }
}

getFilterJson();
