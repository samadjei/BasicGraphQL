import { gqlFetch } from "../utilities/apiUtils";

export const fetchTodos = async () => {
  return [
    {
      id: 0,
      dateCreated: new Date(),
      dateUpdated: new Date(),
      name: "Clean dishes",
      description: "Need to clean dishes",
      completed: false
    },
    {
      id: 1,
      dateCreated: new Date(),
      dateUpdated: new Date(),
      name: "Wash clothes",
      description: "Need to wash clothes",
      completed: true
    }
  ];

  // return await gqlFetch(`
  //     query FetchTodos {
  //       todos {
  //         dateCreated
  //         dateUpdated
  //         id
  //         name
  //         description
  //         completed
  //       }
  //     }
  //     `);
};


fetch('https://countries.trevorblades.com', {
method: 'POST',
headers: { "Content-Type": "application/json" },
body: JSON.stringify({
    query: ` {
        continents {
            name 
            code
        }
    }
    `
})
})
.then(res => res.json())
.then(data => {
    console.log(data.data.continents)
})
