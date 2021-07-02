    
let dramaMovies = document.querySelector("#drama-movies")
dramaMovies.innerHTML = "Drama"


let horrorMovies = document.querySelector("#horror-movies")
horrorMovies.innerHTML = "Horror"


        const params = new URLSearchParams(location.search)
        console.log(params)
        const id = params.get('id')
        console.log(id)


            window.onload = async()=>{
            const urlEdit = `https://striveschool-api.herokuapp.com/api/movies/${id}`
            console.log(urlEdit)
            getData(urlEdit)
        }

        const getData = async (urlEdit)=>{
            const response = await fetch(urlEdit , {
            headers:{
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRkYjEwMDg5ZmJmODAwMTU4MWQ0OTUiLCJpYXQiOjE2MjUxNDE1MDQsImV4cCI6MTYyNjM1MTEwNH0.ZdotzUGr0u22PBE390YOfKVoZD5lgYxtPKS6b6gBLIM",
                "Content-Type": "application/json"
            }
            })
            const dataId = await response.json()
            // console.log(dramaMovies)
            displayDramaMovies(dataId)
        }




const postMovies = () => {
        const name = document.querySelector("#name").value
        const description = document.querySelector("#description").value
        const category = document.querySelector("#category").value
        const imageUrl = document.querySelector("#link").value
        const movie = {name : name, description : description, category : category, imageUrl : imageUrl}
        // if(err){
        //     alert("Something went wrong")

        // }
    fetch('https://striveschool-api.herokuapp.com/api/movies/', {
        headers:{
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRkYjEwMDg5ZmJmODAwMTU4MWQ0OTUiLCJpYXQiOjE2MjUxNDE1MDQsImV4cCI6MTYyNjM1MTEwNH0.ZdotzUGr0u22PBE390YOfKVoZD5lgYxtPKS6b6gBLIM",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(movie)
            
        }) //returns the result of fetch -> gets transfered to .then
        .then((response /*response = is the name of the returned value (you can give it) */) => response.json()) //return result of response.json()
        .catch((error) => console.error(error))

    }

    const headers = {
        headers:{
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRkYjEwMDg5ZmJmODAwMTU4MWQ0OTUiLCJpYXQiOjE2MjUxNDE1MDQsImV4cCI6MTYyNjM1MTEwNH0.ZdotzUGr0u22PBE390YOfKVoZD5lgYxtPKS6b6gBLIM",
            "Content-Type": "application/json"
        },
    }
    //===========================DELETE OR EDIT=========================//
        




 
      async function deleteMovie() {
        
        try {
          const response = await fetch(url + id, { method: 'DELETE', headers })
          location.assign("home.html")
        } catch (error) {
          alert(error.message)
        }
    }


    