import React from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions, StyleSheet,
  ScrollView, View,
  Image, Text, ImageBackground
} from 'react-native';

const window = Dimensions.get('window');

const dataKeys = [
  { key: 'truant', text: '旷课' },
  { key: 'Failing', text: '挂科' },
  { key: 'Illegal', text: '违纪' },
  { key: 'score', text: '学分' },
  { key: 'flunk', text: '不及格' },
  { key: 'grade', text: '平均成绩' },
  { key: 'absence', text: '早操缺勤' },
  { key: 'study', text: '晚自习缺勤' },
];
const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: '#fff',
  },
  avatarBg: {
    width: '100%',
    height: 130,
  },
  avatarContainer: {
    padding: 20,
    marginTop: 60,
    marginBottom: 20,
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  name: {
    marginTop: 10,
    marginLeft: 16,
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  item: {
    padding: 20,
    paddingTop: 20,
    paddingBottom: 0,
    width: "100%",
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
});


export default function Menu({
  data
}) {
  return (
    <ScrollView scrollsToTop={false} style={styles.menu}>
      <ImageBackground source={require('../assets/img/menu_bg.png')} resizeMode='cover' style={styles.avatarBg} >
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={{ uri: `http://xz.jvtc.jx.cn/JVTC_XG/DownLoad/Student/${data.loginName}.jpg` }}
          />
          <Text style={styles.name}>{data.loginName}</Text>
        </View>
      </ImageBackground>
      {
        dataKeys.map(item => (
          <View style={styles.item} key={item.key}>
            <Text style={{ fontSize: 16, color: '#333' }}>{item.text}:</Text>
            <Text style={{ fontSize: 18, marginLeft: 6, color: '#000', fontWeight: '600' }}>{data[item.key]}</Text>
          </View>
        ))
      }
    </ScrollView>
  );
}

Menu.propTypes = {
  data: PropTypes.object.isRequired
};