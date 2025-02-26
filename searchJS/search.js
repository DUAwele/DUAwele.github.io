async function printdata()
{
let apikey = "drhSKkesObsKIXdA8Y7HtC7mWaJxKA0d";

let input = document.getElementById("searchbar").value;

let info = null;

let url = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${input}&limit=5`);

info = await url.json();

console.log(info)
let picshere = document.getElementById("picshere")
for(let i = 0; i < info.data.length; i++)
{
let img = `<img src="${info.data[i].images.original.url}">`
picshere.innerHTML += img;
console.log(info.data[i].images.original.url)
}


}
