import React from 'react';
import {View, Text} from 'react-native';
import Hello from './Hello';
import SignUp from './SignUp';
import SignIn from './Signin';
import Signin from './Signin';

export default function CurseMain() {
  return (
    <View style={{flex: 1}}>
      {/* <Hello></Hello> */}
      {/* <SignUp /> */}
      <Signin></Signin>
    </View>
  );
}
