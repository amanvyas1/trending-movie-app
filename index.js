function showRe(data){
    let box = document.querySelector('#results')
    box.innerHTML = null
    console.log(data)
    if (data==null) {
        return;
    }
    data.forEach(function(el){
        let div = document.createElement('div')
        let img  = document.createElement('img')
        img.src = el.Poster
        let title = document.createElement('h3');
        title.innerText = el.Title
        div.addEventListener('click', function(e){
            box.innerHTML = null
            showMovie(el)
        });
        div.append(img,title)
        box.append(div)
    })
}


async function showMovie(el) {
    let id= el.imdbID
    let data = await movieDetails(id)
    console.log(data)
    append(data)
}

function append(el){
    let container = document.querySelector("#movie")
    container.innerHTML = null;
    let img = document.createElement("img")
    img.src = el.Poster
    let date = document.createElement("p")
    date.innerText = `Released: ${el.Released}`
    let title = document.createElement("h3")
    title.innerText = el.Title
    let genre = document.createElement("p")
    genre.innerText = `Genre: ${el.Genre}`
    let rate = document.createElement("p")
    rate.innerText = `IMDB Rating: ${el.imdbRating}`
    let cast = document.createElement("p")
    cast.innerText = `Cast: ${el.Actors}`
    let runtime = document.createElement("p")
    runtime.innerText = `Runtime: ${el.Runtime}`
    let plot = document.createElement("p")
    plot.innerText = `Plot: ${el.Plot}`
    let div = document.createElement("div")
    div.append(title,date,runtime,genre,rate,cast,plot)
    container.append(img,div)
}

async function movieDetails(id) {
    const url = `https://www.omdbapi.com/?apikey=dc738635&i=${id}`
    let res = await fetch(url)
    let data =await res.json()
    return data
}

async function main(){
    let query = document.querySelector('#query').value
    let data = await getData(query)
    showRe(data)
}

async function getData(query){
    const url = `https://www.omdbapi.com/?apikey=dc738635&s=${query}`
    let res = await fetch(url)
    let data = await res.json()
    return data.Search
}

let id;
function debounce(func, delay){
    if(id){
        clearTimeout(id)
    }
    id = setTimeout(() => {
        func()
    }, delay);
}



