
const fs = require('fs');
var faker = require('faker');

const bizConfigStr = process.argv[2];
// console.log('hhhhhh', bizConfigStr)
// return
const bizConfig = JSON.parse(bizConfigStr)
const {
  biz = '',
  desc = '',
  logoUrl = '',
  imgs = [],
  textSize = 1
} = bizConfig




const textView = [...Array(textSize * 100)].map(_ => {
  var randomName = faker.name.findName()
  return `<Text>${randomName}</Text>`
}).join('')




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
        <View>
        ${textView}
        </View>
      </View>
    )
}
`

fs.writeFileSync(`./BizApp/index.js`, indexTep)