import {foo,log} from './foo.js';
import './assets/common.css';
import './assets/index.less'
import './assets/index1.scss'
log(foo)

let arr =[1,2,3,4,5,6]
arr.filter(ele=> {
    return ele % 2 === 0;
}).map(item => {
    console.log(item)
})