import koa from 'koa';
import router from 'koa-simple-router';
import serve from'koa-static';
import render from'koa-swig';
import co from'co';
import path from 'path';




const app = new koa();

app.context.render = co.wrap(render({
  // ...your setting

  root:path.join(__dirname, 'views'),
  cache:false,
  ext: 'html',
  writeBody: false
}));

console.log(path.join(__dirname + '/public'));
app.use(serve(path.join(__dirname + '/public')));




app.use(router(_ => {
  _.get('/index', async ctx => ctx.body = await ctx.render('index'));
  _.get('/update', async ctx => ctx.body = await JSON.parse("{\"value\":1}"));
}));

app.listen(3000);