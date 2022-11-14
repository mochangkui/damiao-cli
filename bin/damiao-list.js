#!/usr/bin/env node

// 引入path路径操作模块
const path = require('path')
// 获取模板文件damiao-template.json路径
const tPath = path.resolve(__dirname, '../damiao-template.json')
// 获取模板列表内容
let damiaoTemplates = require(tPath)

damiaoTemplates.forEach(v => {
  import('chalk').then((chalk) => {
    console.log(`模板名称：${chalk.default.green(v.name)}，模板地址：${chalk.default.yellow(v.url)}`)
  })
})
