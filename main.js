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

saveButton.addEventListener('click', function(event) {
  event.preventDefault();
  createUserIdea();
  displayUserIdea();
});
titleInput.addEventListener('keyup', disableSaveButton);
bodyInput.addEventListener('keyup', disableSaveButton);
cardGrid.addEventListener('click', function(event) {
  if (event.target.id === 'delete-img') {
    deleteCard(event);
  } else if (event.target.id === 'star-img') {
    favoriteIdea();
  }
});







//----------------------------------> Dom Functions --------------------------------->

function createUserIdea() {
  var userTitle = titleInput.value;
  var userBody = bodyInput.value;
  newIdea = new Idea(userTitle, userBody);
  savedIdeas.push(newIdea);
};

function displayUserIdea(event) {
  cardGrid.innerHTML = "";
  for (var i = 0; i < savedIdeas.length; i++) {
  cardGrid.innerHTML += `
  <section class="new-ideas-card" id="${savedIdeas[i].id}">
    <div class="toolbar-images">
      <img class="small-images" src="${starred(i)}" id="star-img">
      <img class="small-images delete" src="./assets/delete.svg" id="delete-img">
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
};

function deleteCard(event) {
  var deleteID = Number(event.target.parentNode.parentNode.id)
    for (var i = 0; i < savedIdeas.length; i++){
      if (savedIdeas[i].id === deleteID) {
          savedIdeas.splice(i, 1);
        }
      }
  displayUserIdea();
};

function favoriteIdea() {
  var starID = Number(event.target.parentNode.parentNode.id);
    for (var i = 0; i < savedIdeas.length; i++){
      if (savedIdeas[i].id === starID) {
        savedIdeas[i].updateIdea();
    }
  } displayUserIdea();
};

function starred(index) {
  if (savedIdeas[index].starred) {
    return "./assets/star-active.svg"
  }
  return "./assets/star.svg"
};
//--------------------------------> Data Model Functions ---------------------------->








//---------------------------------> Utility Functions ------------------------------>
