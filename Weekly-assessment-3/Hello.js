import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
export default function Hello() {
  return (
    <LinearGradient
      colors={['#7BD5F5', '#787FF6', '#4ADEDE', '#1CA7EC', '#1F2F98']}
      start={{x: 0.25, y: 0.25}}
      end={{x: 1, y: 1}}
      style={css.bg}>
      <View
        style={{
          backgroundColor: 'rgba(255,255,255,0.6)',
          position: 'absolute',
          height: 80,
          width: 80,
          borderRadius: 40,
          marginHorizontal: -15,
          marginVertical: -15,
        }}
      />
      <View
        style={{
          backgroundColor: 'rgba(255,255,255,0.7)',
          position: 'absolute',
          height: 80,
          width: 80,
          borderRadius: 40,
          marginHorizontal: 300,
          marginVertical: -15,
        }}
      />
      <View
        style={{
          backgroundColor: 'rgba(255,255,255,0.6)',
          position: 'absolute',
          height: 80,
          width: 80,
          borderRadius: 40,
          marginHorizontal: 295,
          marginVertical: 555,
        }}
      />
      <View
        style={{
          backgroundColor: 'rgba(255,255,255,0.7)',
          position: 'absolute',
          height: 80,
          width: 80,
          borderRadius: 40,
          marginHorizontal: -15,
          marginVertical: 555,
        }}
      />

      <View style={css.inti}>
        <View style={{margin: 10}}>
          <Text style={css.helo}>Hello</Text>
          <Text style={{textShadowRadius: 10}}>this is hello react native</Text>
          <Text style={{fontSize: 11, color: 'grey', textShadowRadius: 10}}>
            if you wanna go check another please comment in the curse main
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <TouchableOpacity style={css.butt1}>
            <Text
              style={{textAlign: 'center', fontSize: 14, fontWeight: '600'}}>
              SignIn
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={css.butt2}>
            <Text
              style={{textAlign: 'center', fontSize: 14, fontWeight: '600'}}>
              SignUp
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const css = StyleSheet.create({
  bg: {
    height: '100%',
    overflow: 'hidden',
  },
  inti: {
    flexDirection: 'column',
    height: 130,
    width: 300,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderWidth: 1,
    borderColor: 'grey',
    alignSelf: 'center',
    marginVertical: 225,
  },
  helo: {
    fontSize: 20,
    fontFamily: 'North',
    color: 'black',
  },
  butt1: {
    height: 30,
    backgroundColor: '#7BD5F5',
    width: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
  butt2: {
    height: 30,
    backgroundColor: '#7BD5F5',
    width: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
});
