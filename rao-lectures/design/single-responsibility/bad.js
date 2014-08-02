$(document).ready(function() {
  var model = new AjaxModel()
  var view = new Question.View();
  var controller = new AjaxController(model,view);
  controller.bindListeners()
})
