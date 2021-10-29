import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Ico from 'react-native-vector-icons/EvilIcons';
import LinearGradient from 'react-native-linear-gradient';

export default function kartu({data, deleteTodo}) {
  return (
    <LinearGradient
      colors={['#7BD5F5', '#787FF6', '#4ADEDE', '#1CA7EC', '#1F2F98']}
      start={{x: 0.25, y: 0.25}}
      end={{x: 1, y: 1}}
      style={{
        backgroundColor: 'red',
        flex: 0.5,
        marginBottom: 10,
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'space-between',
      }}>
      <View style={{}}>
        <View style={{flexDirection: 'row'}}>
          <Image source={{uri: data.avatar}} style={{height: 50, width: 60}} />
          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
              }}>
              {data.todo}
            </Text>
            <View style={{}}>
              <Text style={{textAlign: 'center'}}>{data.description}</Text>
            </View>
            <Text style={{textAlign: 'center'}}>Status: {data.status}</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={{
          width: 50,
          backgroundColor: 'yellow',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => deleteTodo()}>
        <Ico name="trash" size={25} color={'black'} />
      </TouchableOpacity>
    </LinearGradient>
  );
}
