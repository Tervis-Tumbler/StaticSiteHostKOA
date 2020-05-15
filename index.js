import Koa from 'koa'
import koastatic from 'koa-static'
import { staticSites } from './StaticSites.js'
import cors from '@koa/cors'

let app = new Koa()
app.use(cors());

staticSites.map( $_ => {
    app.use(
        koastatic(
            $_.root
        )
    );
})

app.listen(65000);