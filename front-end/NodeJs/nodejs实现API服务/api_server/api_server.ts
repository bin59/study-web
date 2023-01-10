/*
 * @Author: binbin59 zbin59@163.com
 * @Date: 2021-11-09 16:31:46
 * @LastEditors: binbin 1959409749@qq.com
 * @LastEditTime: 2022-10-27 22:59:44
 * @FilePath: \web\study\front-end\NodeJs\nodejs实现API服务\api_server\api_server.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 使用express模块：```cnpm i express```

// const express = require('express')
// 这种写法在ts中不支持,使用下面的ES Module规范
import express from 'express'
import { DataStore } from './data'
// express不存在？
//先 yarn add express
//在  yarn add @types/express

const app = express()

// 假如客户端发送一个GET请求
// req请求，res响应
app.get('/', (req, res) =>
  // 向客户端回写数据
  // 通过end()方法回吐给客户端
  // res.send('1122')

  // 作为json格式的数据返回客户端
  res.json(DataStore.list)
)

// 调用listen()方法
app.listen(8088, () => {
  console.log('服务已开启：' + 'http://localhost:8088/')
})
