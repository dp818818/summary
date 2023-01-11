import { ADDPERSON } from '../constan';

const initState = [];
export default function personReducer(preState = initState, action) {
    const { type, data } = action;
    switch (type) {
        case ADDPERSON:
            return [...preState, data];  //注意此处不可以用push等操作原数据的方法，因为需要返回新的数据，包括数据引用地址都要是新的，setState也是一样的
        default:
            return [...preState];
    }
}