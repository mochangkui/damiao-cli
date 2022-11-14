#!/usr/bin/env node
const { program } = require('commander')

program
  .version('1.0.0')
  .usage('<command> [damiao options]')
  .command('add', 'add a damiao template')
  .command('delete', 'delete a damiao template')
  .command('list', 'list all damiao templates')
  .command('init', 'generate a new project from damiao templates')
  .parse(process.argv)
