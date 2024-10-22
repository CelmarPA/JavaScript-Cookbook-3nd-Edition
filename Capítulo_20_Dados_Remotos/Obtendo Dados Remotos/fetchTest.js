const fetch = require('node-fetch');

fetch("https://google.com")
    .then(res => res.text())
    .then(body => console.log(body))
    .catch(err => console.error(err));
