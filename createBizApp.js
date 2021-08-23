
const fs = require('fs');

const bizConfigStr = process.argv[2];
// console.log('hhhhhh', bizConfigStr)
// return
const bizConfig = JSON.parse(bizConfigStr)
const {
  biz = '',
  desc = '',
  logoUrl = '',
  imgs = [],
} = bizConfig







// 页面模版
const indexTep = `
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
const styles = StyleSheet.create({
  wraper: {
  }
})

export default () => {
    return (
      <View
        style={styles.wraper}
      >
        <Text>
        ${biz}
        </Text>
        <Text>
        ${desc}
        </Text>
      </View>
    )
}
`

fs.writeFileSync(`./BizApp/index.js`, indexTep)