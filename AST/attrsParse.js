export default function (attrs) {
   //  AST的attrs [{name:'',value:''}] 的形式  现在是这样的 " class='abc'  id='efg'  ref='hijk'"
   //继续使用扫描  
   if (attrs == undefined) return [];
   let point = 0;
   let isYinHao = true;
   //定义一个数组存放attrs
   let attrsList = [];
   for (let i = 0; i < attrs.length; i++) {
      //'abc' 第一个引号 false ，第二个就是 true 
      if (attrs[i] == "'") {
         isYinHao = !isYinHao;
      }
      //不是引号并且为 空字符时，就收集一次 
      if (isYinHao && attrs[i] == "'") {
         attrsList.push(attrs.substring(point, i + 1));
         //修改指针的位置为当前i+1  '的位置加1 下一个数据
         point = i + 1;
      }
   }

   //收集完成，将数据转换格式
   attrsList = attrsList.map(e => {
      e = e.trim();
      let item = {
         name: e.split('=')[0],
         value: e.split('=')[1].replace(/'/g,"")  //去掉引号,因为有两层 ""
      };
      return item;
   });
   return attrsList;
}