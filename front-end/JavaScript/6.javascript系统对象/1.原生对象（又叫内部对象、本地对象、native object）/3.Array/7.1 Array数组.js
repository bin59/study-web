/********Array数组***********
引用类型-Array类型

1、js数组(Array)
数组对象是使用单独的变量名来存储一系列的值

例子：每个数字就是数组的值(数组成员), 每个值的下标都不一样(初始值下标为0)
    [1, 2, 3, 4, 5, 6, 7]

2、创建数组
    1、new 操作符
    使用Array构造函数, 实例化一个对象
    let arr = new Array()

    2、字面量
    let arr = [];

empty 空值(数组出现)

*******************/

console.log("1.创建数组的三种方式：");
// 1.创建数组的三种方式：
    // new操作符
        let arr = new Array();
        arr[0]="a";
        arr[1]="今天天气真不错";
        arr[2]="1234";
        arr[3]=1234;
        console.log(arr);

        let arr = new Array(7);
        let arr1 = new Array("7");
        console.log(arr);// [ <7 empty items> ]
        console.log(arr1);// [ '7' ]

        // 注意：new Array(7)这种方式创建的空js数组为：幽灵数组，只有长度没有元素，无法使用forEach、map等正确遍历
        /* 
            new Array(n) 将创建一个 n * undefined 的数组，那么为什么不能使用 new Array(n).map((_, index) => index) 函数得到 [0, 1, 2 ..., n-1] 这样的数组呢？

            我知道 new Array(n).fill(0).map((_, index) => index) 这样是可以的，但 n * undefined 和 n * 0 的两个数组有本质区别吗？
        */

        /* 
            初始化一个n*m的二维数组常见的坑：
            错误方式1：new Array(n).fill(new Array(m).fill(0)) 所有数组指向同一个引用
            错误方式2：new Array(n).map(v => new Array(m).fill(0)) “幽灵数组”问题
            正确方式1: new Array(n).fill(0).map(v => new Array(m).fill(0))
         */

        /* 
        
            Array(n) 或者 new Array(n) 生成的数组只有长度，没有元素，所以我称之为“幽灵数组”。这样的数组用 forEach 或者 map 等都不能正确遍历（因为没有元素），但很神奇的是它有 [@@iterator]，可以使用 for ... of 遍历，也可以使用展开运算符来展开成数组（如 [...Array(10)]），更是可以使用 Array.from() 来转换。

            所以生成数组的时候，有很多种方式。关于创建数组，参阅:[JavaScript 数据处理 - 列表篇 | 八、创建数组](https://segmentfault.com/a/1190000041497710#item-8)
         */


    // new 的简单写法
        let arr1 = new Array("a","今天天气真不错","1234",[1,2,3,"3"]);
        console.log(arr1);  

    // 字面量表示法创建
        let arr2 = ["a","今天天气真不错",1234,"1234",[1,2,3,"3"]];
        console.log(arr2);

    // 数组里面的值，可以是任何数据类型的值

console.log("2.访问数组, 获取数组中的数据");
// 2.访问数组, 获取数组中的数据
    console.log(arr[0]);//a
    console.log(arr[2]);//1234
    console.log(arr[10]);//undefined

console.log("3.添加数组中的数据");
// 3.添加数组中的数据
    let arr3 = [];
    arr3[0] = 1;
    arr3[2] = 2;
    arr3[10] = 10;

console.log("4.检测数组");
// 4.检测数组
// instanceof操作符的问题是当开发环境引入多个框架存在多个全局环境的时候，会出现 不同的Array构造函数，进而出现不同的结果。
    let array= [1, 2, 3];
    let array2 = "[]";

    console.log(array instanceof Array); //true
    console.log(array2 instanceof Array); //false

// Array.isArray()这个方法很好的解决了这个问题。
    console.log(Array.isArray(arr));//true
    console.log(Array.isArray(arr1));//true
    console.log(Array.isArray(array2));//false


