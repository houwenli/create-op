#!/usr/bin/env node

// const pkg = require('../package.json')
// const { program } = require('commander');

// // const { creatOp, creatOpInit } = require('../tool/index')

// program
//   .version(pkg.version)
//   .option('-i, --init', '初始化op文件')
//   .option('-c, --create <env>', '根据环境和op配置文件创建op')
//   .action(opts => {
//     // 约定初始化文件
//     if (opts.init) {
//       console.log('处理初始化op文件')
//       // creatOpInit()
//     }
//     if (opts.create) {
//       console.log('处理根据环境和op配置文件创建op')
//       // creatOp()
//     }
//   })

  
// program.parse();



const inquirer = require('inquirer')

  const questions = [{
    type: 'list',
    message: '请选择环境:',
    name: 'env',
    choices: [
      "dev",
      "fat",
      "uat"
    ]
}]

inquirer
  .prompt(
    questions
  )
  .then(answers => {
    console.log(JSON.stringify(answers,null,'  '))
  })
  .catch(error => {
    if (error.isTtyError) {
        console.log('isTtyError: ',error)
    } else {
        console.log('Others err: ',error)
    }
  })
