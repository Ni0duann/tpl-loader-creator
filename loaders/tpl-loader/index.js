const {tplReplace} = require('../utils')


function tplLoader (source) {
    source = source.replace(/\s+/g,'');
    console.log(source);

    const log = this.query.log ? `console.log('compiled the file which is from ${this.resourcePath}')` : ''

    
    return `
        export default (options) => {
            ${tplReplace.toString()}
            ${log}
            return tplReplace('${source}',options);
        }
    `
}



module.exports = tplLoader;
