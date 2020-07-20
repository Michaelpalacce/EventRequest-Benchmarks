const rayo = require('rayo');

rayo({ port: 80 })
.get('/', (req, res) => res.end(`ok`))
.start();