Foo.Controller = function(model,commentView,errorView) {
  this.commentView = commentView;
  this.errorView = errorView;
  this.model = model;
}

Foo.Controller.prototype = {
  updateComment: function(data) {
    this.model.create(data,this)
  },
  displayNewComment: function(data) {
    this.commentView.render(data)
  },
  dispayError: function(data) {
    this.errorView.render(data)
  }
}

Comment.model = function() {
  this.create = function(commentData,controller) {
    this.newComment(commentData);
    this.runValidations();
    this.saveComment();
    if ( this.valid() ) {
      controller.displayNewComment( comment.toData() )
    } else {
      controller.displayError( comment.errors() )
    }
  }
}