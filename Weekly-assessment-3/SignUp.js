import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Ico from 'react-native-vector-icons/MaterialIcons';
import MCL from 'react-native-vector-icons/MaterialCommunityIcons';
import Ant from 'react-native-vector-icons/AntDesign';
import Ent from 'react-native-vector-icons/Entypo';
import {white} from 'react-native-paper/lib/typescript/styles/colors';
export default function SignUp() {
  return (
    <ImageBackground style={Sss.bg} source={require('./signup.jpg')}>
      <Text style={Sss.head}>Sign Up</Text>
      <View style={Sss.fill}>
        <View style={Sss.section}>
          <Ico
            name="drive-file-rename-outline"
            size={22}
            color={'white'}
            style={Sss.icostyle}
          />
          <TextInput
            placeholder="Full Name"
            placeholderTextColor="white"
            style={Sss.Input}
            underlineColorAndroid={'transparent'}
          />
        </View>
        <View style={Sss.section}>
          <MCL name="email" size={22} color={'white'} style={Sss.icostyle} />
          <TextInput
            placeholder="Email"
            placeholderTextColor="white"
            style={Sss.Input}
            underlineColorAndroid={'transparent'}
          />
        </View>
        <View style={Sss.section}>
          <Ant name="user" size={22} color={'white'} style={Sss.icostyle} />
          <TextInput
            placeholder="Username"
            placeholderTextColor="white"
            style={Sss.Input}
            underlineColorAndroid={'transparent'}
          />
        </View>
        <View style={Sss.section}>
          <Ent name="eye" size={22} color={'white'} style={Sss.icostyle} />
          <TextInput
            placeholder="Password"
            placeholderTextColor="white"
            secureTextEntry={true}
            style={Sss.Input}
            underlineColorAndroid={'transparent'}
          />
        </View>
        <TouchableOpacity style={Sss.btn}>
          <Text style={Sss.txtbtn}>SignUp</Text>
        </TouchableOpacity>
        <Text style={{textAlign: 'center'}}>
          Already have an Account ? <Text style={Sss.signin}>Sign In</Text>
        </Text>
      </View>
    </ImageBackground>
  );
}

const Sss = StyleSheet.create({
  bg: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
    height: '100%',
  },
  head: {
    fontSize: 30,
    fontFamily: 'LBT900',
    marginBottom: 40,
    color: 'white',
  },
  Input: {
    fontSize: 12,
    fontFamily: 'LBT900',
    width: '100%',
  },
  fill: {
    width: '100%',
    marginBottom: 40,
  },
  section: {
    flexDirection: 'row',
    paddingVertical: 1,
    borderWidth: 1,
    borderColor: 'white',
    height: 40,
    margin: 5,
    borderRadius: 10,
  },
  icostyle: {
    padding: 5,
  },
  txtbtn: {
    fontFamily: 'LBT900',
    color: 'white',
  },
  btn: {
    width: '100%',
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'white',
    shadowOpacity: 1,
    shadowColor: 'black',
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowRadius: 2,
    paddingVertical: 10,
    marginBottom: 20,
    alignItems: 'center',
    marginTop: 30,
  },
  signin: {
    textDecorationLine: 'underline',
    color: 'blue',
  },
});
