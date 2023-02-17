/***********
数组遍历
 不会改变原数组
    1.forEach(callback)
    2、map( callback)
    3.every(callback)
    4.some(callback)
    5.filter(callback)  过滤所有   find()  过滤第一个
    6.reduce(callback) 
 会改变
    7.sort(sortFn)  
***********/

// callback,作为参数传递的函数 （在IE8以上的浏览器才支持）,像这种函数，由我们创建但是不由我们调用，我们称为回调函数
/*
1.forEach(callback)
    数组中有几个元素函数就会执行几次，每次执行时，浏览器会将遍历到的元素以实参的形式传递进来
    对数组的每个元素执行一次提供的函数, 没有返回值(return的结果:undefined)
    参数：
        callback(回调函数:作为参数传递的函数)为数组中每个元素执行的函数，该函数会接收一到三个参数
            第一个参数   数组中正在处理的当前元素
            第二个参数  数组中正在处理的当前元素的索引(下标)[可选]
            第三个参数  正在操作的数组[可选]

    不会改变原数组

*/
let arr1 = [1, 2, 3, 4];
arr1.forEach(function(val, index,_arr){
    console.log(val);
    console.log(index);
    console.log(_arr);
});


/*
2、map( callback)方法
    功能:
        通过指定函数处理数组的每个元素，并返回处理之后的数组参数:
    注意:
        不会对空数组进行检测
        不会改变原数组
*/

//输出arr2数组中大于3的元素
let arr2 = [1, 2, 3, 4,5];

//map()方法
let newArr2 = [];
newArr2 = arr2.map(function(item,index,array){
    if(item > 3){
        return item;
    }
});
console.log(newArr2);
console.log(arr2);//不修改原数组

//forEach()方法
let newArr2a = [];
arr2.forEach(function(val ,index){
    if(val >=3){
        // return val;// 返回的是undefined  
        newArr2a.push(val);//可以推到新数组
    }
});
console.log(newArr2a);

/*
3.every(callback)
    功能：
        返回的是一个布尔值，成立条件是每一个元素满足条件就会返回true，否则就是false
    注意:
       不会对空数组进行检测
       不会改变原数组

4.some(callback)
    返回的是一个布尔值，成立条件是只要有一个元素满足条件就会返回true，否则就是false
    注意:
        不会对空数组进行检测
        不会改变原数组
*/

let arr3 = [123,33,4,5,888]
//arr3中每个元素是否大于10
let newArr3;
newArr3 = arr3.every(function(item){
    return item > 10;
});
console.log(newArr3);


//是否有元素大于500
let newArr4;
newArr4 = arr3.some(function(item){
    console.log(item);
    return item >500;
});
console.log(newArr4);
console.log(arr3);

console.log("-----------------");
console.log("5.filter(callback)");
/*
5.filter(callback)
    创建一个新数组，新数组里面的元素是返回符合条件的所有元素
    注意:
        不会对空数组进行检测
        不会改变原数组
*/
let arr5 = [1,2,3,4,5];
let newArr5=[];
//过滤arr5数组中大于3的元素
newArr5 = arr5.filter(function(val,index){
    return val >3;
})

//链式调用  直接在后面加  .xxxx()
// newArr5 = arr5.filter(function(val,index){
//     return val >3;
// }).forEach(function(item){
//     console.log(item);
// })

// 不过注意，这里.foeEach(),还返回了undefined,  foeEach(没有返回值，后面不能加.xxx()

console.log(newArr5);
console.log(arr5);

/*
6.reduce(callback) 累加器
    接受一个函数作为累加器，数组中每一个值（从左到右）开始缩减，最终计算为一个值
    参数： 
        callback(回调函数:作为参数传递的函数)
        第一个参数    total      必填，初始值，计算结束后的返回值       
        第二个参数    current    必填，当前元素      
        第三个参数    index      可选，当前元素索引值      
        第四个参数    array      可选，当前元素所属的数组对象
        
        init  可选，传递给函数的初始值

    注意:
        不会对空数组进行检测
*/

