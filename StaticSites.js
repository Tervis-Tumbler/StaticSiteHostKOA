import path from 'path'
import url from 'url'

var $ModulePath = path.dirname(url.fileURLToPath(import.meta.url));

//https://github.com/koajs/static#options
export var staticSites = [
    // {
    //     root: `${$ModulePath}`
    // },
    {
        root: `${$ModulePath}\\..\\CustomyzerProjectExplorer`
    }
]