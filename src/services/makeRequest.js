export const makeRequest = request => {
    return fetch(`${url}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request)
    })
      .then(res => res.json());
  };
  
//   export const fetchHabits = () => {
//     return fetch(`${process.env.API_URL}/api/v1/habits`)
//       .then(res => res.json());
//   };