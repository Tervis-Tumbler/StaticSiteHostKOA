import Koa from 'koa'
import path from 'path'
import url from 'url'
import koastatic from 'koa-static'

const app = new Koa()

var $ModulePath = path.dirname(url.fileURLToPath(import.meta.url));

app.use(
    koastatic(
        `${$ModulePath}`,
        //https://github.com/koajs/static#options
        {}
    )
);

app.listen(3000);