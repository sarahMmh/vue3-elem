// https://cli.vuejs.org/zh/guide/webpack.html
// https://cli.vuejs.org/zh/config/#pages
const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    pages: {
        index: {
            entry: 'src/main.ts'
        }
    },
    chainWebpack: config => {
        config.resolve.extensions
            .add('ts');
    }
};
