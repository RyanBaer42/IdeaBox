class Idea {
  constructor(titleInput, bodyInput) {
    this.id = Date.now();
    this.title = titleInput;
    this.body = bodyInput;
    this.starred = false;
    }

  updateIdea() {
    //toggle between the two star images, image source white and red,
    // will update the star value to true or false
  }
}
