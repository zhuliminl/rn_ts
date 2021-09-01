
const fs = require('fs');
var faker = require('faker');

const bizConfigStr = process.argv[2] || '{}'
const bizConfig = JSON.parse(bizConfigStr) || {}

const {
  biz = "ServiceVideo",
  desc = '短视频',
  logoUrl = 'http://www.baidu.com',
  imgs = [],
  textSize = 1000,
} = bizConfig

const randomColor = () => {
  let letters = '0123456789ABCDEF'
  let color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}




const textView = [...Array(textSize * 1)].map(_ => {
  var randomName = faker.name.findName()
  return `<Text style={styles.fake_txt}>${randomName}</Text>`
}).join('\n')




// 页面模版
const indexTep = `
import React, { Component } from 'react'
import { View, ScrollView, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  wraper: {
    backgroundColor: '#FFF',
    padding: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  desc: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#999',
    marginBottom: 30,

  },
  border: {
    width: '100%',
    height: 1,
    backgroundColor: '#EEE'
  },
  fake_txt: {
    color: '${randomColor()}'
  }
})


export default () => {
    return (
      <ScrollView
        style={styles.wraper}
      >
        <Text style={styles.header}>
        ${biz}
        </Text>
        <View style={styles.border}></View>
        <Text style={styles.desc}>
        ${desc}
        </Text>
        <View>
        ${textView}
        </View>
      </ScrollView>
    )
}
`

fs.writeFileSync(`./BizApp/index.js`, indexTep)