import tpl from './info.tpl'

const oApp = document.querySelector('#app');

const info = tpl ({
    name: 'Ni0duann',
    age: 18,
    career: '前端工程师',
    hobby: '旅行 钢琴'
})

console.log(info);


oApp.innerHTML = info;