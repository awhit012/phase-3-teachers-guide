$(document).ready(function() {
  var qView = new Question.View();
  var qController = new Question.Controller(qView);
  qController.init()

  var aPresenter = new Answer.Presenter();
  var aView = new Answer.View(aPresenter);
  var aController = new Answer.Controller(aView);
  aController.init()

  var vAdapter = new Vote.Adapter();
  var vModel = new Vote.Model(vAdapter);
  var vView = new Vote.View();
  var vController = new Vote.Controller(vView,vModel);
  vController.init()
})


