import attrsParse from  './attrsParse.js'
export default function (htmlStr) {
    //指针
    let index = 0;
    //栈1 存放开始标签名称
    let stack1 = [];
    //栈2 存放标签中内容
    let stack2 = [{ children: [] }];
    //开始标签正则  例如：<div class='abc'  id='efg'>
    let startRegExp = /^\<([a-z]+[1-6]?)(\s[^\<]+)?\>/;
    //结束标签正则  </div>
    let endRegExp = /^\<\/([a-z]+[1-6]?)\>/;
    //获取文字正则  文字是在 (文字)</...>    ^\([^\<]+) 不是<的文字
    let wordRegExp = /^([^\<]+)\<\/[a-z]+[1-6]?\>/;
   
    while (index < htmlStr.length -1 ) {
        //rest 剩余未遍历的字符
        let rest = htmlStr.substring(index);
        //匹配开始标记
        if (startRegExp.test(rest)) {
            //开始标记节点名称
            let tagName = rest.match(startRegExp);
            //入栈 例如：div
            stack1.push(tagName[1]);
            let attrs = tagName[2];
            //入栈  按照ast格式 attrsParse（）解析attrs
            stack2.push({ 'tag': tagName[1], 'children': [], 'attrs': attrsParse(tagName[2]) });
            //<>占两个字符 + class 与 id 的长度
            let attrsLen = 0;
            if(attrs){
                attrsLen = attrs.length;
            }
            index = index + tagName[1].length + 2 + attrsLen;
        } else if (endRegExp.test(rest)) {
            //匹配结束标记 
            stack1.pop();
            let endTag = rest.match(endRegExp)[1];
            let stact2_pop = stack2.pop();
            stack2[stack2.length - 1].children.push(stact2_pop);
            // </>占三个字符 
            index = index + endTag.length + 3;
        }else if( wordRegExp.test(rest) ){
            //是文字
            let word = rest.match(wordRegExp)[1];
            // stack2 栈顶添加文字节点
            //如果word不全是空字符串
            if( /\S/g.test(word)){
                stack2[stack2.length - 1].children.push({'text':word,'type':3});  
            }
            index= index + word.length;
        }else{
            index++;
        }
    }
    //返回栈顶数据  只剩一项  直接stack2[0]也可
    return stack2[stack2.length - 1].children;
}