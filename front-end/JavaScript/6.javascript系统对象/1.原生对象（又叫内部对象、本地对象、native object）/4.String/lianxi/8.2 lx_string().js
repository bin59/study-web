// 1.首字母大写
let str1 ="hi javascript! hi hello world!"

// //方法一   toUpperCase() + replace()
// let str2 ="";
// for(let i=0;i<str1.length;i++){
//     if( i==0) {
//         str2 = str1.substr(i,1).toUpperCase(str1);
//         str1 = str1.replace(str1[i],str2);
//     }else if(str1[i]  == " " ){
//         str2 = str1.substr(i+1,1).toUpperCase(str1);
//         str1 = str1.replace(str1[i+1],str2);
//     }
// }

// console.log(str1)

// //方法二  
let newStr = "";
str1.split(" ").forEach(function (item, index) {

    item = item.charAt(0).toUpperCase() + item.slice(1);

    newStr += item + " ";
});

console.log(newStr.slice(0, -1)); 


/*
2.url = "http://baidu.com?name=hy&id=1&sex=男";
*/
let url = "http://baidu.com?name=hy&id=1&sex=男";

/*
(1)将url转格式成为:
[ "name=hy" , "id=1", "sex=男"]
*/
url = url.split("?")[1].split("&");
console.log(url);

/*
(2)
将url转格式成为:
{
    name:hy,
    id:1,
    sex:男
}
*/

let obj = {};
url.forEach(function(val){
    obj[val.split("=")[0]] = val.split("=")[1];
});
console.log(obj);