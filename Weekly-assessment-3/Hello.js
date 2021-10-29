import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Ion from 'react-native-vector-icons/FontAwesome5';
import Ant from 'react-native-vector-icons/AntDesign';
export default function Hello() {
  return (
    <ImageBackground source={require('./14271.jpg')} style={css.Image}>
      <View>
        <View style={{flexDirection: 'row'}}>
          <Text style={css.headt}>Luminares</Text>
          <Ion
            name="theater-masks"
            size={28}
            color="white"
            style={{textShadowRadius: 3, textShadowColor: 'black'}}
          />
        </View>
        <View style={{flexDirection: 'column', marginVertical: 20}}>
          <Text
            style={{
              color: 'black',
              fontFamily: 'LB900',
              textShadowColor: 'white',
              textShadowRadius: 1,
              fontSize: 12,
              marginHorizontal: 20,
              textDecorationLine: 'underline',
            }}>
            Magic Like Story to Tale
          </Text>
        </View>
      </View>

      <View style={css.inti}>
        <TouchableOpacity
          style={{
            margin: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={css.helo}>Log in with your Twitter</Text>
          <Ant name="right" size={15} color="white" style={{marginTop: 2}} />
        </TouchableOpacity>
        <TouchableOpacity style={css.inti2}>
          <View
            style={{
              margin: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={css.helo2}>Log in with your Account</Text>
            <Ant
              name="right"
              size={15}
              color="#9dc3eb"
              style={{marginTop: 1}}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Text
            style={{
              textAlign: 'center',
              textShadowRadius: 10,
              marginBottom: 30,
            }}>
            Don't have an account?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={css.inti3}>
          <View
            style={{
              margin: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={css.helo3}>Sign In</Text>
            <Ant
              name="right"
              size={15}
              color="white"
              style={{
                marginTop: 1,
                textShadowRadius: 1,
                textShadowColor: 'black',
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const css = StyleSheet.create({
  headt: {
    fontFamily: 'LB900',
    color: 'white',
    fontSize: 25,
    textShadowRadius: 3,
    textShadowColor: 'black',
  },
  inti: {
    flexDirection: 'column',
    height: 40,
    width: 250,
    borderRadius: 20,
    backgroundColor: '#0bb4e5',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  inti2: {
    marginTop: 30,
    height: 40,
    width: 250,
    borderRadius: 20,
    backgroundColor: 'white',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#9dc3eb',
  },
  inti3: {
    height: 40,
    width: 250,
    borderRadius: 20,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'white',
    shadowOpacity: 1,
    shadowColor: 'black',
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowRadius: 2,
  },
  helo: {
    fontSize: 14,
    fontFamily: 'Tbold',
    color: 'white',
    textAlign: 'center',
    marginLeft: 40,
  },
  helo2: {
    fontSize: 14,
    fontFamily: 'Tbold',
    color: '#9dc3eb',
    textAlign: 'center',
    marginLeft: 39,
  },
  helo3: {
    fontSize: 14,
    fontFamily: 'LB900',
    color: 'white',
    textAlign: 'center',
    marginLeft: 90,
    textShadowRadius: 1,
    textShadowColor: 'black',
  },
  butt1: {
    height: 30,
    backgroundColor: '#7BD5F5',
    width: 50,
    borderRadius: 5,
  },
  butt2: {
    height: 30,
    backgroundColor: '#7BD5F5',
    width: 50,
    borderRadius: 5,
  },
  Image: {
    height: '100%',
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    overflow: 'hidden',
  },
});
