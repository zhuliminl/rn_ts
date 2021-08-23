/* eslint-disable prettier/prettier */
/* eslint-disable semi */
// 发布包
// const bizs = require('./constants/bizs')
const bizs = require('./constants/bizsLarge')
const { exec } = require("child_process");


const packBiz = (bizConfig) => {
  return new Promise((resolve, reject) => {
    exec(`node publish.js ${bizConfig.biz}`, (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return reject(error)
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return reject(stderr)
      }
      console.log('packBiz >>>>>>>>>>>>>>>>>>', stdout)
      return resolve(stdout)
    })
  })
}

const createBizApp = (bizConfig) => {
  return new Promise((resolve, reject) => {
    exec(`node createBizApp.js '${JSON.stringify(bizConfig)}'`, (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return reject(error)
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return reject(stderr)
      }
      console.log('createBizApp >>>>>>>>>>>>>', stdout)
      return resolve(stdout)
    })
  })
}


const main = async () => {
  for (const bizConfig of bizs) {
    // 生成模版文件 APP
    await createBizApp(bizConfig)
    await packBiz(bizConfig)
  }

}

main()