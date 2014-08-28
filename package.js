Package.describe({
  summary: "Front-end framework from Twitter, version 3",
  version: "3.2.1",
  git: "https://github.com/pinglamb/meteor-bootstrap3.git"
});

Package.on_use(function (api) {
  api.use('jquery@1.0.0')

  var path = Npm.require('path');
  api.add_files(path.join('css', 'bootstrap.css'), 'client');
  api.add_files(path.join('js', 'bootstrap.js'), 'client');
  api.add_files(path.join('fonts', 'glyphicons-halflings-regular.eot'), 'client');
  api.add_files(path.join('fonts', 'glyphicons-halflings-regular.svg'), 'client');
  api.add_files(path.join('fonts', 'glyphicons-halflings-regular.ttf'), 'client');
  api.add_files(path.join('fonts', 'glyphicons-halflings-regular.woff'), 'client');
});
