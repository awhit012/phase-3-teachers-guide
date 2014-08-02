Foo.Model = function(opts) {
  this.id = opts["id"];
  this.title = opts["title"];
  this.content = opts["content"];
  this.score = opts["score"];
  this.htmlTemplate = opts["htmlTemplate"];
}

Foo.Model.prototype = {
  toData: function() {
    return { id: this.id,
      title: this.title,
      content: this.content,
      capitalizedContent: this.capitalize(this.content),
      score: this.score,
      scoreString: this.score.toString(),
      html: this.toHTML() }
  },
  toHTML: function() {
    this.setId(this.htmlTemplate,this.id);
    this.settitle(this.htmlTemplate,this.title);
    this.setId(this.htmlTemplate,this.id);
    return this.htmlTemplate;
  }
}