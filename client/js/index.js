const showGraphQLData = document.getElementById('button');
const container = document.getElementById('container');

const query = `
  query {
    songs{
      id
      title
      artist
    }
  }
`;

async function fetchGraphQLData(query) {

  try {
    const response = await fetch("http://localhost:8080/graphql", {
      method: 'POST',
      // telling the api that we will be getting json data
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      // Query the API
      body: JSON.stringify({
        query
      })
      // convert the response to json
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      const data = await response.json();
      data.data.songs.forEach(song => renderToDOM(song));
    }

  } catch (error) {
    console.error('Error:', error);
  }
}

fetchGraphQLData(query);


function renderToDOM(data) { 
  let newElement = document.createElement('div');
  newElement.id = `todo_item_${data.id}`;
  
  newElement.innerHTML = `
    <span>${data.id}</span>
    <p>${data.title}</p>
    <p>${data.artist}</p>
  `

  container.appendChild(newElement);
}

