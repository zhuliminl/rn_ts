/* eslint-disable prettier/prettier */
/* eslint-disable semi */
// 发布包
const bizs = require('./constants/bizs')
const { exec } = require("child_process");


const packBiz = () => {
  return new Promise((resolve, reject) => {
    exec(`node publish.js`, (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return reject(error)
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return reject(stderr)
      }
      console.log(' ..', stdout)
      return resolve(stdout)
    })
  })
}

const main = async () => {
  for (const biz of bizs) {
    await packBiz()
  }

}

main()