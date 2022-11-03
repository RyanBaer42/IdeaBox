var savedIdeas = [];
var newIdea = new Idea();


//--------------------------------> Query Selectors -------------------------------->

var starImage = document.querySelector('#star-img');
var deleteImage = document.querySelector('#delete-img');
var titleInput = document.querySelector('.input-title');
var bodyInput = document.querySelector('.input-body');
var cardGrid = document.querySelector('.card-grid');
var saveButton = document.querySelector('.save-button');
saveButton.disabled = true;








//---------------------------------> Event Listeners -------------------------------->

saveButton.addEventListener('click', displayUserIdea);
titleInput.addEventListener('keyup', disableSaveButton);
bodyInput.addEventListener('keyup', disableSaveButton);







//----------------------------------> Dom Functions --------------------------------->

function createUserIdea() {
  var userTitle = titleInput.value;
  var userBody = bodyInput.value;
  newIdea = new Idea(userTitle, userBody);
  savedIdeas.push(newIdea);
  console.log(savedIdeas)
  };

function displayUserIdea(event) {
  event.preventDefault();
  createUserIdea()
  cardGrid.innerHTML = "";
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
  clearForm();
  saveButton.disabled = true;
};

function clearForm() {
  titleInput.value = "";
  bodyInput.value = "";
};

function disableSaveButton() {
  if (titleInput.value === '' && bodyInput.value === '') {
    saveButton.disabled = true
  } else if (titleInput.value && bodyInput.value) {
    saveButton.disabled = false
  }
}


//--------------------------------> Data Model Functions ---------------------------->








//---------------------------------> Utility Functions ------------------------------>
