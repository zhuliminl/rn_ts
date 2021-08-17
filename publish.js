/* eslint-disable prettier/prettier */
/* eslint-disable semi */
// 发布包
const fs = require('fs');
const request = require('request')


const workSpace = {
  appKey: 'rn_ts',
  author: 'xiaoshitou',
  // token 永久有效
  token: 'token_skjrlkeuwrojkhrerlsdfghjmbvcx',
  bundleBuildPath: './../tmp.zip',
  uploadUrl: 'http://192.168.3.27:3000/rn/bundleUpload',
};

// 一个 workSpace 对应多个 bundle
const bundleInfo = {
  // 业务包和开发者信息
  bizName: 'WelecomPage',
  ...workSpace,
};

const pushBundleToServer = (bundle = {}) => {
  const path = bundle.bundleBuildPath || ''
  let size = fs.lstatSync(path).size

  const formData = {
    bundle: fs.createReadStream(path),
    ...bundle,
    // 其他附属数据，如果需要
  }

  const r = request.post({
    url: bundle.uploadUrl,
    formData,
  }, (err, response, body) => {
    if (err) {
      console.log('saul ######## 上传失败', err)
    }

    console.log('statusCode:', response && response.statusCode)
    console.log('saul body', body)
    clearInterval(q)
  })

  var q = setInterval(function () {
    var dispatched = r.req.connection._bytesDispatched
    let percent = dispatched * 100 / size
    console.dir("saul Uploaded: " + percent + "%")

  }, 10);
}

const main = () => {
  pushBundleToServer(bundleInfo)
}

main()










