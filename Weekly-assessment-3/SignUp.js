import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
export default function SignUp() {
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
      <View style={{marginVertical: 180}}>
        <View style={css.inti}>
          <View style={{margin: 10}}>
            <Text style={css.helo}>SignUp</Text>
            <TextInput
              style={css.email}
              placeholder="Email"
              placeholderTextColor="grey"
              underlineColorAndroid="transparent"></TextInput>
            <TextInput
              style={css.pass}
              placeholder="Password"
              placeholderTextColor="grey"
              underlineColorAndroid="transparent"></TextInput>
            <TextInput
              style={css.pass}
              placeholder="RetypePassword"
              placeholderTextColor="grey"
              underlineColorAndroid="transparent"></TextInput>
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
                Back
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
      </View>
    </LinearGradient>
  );
}

const css = StyleSheet.create({
  bg: {
    height: '100%',
    overflow: 'hidden',
    flex: 1,
    flexDirection: 'column',
  },
  inti: {
    flexDirection: 'column',
    height: 280,
    width: 300,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderWidth: 1,
    borderColor: 'grey',
    alignSelf: 'center',
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
  email: {
    textShadowRadius: 10,
    borderWidth: 2,
    borderRadius: 10,
    height: 40,
    margin: 10,
    borderColor: 'grey',
  },
  pass: {
    textShadowRadius: 10,
    borderWidth: 2,
    borderRadius: 10,
    height: 40,
    margin: 10,
    borderColor: 'grey',
  },
});
