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

// add https://github.com/koajs/mount support and a json to represent all the koa static options you want used

app.listen(3000);