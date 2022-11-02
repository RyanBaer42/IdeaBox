var savedIdeas = [];
var newIdea = new Idea();

//--------------------------------> Query Selectors -------------------------------->

var starImage = document.querySelector('#star-img');
var deleteImage = document.querySelector('#delete-img');
var titleInput = document.querySelector('.input-title');
var bodyInput = document.querySelector('.input-body');
var cardGrid = document.querySelector('.card-grid');








//---------------------------------> Event Listeners -------------------------------->







//----------------------------------> Dom Functions --------------------------------->

function createUserIdea() {
  var userTitle = titleInput.value;
  var userBody = bodyInput.value;
  newIdea = new Idea(userTitle, userBody);
  savedIdeas.push(newIdea);
}

function displayUserIdea() {
  createUserIdea()
  for (var i = 0; i < savedIdeas.length; i++) {
  cardGrid.innerHTML += `<section class="new-ideas-card">
  <div class="toolbar-images">
    <img class="small-images" src="./assets/star.svg" id="star-img"> 
    <img class="small-images" src="./assets/delete.svg" id="delete-img">
  </div>
  <div class="idea-title-body">
    <h2 class="idea-title">${savedIdeas[i].title}</h2>
    <p class="idea-body">${savedIdeas[i].body}</p>
  </div>
  <div class="comment-section">
    <img id="comment-image" class="small-images" src="./assets/comment.svg">
    <p class="comment-option">Comment</p>
  </div>
</section>`
  }
}




//--------------------------------> Data Model Functions ---------------------------->








//---------------------------------> Utility Functions ------------------------------>