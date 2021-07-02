// const displayMovies = (callback) => {
//     fetch('https://striveschool-api.herokuapp.com/api/movies/', {
//         headers:{
//             "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRkYjEwMDg5ZmJmODAwMTU4MWQ0OTUiLCJpYXQiOjE2MjUxNDE1MDQsImV4cCI6MTYyNjM1MTEwNH0.ZdotzUGr0u22PBE390YOfKVoZD5lgYxtPKS6b6gBLIM",
//             "Content-Type": "application/json"
//         },
            
//         })
//         .then((response) => response.json())
//         .then((data) => callback(null, data))
        
//         .catch((error) => callback(error, null))
// }
// window.onload = function () {
//     displayMovies((error, data) => {
//         if (error) {
//             console.log({error})
//         } else {
//             console.log({data})
//         }
//     })
// }

