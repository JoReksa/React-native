import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Ico from 'react-native-vector-icons/EvilIcons';
import LinearGradient from 'react-native-linear-gradient';

export default function kartu({data, deleteTodo}) {
  return (
    <LinearGradient
      colors={['#7BD5F5', '#787FF6', '#4ADEDE', '#1CA7EC', '#1F2F98']}
      start={{x: 0.25, y: 0.25}}
      end={{x: 1, y: 1}}
      style={style.grad}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'North',
              fontSize: 12,
            }}>
            {data}
          </Text>
        </View>
        <View>
          <TouchableOpacity style={style.buten2} onPress={() => deleteTodo()}>
            <Ico name="trash" size={25} color={'white'} />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}
const style = StyleSheet.create({
  buten2: {
    backgroundColor: 'rgba(0,0,0,0)',
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 10,
  },
  deletetxt: {
    color: 'white',
    textAlign: 'center',
  },
  grad: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    flex: 1,
    margin: 10,
    flexDirection: 'row',
    borderWidth: 1.5,
    borderColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
});
