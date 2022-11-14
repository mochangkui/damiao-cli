#!/usr/bin/env node

// 引入fs文件操作模块
const fs = require('fs')
// 引入path路径操作模块
const path = require('path')
// 获取模板文件damiao-template.json路径
const tPath = path.resolve(__dirname, '../damiao-template.json')
// 获取模板列表内容
let damiaoTemplates = require(tPath)

// 定制问答
let questions = [
  {
    type: 'input',
    name: 'template-name',
    message: '请输入模板名称',
    validate: (val) => {
      if (val === '') {
        return '模板名称不能为空'
      } else if (damiaoTemplates.filter((v) => (v.name === val)).length > 0) {
        return '当前模板已经存在'
      } else {
        return true
      }
    }
  },
  {
    type: 'input',
    name: 'template-url',
    message: '请输入模板地址',
    validate: (val) => {
      if (val === '') {
        return '模板地址不能为空'
      } else {
        return true
      }
    }
  }
]
// 引入问答交互模块
import('inquirer').then((inquirer) => {
  inquirer.default.prompt(questions).then((answers) => {
    // 获取问答内容
    let templateName = answers['template-name']
    let templateUrl = answers['template-url']
    // 更新到damijao-template.json模板文件中
    damiaoTemplates.push({
      name: templateName,
      url: templateUrl
    })
    // 更新damiao-template.json文件内容
    fs.writeFileSync(tPath, JSON.stringify(damiaoTemplates))
    import('chalk').then((chalk) => {
      console.log(chalk.default.green('新增模板成功！'))
    })
  })
})
