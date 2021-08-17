/* eslint-disable prettier/prettier */
/* eslint-disable semi */
// 发布包
const FormData = require('form-data');
const fs = require('fs');


const workSpace = {
  appKey: 'rn_ts',
  author: 'xiaoshitou',
  // token 永久有效
  token: 'token_skjrlkeuwrojkhrerlsdfghjmbvcx',
  bundleBuildPath: './../tmp.zip',
  serverHost: 'localhost',
  serverPort: 3000,
};

// 一个 workSpace 对应多个 bundle
const bundleInfo = {
  // 业务包和开发者信息
  bizName: 'WelecomPage',
  ...workSpace,
};

const pushBundleToServer = (bundle = {}) => {
  const options = {
    hostname: bundle.serverHost,
    port: bundle.serverPort,
    path: '/rn/bundleUpload',
    method: 'POST',
  }


  const form = new FormData();
  form.append('bundle', fs.createReadStream(bundle.bundleBuildPath));
  form.append('version', new Date().getTime());
  Object.keys(bundle).forEach(key => {
    form.append(key, bundle[key] || '')
  })

  form.submit(options, (err, res) => {
    res.setEncoding('utf8')
    res.on('data', (chunk) => {
      console.log('saul EEEE', chunk)
    })
    res.on('end', () => {
    })

  res.on('progress', (bytesReceived, bytesExpected) => {
    console.log('saul ######## 进度', bytesReceived, bytesExpected)
  });
  })

}

const main = () => {
  pushBundleToServer(bundleInfo)
}

main()










