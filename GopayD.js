import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {linear} from 'react-native/Libraries/Animated/Easing';
import Evil from 'react-native-vector-icons/EvilIcons';
import Tits from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Fontisto';
import Ent from 'react-native-vector-icons/Entypo';
import Fa5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default class GopayD extends Component {
  render() {
    return (
      <View style={{flexDirection: 'column', backgroundColor: 'white'}}>
        <View style={styles.cominput}>
          <Feather style={styles.icons} name="bell" size={22} color="black" />
          <Tits style={styles.icons} name="sale" size={22} color="black" />
          <Evil style={styles.icons} name="search" size={30} color="black" />
          <TextInput
            style={styles.search}
            placeholder="Search"
            placeholderTextColor={'grey'}
            onChangeText={searchString => {
              this.setState({searchString});
            }}
            underlineColorAndroid="transparent"
          />
        </View>
        <LinearGradient
          colors={[
            '#0b0742',
            '#120c63',
            '#5e72eb',
            '#5e72eb',
            '#ff9190',
            '#fdc094',
          ]}
          start={{x: 1, y: 0.25}}
          end={{x: 0.1, y: 1}}
          style={styles.grad}>
          <View
            style={{
              backgroundColor: 'rgba(255, 255, 255,0.1)',
              position: 'absolute',
              height: 40,
              width: 40,
              borderRadius: 20,
              left: 100,
              top: -5,
            }}
          />
          <View
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              position: 'absolute',
              height: 40,
              width: 40,
              borderRadius: 20,
              left: -6,
              top: 80,
            }}
          />
          <View
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              position: 'absolute',
              height: 40,
              width: 40,
              borderRadius: 20,
              left: 285,
              top: 80,
            }}
          />
          <View
            style={{
              backgroundColor: 'rgba(255, 255, 255,0.2)',
              position: 'absolute',
              height: 80,
              width: 80,
              borderRadius: 40,
              left: 250,
              top: -19,
            }}
          />
          <Text> test </Text>
        </LinearGradient>
        <View>
          <View style={styles.compicon}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 5,
                }}>
                <View>
                  <Text
                    style={{
                      fontSize: 13,
                      color: 'darkblue',
                      fontWeight: 'bold',
                    }}>
                    Your favorite Service
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 10,
                      color: 'limegreen',
                      fontWeight: 'bold',
                    }}>
                    Other service
                  </Text>
                </View>
              </View>
              <View style={{padding: 10}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}>
                  <View style={{alignItems: 'center'}}>
                    <View
                      style={{
                        width: 45,
                        height: 45,
                        backgroundColor: 'limegreen',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 30,
                        borderColor: '#fff',
                        borderWidth: 1.5,
                      }}>
                      <Icon name="motorcycle" size={22} color="white" />
                    </View>
                    <Text
                      style={{
                        fontSize: 12,
                        fontFamily: 'Tbold',
                        marginTop: 4,
                      }}>
                      GoRide
                    </Text>
                  </View>
                  {/* plus */}
                  <View style={{alignItems: 'center'}}>
                    <View
                      style={{
                        width: 45,
                        height: 45,
                        backgroundColor: 'limegreen',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 30,
                        borderColor: '#fff',
                        borderWidth: 1.5,
                      }}>
                      <Fa5 name="car-side" size={22} color="white" />
                    </View>
                    <Text
                      style={{
                        fontSize: 12,
                        fontFamily: 'Tbold',
                        marginTop: 4,
                      }}>
                      GoCar
                    </Text>
                  </View>
                  {/* req */}
                  <View style={{alignItems: 'center'}}>
                    <View
                      style={{
                        width: 45,
                        height: 45,
                        backgroundColor: 'orangered',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 30,
                        borderColor: '#fff',
                        borderWidth: 1.5,
                      }}>
                      <Fa5 name="utensils" size={22} color="white" />
                    </View>
                    <Text
                      style={{
                        fontSize: 12,
                        fontFamily: 'North',
                        fontFamily: 'Tbold',
                        marginTop: 4,
                      }}>
                      GoFood
                    </Text>
                  </View>
                  {/* pay */}
                  <View style={{alignItems: 'center'}}>
                    <View
                      style={{
                        width: 45,
                        height: 45,
                        backgroundColor: 'darkorange',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 30,
                        borderColor: '#fff',
                        borderWidth: 1.5,
                      }}>
                      <Fa5 name="broom" size={22} color="white" />
                    </View>
                    <Text
                      style={{
                        fontSize: 12,
                        fontFamily: 'Tbold',
                        marginTop: 4,
                      }}>
                      GoClean
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View>
              <View style={{padding: 10, marginTop: -10}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}>
                  <View style={{alignItems: 'center'}}>
                    <View
                      style={{
                        width: 45,
                        height: 45,
                        backgroundColor: 'deepskyblue',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 30,
                        borderColor: '#fff',
                        borderWidth: 1.5,
                      }}>
                      <Ionicons name="ios-wallet" size={22} color="white" />
                    </View>
                    <Text
                      style={{
                        fontSize: 12,
                        fontFamily: 'Tbold',
                        marginTop: 4,
                      }}>
                      GoPay
                    </Text>
                  </View>
                  {/* plus */}
                  <View style={{alignItems: 'center'}}>
                    <View
                      style={{
                        width: 45,
                        height: 45,
                        backgroundColor: 'darkorchid',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 30,
                        borderColor: '#fff',
                        borderWidth: 1.5,
                      }}>
                      <Icon name="shopping-bag" size={22} color="white" />
                    </View>
                    <Text
                      style={{
                        fontSize: 12,
                        fontFamily: 'Tbold',
                        marginTop: 4,
                      }}>
                      GoFresh
                    </Text>
                  </View>
                  {/* req */}
                  <View style={{alignItems: 'center'}}>
                    <View
                      style={{
                        width: 45,
                        height: 45,
                        backgroundColor: 'deeppink',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 30,
                        borderColor: '#fff',
                        borderWidth: 1.5,
                      }}>
                      <Tits
                        name="ticket-confirmation-outline"
                        size={26}
                        color="white"
                      />
                    </View>
                    <Text
                      style={{
                        fontSize: 12,
                        fontFamily: 'Tbold',
                        marginTop: 4,
                      }}>
                      GoTix
                    </Text>
                  </View>
                  {/* pay */}
                  <View style={{alignItems: 'center'}}>
                    <View
                      style={{
                        width: 45,
                        height: 45,
                        backgroundColor: 'deeppink',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 30,
                        borderColor: '#fff',
                        borderWidth: 1.5,
                      }}>
                      <Ionicons name="play" size={24} color="white" />
                    </View>
                    <Text
                      style={{
                        fontSize: 12,
                        fontFamily: 'Tbold',
                        marginTop: 4,
                      }}>
                      Goplay
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.compicon2}>
            <View>
              <Text style={styles.txttop}>Top picks for you</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{flexDirection: 'column'}}>
                <Image
                  style={styles.club}
                  source={require('/Users/itmudah/AwesomeProject/goclub.jpeg')}
                />
                <Image
                  style={styles.pop}
                  source={require('/Users/itmudah/AwesomeProject/goplay.jpeg')}
                />
              </View>
              <View>
                <Image
                  style={styles.play}
                  source={require('/Users/itmudah/AwesomeProject/gopop.jpg')}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cominput: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    margin: 5,
    marginVertical: 0,
  },
  search: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'darkgrey',
    borderRadius: 10,
    maxWidth: 180,
    backgroundColor: 'white',
    color: '#424242',
    height: 40,
    marginHorizontal: 15,
  },
  icons: {padding: 5},
  grad: {
    height: 110,
    borderRadius: 10,
    margin: 30,
    padding: 10,
    marginVertical: 10,
  },
  compicon: {
    backgroundColor: 'white',
    margin: 20,
    height: 180,
    marginVertical: -10,
    padding: 10,
  },
  compicon2: {
    backgroundColor: 'white',
    margin: 20,
    height: 180,
    marginVertical: 30,
    padding: 10,
  },
  club: {
    resizeMode: 'stretch',
    height: 55,
    width: 150,
    borderRadius: 10,
    marginVertical: 10,
    margin: 10,
  },
  play: {
    resizeMode: 'stretch',
    height: 120,
    width: 130,
    borderRadius: 10,
    marginVertical: 10,
  },
  pop: {
    resizeMode: 'stretch',
    height: 55,
    width: 150,
    borderRadius: 10,
    margin: 10,
    marginVertical: 0,
  },
  txttop: {
    margin: 0,
    padding: 0,
    color: 'darkblue',
    fontSize: 12,
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
});
