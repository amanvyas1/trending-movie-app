// https://api.themoviedb.org/3/movie/now_playing?api_key=dc41059b749abb621e5f32b8a63f8e9f

async function getTrending(){
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=dc41059b749abb621e5f32b8a63f8e9f`
    let res = await fetch(url)
    let data= await res.json()
    return data.results
}

main()

async function main(){
    let data = await getTrending()
    append(data)
}

function append(data){
    let container = document.querySelector("#container")
    container.innerHTML = null;
    data.forEach(function(el){
        let card = document.createElement("div")
        let img = document.createElement("img")
        img.src = `https://image.tmdb.org/t/p/w500${el.poster_path}`
        let title = document.createElement("h3")
        title.innerText = el.original_title
        let date = document.createElement("p")
        date.innerText = `Release date: ${el.release_date}`
        card.append(img,title,date)
        container.append(card)
    })

}
