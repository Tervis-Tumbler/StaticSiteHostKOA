import Koa from 'koa'
import koastatic from 'koa-static'
import { staticSites } from './StaticSites.js'

let app = new Koa()

staticSites.map( $_ => {
    app.use(
        koastatic(
            $_.root
        )
    );
})

app.listen(3000);