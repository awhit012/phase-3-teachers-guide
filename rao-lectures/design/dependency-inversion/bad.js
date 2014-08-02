Foo.Controller = function(view,model) {
  this.view = view
  this.model = model
}

Foo.Controller.prototype = {

  makeComment: function(data) {
    var comment = this.model.newComment(data)
    this.model.runValidations(comment)
    this.model.saveComment(comment)
    if (comment.valid) {
      this.view.setCommentUrl(comment.id)
      this.view.setCommentValue(comment.value)
      this.view.setCommentHTML( comment.setUrl(comment.id) )
    }
  }

}