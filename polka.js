const polka = require('polka')

polka()
.get('/', (_, res) => res.end(''))
.listen(80)