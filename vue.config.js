
console.log(process.env.NODE_ENV)

const path = require('path')
const resolve = dir => {
    return path.join(__dirname, dir)
}


module.exports = {
    publicPath: "myelement",
    outputDir: "output",
    productionSourceMap: true,
    
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('_com', resolve('src/components'))
    },
    
    devServer: {
        open: true,
        host: '127.0.0.1',
        port: '8888',
        https: false,
        proxy: null,
        before: app => {
            
        }
    }
}