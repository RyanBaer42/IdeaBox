var savedIdeas = [];
var favoriteIdeas = [];
var newIdea = new Idea();
var showState = "all";


//--------------------------------> Query Selectors -------------------------------->

var starImage = document.querySelector('#star-img');
var deleteImage = document.querySelector('#delete-img');
var titleInput = document.querySelector('.input-title');
var bodyInput = document.querySelector('.input-body');
var cardGrid = document.querySelector('.card-grid');
var saveButton = document.querySelector('.save-button');
saveButton.disabled = true;
var showStarredIdeasButton = document.querySelector('.show-starred-button')
var searchBar = document.querySelector('.input-search')







//---------------------------------> Event Listeners -------------------------------->

saveButton.addEventListener('click', function() {
  event.preventDefault();
  createUserIdea();
  displayUserIdea();
});
titleInput.addEventListener('keyup', disableSaveButton);
bodyInput.addEventListener('keyup', disableSaveButton);
cardGrid.addEventListener('click', function() {
  if (event.target.id === 'delete-img') {
    deleteCard(event);
  } else if (event.target.id === 'star-img') {
    favoriteIdea();
  }
});
showStarredIdeasButton.addEventListener('click', function(event){
  if(event.target.innerText === "Show Starred Ideas"){
    event.target.innerText = "Show All Ideas"
    showState = "favorites"
    displayFavorites()
  } else if(event.target.innerText === "Show All Ideas") {
    event.target.innerText = "Show Starred Ideas"
    showState = "all"
    showIdeas(savedIdeas)
  }
});
searchBar.addEventListener('keyup', function(){
  if(showState === "all"){
    filterIdeas(savedIdeas);
  } else {
    filterIdeas(favoriteIdeas)
  }

})





//----------------------------------> Dom Functions --------------------------------->

function createUserIdea() {
  var userTitle = titleInput.value;
  var userBody = bodyInput.value;
  newIdea = new Idea(userTitle, userBody);
  savedIdeas.push(newIdea);
};

function displayUserIdea() {
  showIdeas(savedIdeas)
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

function deleteCard() {
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

function starred(array, index) {
  if (array[index].starred) {
    return "./assets/star-active.svg"
  }
  return "./assets/star.svg"
};

function showIdeas(array){
  cardGrid.innerHTML = "";
  for (var i = 0; i < array.length; i++) {
  cardGrid.innerHTML += `
  <section class="new-ideas-card" id="${array[i].id}">
    <div class="toolbar-images">
      <img class="small-images" src="${starred(array, i)}" id="star-img">
      <img class="small-images delete" src="./assets/delete.svg" id="delete-img">
    </div>
    <div class="idea-title-body">
      <h2 class="idea-title">${array[i].title}</h2>
      <p class="idea-body">${array[i].body}</p>
    </div>
    <div class="comment-section">
      <img id="comment-image" class="small-images" src="./assets/comment.svg">
      <p class="comment-option">Comment</p>
    </div>
  </section>`
  }
}

function displayFavorites(){
  // favoriteIdeas = savedIdeas.filter(singleIdea => {
  //   if(singleIdea.starred){
  //     return singleIdea
  //   }
  // })
  // favoriteIdeas = []
  for (var i =0;i<savedIdeas.length;i++){
    if(savedIdeas[i].starred){
      favoriteIdeas.push(savedIdeas[i])
    }
  }
  return showIdeas(favoriteIdeas)
}

function filterIdeas(array){
  var filteredIdeas = array.filter(singleIdea => {
    var bodyText = singleIdea.body.toLowerCase()
    var titleText = singleIdea.title.toLowerCase()
    if(bodyText.includes(searchBar.value.toLowerCase()) || titleText.includes(searchBar.value.toLowerCase())){
      return singleIdea
    }
  })
  return showIdeas(filteredIdeas)
}

//--------------------------------> Data Model Functions ---------------------------->








//---------------------------------> Utility Functions ------------------------------>
