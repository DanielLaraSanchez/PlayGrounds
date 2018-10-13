//
//
//
//
//
//
//
//
//
//
//
//
//
// function createUser(element){
//   return document.createElement(element);
// }
//
// function append(parent, element){
//   return document.appendChild(element);
// }
//
//
// fetch('https://randomuser.me/api/?result=6')
//
// .then(function(data){
//
// })
//
// .catch(function(error){
//
// });


























function createNode(element){
  return document.createElement(element);
}

function append(parent, el){
  return parent.appendChild(el);
}

const ul = document.getElementById("authors");

const url = 'https://randomuser.me/api/?results=100';

fetch(url)
.then((resp) => resp.json())
.then(function(data){
  console.log(data);
  let authors = data.results;

  return authors.map(function(author){
    let li = createNode('li');
    let img = createNode('img');
    let span = createNode('span');

    img.src = author.picture.medium;

    span.innerHTML=`${author.name.first}
    ${author.name.last}`;

    append(li, img);
    append(li, span);
    append(ul, li);


  })
})
.catch(function(error){
  console.log(JSON.stringify(error));
})
