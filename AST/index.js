import parse from './parse.js';
let template = `<div class='abc'  id='efg' ref='hijk'>
        <ul>
            <li>
                苹果
            </li>
            <li>
                橘子
            </li>
            <li>
                菠萝
            </li>
        </ul>
    </div>`

const ast = parse(template);
console.log(ast);