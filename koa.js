const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
	ctx.body = '';
});

app.listen(80);