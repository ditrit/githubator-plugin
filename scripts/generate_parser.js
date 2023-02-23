const fs = require('fs');

import('lidy-js/parser/node_parse.js').then(({ preprocess }) => {
  preprocess('src/lidy/github.yml');
}).then(() => {
  return new Promise((resolve) => {
    fs.readFile('src/lidy/github.js', 'utf8', (err, data) => {
      resolve(data);
    });
  });
}).then((data) => {
  fs.writeFile(
    'src/lidy/github.js',
    data.replace("from '../parser/parse.js'", "from 'lidy-js'"),
    () => {}
  );
});