//数组中所有值求和
let arr6 = [1,2,3,4,5];
let arr66 = [];
arr66 = arr6.reduce(function(total,current,inedx){
    return current+total;
},40);
console.log(arr66);//40+1+2+3+4+5

let a=[1,2,4,5,6]
console.log(a.reduce((x,y) =>x+y));

//数组中所有值求和，求乘积
let a=[1,2,4,5,6]
console.log(a.reduce((x,y) =>x+y));
console.log(a.reduce((x,y) =>x*y));

//>30的加到新数组
let arr1a = [10, 20, 30, 40,50];
let arr2a= [];
arr2a = arr1a.filter(function(val){
    return val>50;
}).reduce(function(total,current,index){
    return total.concat(current);
},[]);
console.log(arr2a);

// 获取参数的平均数值
const average = (...args) => args.reduce((a, b) => a + b) / args.length;

console.log(average(1, 2, 3, 4));


/*
7.sort(sortFn)  排序
    对数组进行排序
    参数： 
       sortFn  可选。规定排序的顺序
    注意:
        该方法会改变原数组
*/

//1.不传参   数组成员将会按照字符串编码的顺序进行排序 (数字会转为字符串)    Unicode编码大小顺序：数字  大写  小写  文字
let arr7 = [1,40,6,100,"haha","Aa","哈哈",60,78];
arr7.sort();//不需要重复赋值,说明 sort 会影响原数组
console.log(arr7);


//2.传参
//（1从小到大
let arr7a = [1,40,6,60,78,100];

// arr7a.sort(function(a,b){
//     return a - b;
// });
arr7a.sort((a,b)=>a-b);

console.log(arr7a);

//（2从大到小
let arr7b = [1,40,6,60,78,100];
arr7b.sort(function(a,b){
    return b - a;
});
console.log(arr7b);


// 字符串的长度排序
var arr= ['a','ggg','grfga','aa'];
arr.sort(function(a,b){
    return a.length - b.length;
})
console.log(arr);//(4) ["a", "aa", "ggg", "grfga"]

// 将对象里面的年龄进行有序排序
var weng = {
    name : "weng",
    age:18,
}
var zhi = {
    name : "zhi",
    age:25,
}
var ye = {
    name : "ye",
    age:20,
}

var arr = [weng,zhi,ye];
arr.sort(function(a,b){
    return a.age - b.age;
})
console.log(arr);



/*

其3：字节长度排序（需要先封装一个方法）

求字节长度的代码

function retBytes(str){
				var num = str.length;
				for(var i = 0;i < str.length;i++){
					if(str.charCodeAt(i) > 255){
						num++;
					}
				}
				return num;
			}

在后台验证上面的方法：
var str=‘hell0翁’
undefined
retBytes(str)

--------------------------------------------------------------------------------------------------------------------------
搞定了求字节长度的方法，我们再来求字节长度排序

function retBytes(str){
				var num = str.length;
				for(var i = 0;i < str.length;i++){
					if(str.charCodeAt(i) > 255){
						num++;
					}
				}
				return num;
			}
			 var arr= ['你真帅WZY','二分','志dfsg','gdfgdfgafaf','业ad'];
			 arr.sort(function(a,b){
					return retBytes(a)- retBytes(b);
			 })//在后台输入 arr 即可查询 ，也可以在后面加上 consoele.log(arr);直接打印

解决了有序排列的问题，那么接下来我们来搞定无序排列


对数组内的数据无序排列（乱序）
无序排列需要用到一个方法：Math.random()
Math.random() 这东西的作用是在(0,1)之间，不包括0，也不包括1。随机生成一个数

上代码：

 var arr=[1,2,3,4,5];
 arr.sort(function(){
			 	return Math.random()-0.5;
			});

当 Math.random()取在(0.5,1)之间  Math.random()-0.5 > 0
当 Math.random()取在(0,0.5])之间  Math.random()-0.5 <0

因此排列顺序随机
*/
