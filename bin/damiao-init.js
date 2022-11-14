#!/usr/bin/env node

// 命令行模块
const { program } = require('commander')
// 控制台显示颜色
const chalk = import('chalk')
// 远程下载模块
const downloadGitRepo = require('download-git-repo')
// 加载图标
const ora = import('ora')
// 引入path路径操作模块
const path = require('path')
// 获取模板文件damiao-template.json路径
const tPath = path.resolve(__dirname, '../damiao-template.json')
// 获取模板列表内容
let damiaoTemplates = require(tPath)

// 定义damiao init <template-name> [project-name]
program
  .usage('(damiao init) <template-name> [project-name]')
  .parse(process.argv)

// 当没有输入参数的时候，也就是直接使用damiao init命令
if (program.args.length < 1) {
  program.help()
  return
}

// 获取用户输入的参数
let tName = program.args[0]
let pName = 'project/' + program.args[1]
console.log(pName)
if (damiaoTemplates.filter(v => (v.name === tName)).length == 0) {
  chalk.then((chalk) => {
    console.log(chalk.default.red('模板名称不存在，请使用damiao list命令查看可输入的模板'))
  })
  return
}

// 校验输入的项目名称不能为空
if (!pName) {
  chalk.then((chalk) => {
    console.log(chalk.default.red('项目文件名称不能为空'))
  })
  return
}

// 获取模板地址
let url = damiaoTemplates.filter(v => (tName === v.name))[0].url

// 开始创建项目
chalk.then((chalk) => {
  const chalkColors = chalk.default
  console.log(chalkColors.yellow('开始创建项目'))
  ora.then((ora) => {
    // 出现加载图标
    const spinner = ora.default().start('下载拉取中...')
    // 传入参数 进行下载
    downloadGitRepo(url, pName, err => {
      if (err) {
        spinner.stop()
        console.log(chalkColors.red('创建目录失败 ' + err))
        return
      }

      spinner.stop()
      console.log(chalkColors.green('创建目录成功'))
      spinner.succeed('下载完成')

      console.log('\n to start')
      console.log('\n cd ' + pName + '\n')
    })
  })
})

