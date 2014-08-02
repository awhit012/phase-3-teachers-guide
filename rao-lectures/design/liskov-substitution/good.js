CommentView = (function() {
    var updateCommentId = function() {}
    var updateCommentUrl = function() {}
    var addCommentListeners = function() {}
  return {
    render: function() {}
  }
})()

AnswerView = (function() {
  var updateAnswerId = function() {}
  var addAnswerForm = function() {}
  var addListeners = function() {}
  return {
    render: function() {}
  }
})()

AnswerView.render()
CommentView.render()

QuizController = (function(view) {
  var view = view
  return {
    updateComment: function() {
      view.render()
    }
  }
}(AnswerView))
