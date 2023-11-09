
const path = require('path')
const fs = require('fs')
const axios = require('axios');

const log = require('./log')

/**
 * 读取文件内容
 */
const readFileContent = (filePath, code = 'utf8') => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, code, (err, data) => {
      if(err){
        log.error('读取文件失败' + err.message);
        return reject(err)
      }
      resolve(data)
    })
  })
}

/**
 * 1、获取当前目录下的配置文件
 * 2、拼装参数
 * 3、调用接口
 */
const creatOp = async () => {

  // 获取当前配置路径
  let cfgPath = path.join(process.cwd(), 'cfg.json')
  let data = await readFileContent(cfgPath)

  let cfgData = []
  try {
    cfgData = JSON.parse(data)
  } catch(e) {}

  let param = {
    system: cfgData.system
  }

  getData(param)
}

// 调用接口
const getData = (param) => {
  axios.get('https://jsonplaceholder.typicode.com/todos/1', { json: true }).then(function (res) {
    // 处理成功情况
    let data = res.data || ''
    log.log(data.title);
    log.warning('创建成功了')
  })
  .catch(function (error) {
    // 处理错误情况
    log.error(error);
  })
  .then(function () {
    // 总是会执行
  });
}


module.exports = {
  creatOp
}

