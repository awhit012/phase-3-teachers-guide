Foo.Model = function(opts) {
  this.id = opts["id"];
  this.title = opts["title"];
  this.content = opts["content"];
  this.score = opts["score"];

  this.toData: function() {
    return {  id: this.id,
              title: this.title,
              content: this.content,
              score: this.score }
  }
}

Foo.HTMLPrsenter(template) {
  this.template = template;

  this.present = function(json) {
    this.setId(opts.id);
    this.settitle(opts.title);
    this.setId(opts.id);
    return this.template;
  }
}


model = new Foo.Model()
webPresenter = new Foo.HTMLPresenter(template)
htmlFooData = webPresenter.present( model.toData() )

