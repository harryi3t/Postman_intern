var input = document.getElementById("search");                     //Seachbox
input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {                                      //KeyCode for Enter Key
    document.getElementById("myBtn").click();
  }
});
var dataitems; 
 const outerdiv=document.getElementById('vid');                   // Outer Division
function genre(x){                                                // Variable x contains the searched title 
  if(x=='searchfor')                                              // If the title is entered in the search field
  x=document.getElementById('search').value;                      // to get the searched title
outerdiv.innerHTML=" ";                                           // Clear the outer  division
const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&type=''&maxResults=12&order=viewCount&key=AIzaSyCGyBLWD-uYONjQqdmqBvhCiFy2cGhtsnI&q="+x;       //The searched title is appended in the url   
fetch(url)                                                        // api call using the promises
.then((resp) => resp.json())
.then(function(data) {
 dataitems=data.items;
return dataitems.map(function(id1) {
let innerdiv=document.createElement('div');                       // creating inner division
let p =document.createElement('text');                            // To store the title
p.style.backgroundColor = "black";
p.style.color = "red";
p.innerText=id1.snippet.title.substr(0,40);                       
let p1 =document.createElement('p');                              // To store the date
p1.style.color = "white";
p1.innerText="Published Date :  "+id1.snippet.publishedAt.substr(0,10);
innerdiv.setAttribute('class', 'col-md-4');
var s = "https://www.youtube.com/embed/"+id1.id.videoId;
let ifrme =document.createElement('iframe');
ifrme.setAttribute('src', s);
ifrme.setAttribute('allowfullscreen','1');
ifrme.setAttribute('width', '450');
ifrme.setAttribute('height', '350');
innerdiv.appendChild(ifrme);
innerdiv.appendChild(p);
innerdiv.appendChild(p1);
outerdiv.appendChild(innerdiv);
})
})
.catch(function(error) {                                         // if promise is not resolved
console.log(JSON.stringify(error));
});
}
function sortbyname(){                                          // Sort by title
  dataitems.sort(function (a, b) {
    return a.snippet.title.localeCompare(b.snippet.title);      // Te api is not called again. The Json is sorted according to tile and displayed.
});
  outerdiv.innerHTML=" ";
return dataitems.map(function(id1) {
let innerdiv=document.createElement('div');
let p =document.createElement('text');
p.style.backgroundColor = "black";
p.style.color = "red";
p.innerText=id1.snippet.title.substr(0,40);
let p1 =document.createElement('p');
p1.style.color = "white";
p1.innerText="Published Date :  "+id1.snippet.publishedAt.substr(0,10);
innerdiv.setAttribute('class', 'col-md-4');
var s = "https://www.youtube.com/embed/"+id1.id.videoId;
let ifrme =document.createElement('iframe');
ifrme.setAttribute('src', s);
ifrme.setAttribute('allowfullscreen','1');
ifrme.setAttribute('width', '450');
ifrme.setAttribute('height', '350');
innerdiv.appendChild(ifrme);
innerdiv.appendChild(p);
innerdiv.appendChild(p1);
outerdiv.appendChild(innerdiv);
});
}
function sortbydate(){                                              // Sort by date
  dataitems.sort(function (a, b) {
     return (a.snippet.publishedAt < b.snippet.publishedAt) ? 1 : -1;
});
  outerdiv.innerHTML=" ";
return dataitems.map(function(id1) {
let innerdiv=document.createElement('div');
let p =document.createElement('text');
p.style.backgroundColor = "black";
p.style.color = "red";
p.innerText=id1.snippet.title.substr(0,40);
let p1 =document.createElement('p');
p1.style.color = "white";
p1.innerText="Published Date :  "+id1.snippet.publishedAt.substr(0,10);
innerdiv.setAttribute('class', 'col-md-4');
var s = "https://www.youtube.com/embed/"+id1.id.videoId;
let ifrme =document.createElement('iframe');
ifrme.setAttribute('src', s);
ifrme.setAttribute('allowfullscreen','1');
ifrme.setAttribute('width', '450');
ifrme.setAttribute('height', '350');
innerdiv.appendChild(ifrme);
innerdiv.appendChild(p);
innerdiv.appendChild(p1);
outerdiv.appendChild(innerdiv);
});
}


