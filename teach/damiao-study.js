#!/usr/bin/env node

/**
 * 原生获取参数的方法 process.argv return Array
 * 第一个参数：node.js
 * 第二个参数：正在执行的JavaScript文件路径
 * 第三个参数之后是我们传入的参数
 */

// const { program } = require('commander')
// program
//   .version('1.0.0') // 设置版本号
//   .usage('<command> [damiao options]') // 用法
//   .option('-cr, --classroom <custom classroom\'s name>', 'current classroom name') // 添加potions选项
//   .command('add', 'add a damiao template')
//   .command('init', 'initilize a damiao project')
//   .command('create [options] <app-name>', 'create a new project powered by vue-cli-service')
//   .parse(process.argv) // 解析参数

// const promptList = [
//   {
//       type: "input",
//       message: "请设置用户名:",
//       name: "username",
//       default: "mck"
//   },
//   {
//     type: "input",
//     message: "请输入6位数的ID:",
//     name: "id",
//     validate: (val) => {
//       if (val.match(/^\d{6}$/ig)) {
//         return true
//       } else {
//         return "请输入6位数的ID"
//       }
//     }
//   },
//   {
//     type: "confirm",
//     message: "是否使用监听模式？",
//     name: "watch",
//     prefix: "prefix-"
//   },
//   {
//     type: "confirm",
//     message: "是否进行文件的批量监听？",
//     name: "more-watch",
//     suffix: "suffix-",
//     when: (answers) => {
//       if (answers.watch) {
//         return true
//       } else {
//         return false
//       }
//     }
//   },
//   {
//     type: "list",
//     message: "请选择一种单页面前端技术？",
//     name: "technology",
//     choices: [
//       "Vue", "React", "Angular"
//     ]
//   },
//   {
//     type: "checkbox",
//     message: "请选择一种单页面前端技术？",
//     name: "technologys",
//     choices: [
//       "Vue", "React", "Angular"
//     ]
//   },
//   {
//     type: "password",
//     message: "请输入密码:",
//     name: 'pwd'
//   },
//   {
//   type: "editor",
//   message: "请输入文本:",
//   name: 'editor-content'
// }
// ]
// import('inquirer').then((inquirer) => {
//   inquirer.default.prompt(promptList).then(answers=> {
//     console.log(answers)
//   })
// })

import('ora').then((ora) => {
  const spinner = ora.default().start('开始下载，加载中......')
  setTimeout(() => {
    spinner.color = 'green'
  }, 1000);
  setTimeout(() => {
    spinner.stop()
    spinner.succeed('恭喜您，下载成功！')
    spinner.fail('下载失败，请重新下载！')
    spinner.warn('下载遇到问题，请检查！')
    spinner.info('哈喽，您有一个消息！')
  }, 3000);
})

// import('chalk').then((chalk) => {
//   console.log(chalk.default.green(' √ ' ))
//   console.log(chalk.default.yellow(' ∆ ' ))
//   console.log(chalk.default.bold.red(' X ' ))
//   console.log(chalk.default.bgGreen(' √ ' ))
//   console.log(chalk.default.bgYellow(' ∆ ' ))
//   console.log(chalk.default.bold.bgRed(' X ' ))
//   console.log(`colors: ${chalk.default.blue('blue')}, ${chalk.default.red('red')}`) 
// })

// const download = require('download-git-repo')
// download("vuejs/awesome-vue", "project/awesome-vue", (err) => {
//   if (err) {
//     console.log(err)
//   } else {
//     import('chalk').then((chalk) => {
//       console.log(chalk.default.green('success'))
//     })
//   }
// })
