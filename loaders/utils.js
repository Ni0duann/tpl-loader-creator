function tplReplace(template, replaceObject) {
  return template.replace(/\{\{(.*?)\}\}/g, function (node, key) {
    return replaceObject[key] !== undefined ? replaceObject[key] : node;
  });
}

module.exports = {
    tplReplace
}  