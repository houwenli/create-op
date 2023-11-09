#!/usr/bin/env node

const pkg = require('../package.json')
const { program } = require('commander');

const { creatOp } = require('../tool/index')

program
  .version(pkg.version)
  .option('-c, --create', '根据op配置文件创建op')
  .action(opts => {
    if (opts.create) {
      creatOp()
    }
  })

  
program.parse();
