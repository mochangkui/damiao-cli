#!/usr/bin/env node

const { Command } = require('commander')

const program = new Command()
program
  // .name('damiao-cli') // 如果不设置默认式文件名称！
  .name('damiao') // 如果不设置默认式文件名称！
  .version('1.0.0')
  .usage('<command> [damiao options]')
  .command('add', 'add a damiao template')
  .command('delete', 'delete a damiao template')
  .command('list', 'list all damiao templates')
  .command('init', 'generate a new project from damiao templates')
  
  program.parse(process.argv)