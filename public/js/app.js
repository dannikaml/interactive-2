function renderContent() {
    var source = document.getElementById('content-template').innerHTML;
    var template = Handlebars.compile(source);
    var context = getContent();
    var html = template(context);
    document.getElementById('content-placeholder').innerHTML = html;
  }

  