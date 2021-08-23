/* eslint-disable prettier/prettier */
/* eslint-disable semi */
// 发布包
const fs = require('fs');
const _colors = require('colors');
const request = require('request')
const cliProgress = require('cli-progress');
const myArgs = process.argv.slice(2)
const biz = myArgs[0] || ''





const workSpace = {
  appKey: 'rn_ts',
  author: 'xiaoshitou',
  // token 永久有效
  token: 'token',
  bundleBuildPath: './../bundle.zip',
  // uploadUrl: 'http://192.168.3.27:3000/rn/bundleUpload',
  uploadUrl: 'http://localhost:3000/rn/bundleUpload',
};

// 一个 workSpace 对应多个 bundle
const bundleInfo = {
  // 业务包和开发者信息
<<<<<<< HEAD
  biz,
=======
  biz: 'ModuleDiscover',
>>>>>>> 31f8027b5f685d9c87202d632073956e576d8e1b
  ...workSpace,
};

const pushBundleToServer = (bundle = {}) => {
  const path = bundle.bundleBuildPath || ''
  let size = fs.lstatSync(path).size

  const formData = {
    // !!!顺序问题
    ...bundle,
    bundle: fs.createReadStream(path),
    // 其他附属数据，如果需要
  }


  const bar = new cliProgress.SingleBar({
    format: '正在上传 |' + _colors.green('{bar}') + '| {percentage}% || {value}/{total} 上传进度 || Speed: {speed}',
    barCompleteChar: '\u2588',
    barIncompleteChar: '\u2591',
    hideCursor: true,
  }, cliProgress.Presets.shades_classic);
  bar.start(100, 0, { speed: "N/A" });

  const r = request.post({
    url: bundle.uploadUrl,
    formData,
  }, (err, response, body) => {
    if (err) {
      console.log('saul ######## 上传失败', err)
    }

    bar.stop()
    console.log('statusCode:', response && response.statusCode)
    console.log('saul body', body)
    clearInterval(q)
  })

  var q = setInterval(function () {
    var dispatched = r.req.connection._bytesDispatched
    let percent = parseInt((dispatched * 100 / size), 10)
    bar.update(percent)
  }, 10);
}

const main = () => {
  pushBundleToServer(bundleInfo)
}

main()










