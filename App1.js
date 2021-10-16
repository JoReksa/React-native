import React, {Component} from 'react';
import {View, Text, Button, FlatList, SafeAreaView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Ent from 'react-native-vector-icons/Entypo';
import Fa5 from 'react-native-vector-icons/FontAwesome5';
import ACT from 'react-native-vector-icons/Feather';
import Evil from 'react-native-vector-icons/EvilIcons';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '52694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Fourth Item',
  },
];

export default class App1 extends Component {
  render() {
    const Item = ({title}) => (
      <View>
        <Text>{title}</Text>
      </View>
    );
    const renderItem = ({item}) => (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
          borderBottomWidth: 0.5,
          height: 55,
        }}>
        <View>
          <View style={{}}>
            <Text
              style={{
                fontWeight: '600',
                color: 'black',
                marginBottom: 2,
                fontSize: 12,
              }}>
              GoPay Top Up
            </Text>
            <Text style={{fontWeight: '600', color: 'green', marginBottom: 2}}>
              #28829123344
            </Text>
            <Text style={{fontSize: 10, marginBottom: 2}}>9 Apr.09.00PM</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontWeight: '600', color: 'green'}}>Rp.</Text>
          <Text style={{fontSize: 15, color: 'green', fontWeight: '400'}}>
            51.000
          </Text>
        </View>
      </View>
    );
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 10,
          backgroundColor: 'white',
        }}>
        <View style={{}}>
          {/* line atas */}
          <View>
            <View
              style={{
                backgroundColor: 'rgba(139,195,74,1)',
                height: 130,
                borderRadius: 20,
              }}>
              <View
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  position: 'absolute',
                  height: 40,
                  width: 40,
                  borderRadius: 20,
                  left: -10,
                  top: -5,
                }}
              />
              <View
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  position: 'absolute',
                  height: 40,
                  width: 40,
                  borderRadius: 20,
                  left: -10,
                  top: 100,
                }}
              />
              <View
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  position: 'absolute',
                  height: 40,
                  width: 40,
                  borderRadius: 20,
                  left: 310,
                  top: 60,
                }}
              />
              <View
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  position: 'absolute',
                  height: 80,
                  width: 80,
                  borderRadius: 40,
                  left: 150,
                  top: -40,
                }}
              />
              <View
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  position: 'absolute',
                  height: 80,
                  width: 80,
                  borderRadius: 40,
                  left: 310,
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  margin: 10,
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Ent name="chevron-left" size={35} color="white" />
                  <Ent name="wallet" size={25} color="dodgerblue" style={{}} />
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: '600',
                      width: 100,
                      color: 'white',
                      marginLeft: 10,
                    }}>
                    Gopay
                  </Text>
                </View>
                <View style={{margin: 10}}>
                  <Ent name="dots-three-horizontal" size={20} color="white" />
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{
                    height: 50,
                    width: 50,
                    marginLeft: 40,
                    marginTop: 0,
                    borderRadius: 40,
                  }}
                  source={require('/Users/itmudah/AwesomeProject/pp1.jpeg')}></Image>
                <View style={{marginLeft: 10, marginTop: 5}}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontFamily: 'Tbold',
                      color: 'white',
                    }}>
                    Scrwm
                  </Text>
                  <Text
                    style={{fontSize: 9, fontWeight: '600', color: 'white'}}>
                    Tap to see your Gojek profile
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/* line tengah */}
          <View style={{padding: 10, marginTop: 10}}>
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
                    backgroundColor: 'rgba(139,195,74,1)',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 30,
                  }}>
                  <Fa5 name="arrow-circle-up" size={22} color="white" />
                </View>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    marginTop: 4,
                    color: 'darkgrey ',
                  }}>
                  Pay
                </Text>
              </View>
              {/* plus */}
              <View style={{alignItems: 'center'}}>
                <View
                  style={{
                    width: 45,
                    height: 45,
                    backgroundColor: 'rgba(139,195,74,1)',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 30,
                  }}>
                  <Ent name="squared-plus" size={22} color="white" />
                </View>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    marginTop: 4,
                  }}>
                  Top Up
                </Text>
              </View>
              {/* req */}
              <View style={{alignItems: 'center'}}>
                <View
                  style={{
                    width: 45,
                    height: 45,
                    backgroundColor: 'rgba(139,195,74,1)',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 30,
                  }}>
                  <Fa5 name="arrow-circle-down" size={22} color="white" />
                </View>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    marginTop: 4,
                    color: 'darkgrey ',
                  }}>
                  Request
                </Text>
              </View>
              {/* pay */}
              <View style={{alignItems: 'center'}}>
                <View
                  style={{
                    width: 45,
                    height: 45,
                    backgroundColor: 'rgba(139,195,74,1)',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 30,
                  }}>
                  <Ent name="paper-plane" size={22} color="white" />
                </View>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    marginTop: 4,
                    color: 'darkgrey ',
                  }}>
                  Pay Later
                </Text>
              </View>
            </View>
          </View>
          {/* line tengah 2 */}
          <View style={{padding: 10, marginTop: -5}}>
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
                    backgroundColor: 'rgba(139,195,74,1)',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 30,
                  }}>
                  <Fa5 name="hand-holding-usd" size={22} color="white" />
                </View>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    marginTop: 4,
                    color: 'darkgrey ',
                  }}>
                  Cash Out
                </Text>
              </View>
              {/* wallet */}
              <View style={{alignItems: 'center'}}>
                <View
                  style={{
                    width: 45,
                    height: 45,
                    backgroundColor: 'rgba(139,195,74,1)',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 30,
                  }}>
                  <Fa5 name="wallet" size={22} color="white" />
                </View>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    marginTop: 4,
                    color: 'darkgrey ',
                  }}>
                  Plus
                </Text>
              </View>
              {/* hantu */}
              <View style={{alignItems: 'center'}}>
                <View
                  style={{
                    width: 45,
                    height: 45,
                    backgroundColor: 'rgba(139,195,74,1)',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 30,
                  }}>
                  <Fa5 name="money-bill-wave" size={22} color="white" />
                </View>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    marginTop: 4,
                    color: 'darkgrey ',
                  }}>
                  Tagihan
                </Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <View
                  style={{
                    width: 50,
                    height: 50,

                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 30,
                  }}
                />
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: 'black',
                  }}></Text>
              </View>
            </View>
          </View>
        </View>
        {/* line pp bawah */}
        <View style={{}}>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 20,
              margin: 5,
              padding: 7,
              borderWidth: 1.5,
              borderColor: 'rgba(139,195,74,1)',
              marginTop: 5,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
              }}>
              <View style={{flex: 1}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'black',
                    fontSize: 14,
                  }}>
                  Gopay Friends
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '600',
                    fontSize: 10,
                  }}>
                  These are who you last sent or request Gopay to.
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '600',
                    fontSize: 10,
                  }}>
                  Tap their name to send again
                </Text>
              </View>
              <View style={{}}>
                <Text
                  style={{
                    color: 'green',
                    fontWeight: '600',
                    fontSize: 12,
                  }}>
                  See more
                </Text>
              </View>
              {/* line gambar */}
            </View>

            <View>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <Image
                  style={{
                    height: 45,
                    width: 45,
                    marginLeft: 10,
                    marginTop: 5,
                    borderRadius: 20,
                  }}
                  source={require('/Users/itmudah/AwesomeProject/pp1.jpeg')}></Image>
                <Image
                  style={{
                    height: 45,
                    width: 45,
                    marginLeft: 10,
                    marginTop: 5,
                    borderRadius: 20,
                  }}
                  source={require('/Users/itmudah/AwesomeProject/pp1.jpeg')}></Image>
                <Image
                  style={{
                    height: 45,
                    width: 45,
                    marginLeft: 10,
                    marginTop: 5,
                    borderRadius: 20,
                  }}
                  source={require('/Users/itmudah/AwesomeProject/pp1.jpeg')}></Image>
              </View>
              <View style={{flexDirection: 'row', marginHorizontal: 10}}>
                <Text
                  style={{
                    fontWeight: '600',
                    color: 'black',
                    fontSize: 12,
                    marginLeft: 10,
                  }}>
                  Hardi
                </Text>
                <Text
                  style={{
                    fontWeight: '600',
                    color: 'black',
                    fontSize: 12,
                    marginLeft: 25,
                  }}>
                  Santo
                </Text>
                <Text
                  style={{
                    fontWeight: '600',
                    color: 'black',
                    marginLeft: 19,
                    fontSize: 12,
                  }}>
                  Harley
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* line scroll */}
        <View>
          <View style={{marginTop: 7}}>
            <Text
              style={{
                marginHorizontal: 20,
                fontWeight: 'bold',
                color: 'black',
                fontSize: 15,
                marginBottom: 5,
              }}>
              History
            </Text>
            <View style={{height: 55, marginHorizontal: 10, marginBottom: 5}}>
              <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
              />
            </View>
          </View>
        </View>
        {/* line bawah */}
        <View>
          <View
            style={{
              backgroundColor: 'white',
              height: 50,
              margin: 0,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                padding: 5,
                margin: 5,
              }}>
              <View>
                <Icon name="home" size={22} color="seagreen" />
                <View>
                  <Text
                    style={{fontSize: 9, fontWeight: '600', color: 'black'}}>
                    Home
                  </Text>
                </View>
              </View>
              <View>
                <ACT name="activity" size={22} color="seagreen" />
                <View>
                  <Text
                    style={{fontSize: 9, fontWeight: '600', color: 'black'}}>
                    Activity
                  </Text>
                </View>
              </View>
              <View>
                <Ent name="chat" size={22} color="seagreen" />
                <View>
                  <Text
                    style={{fontSize: 9, fontWeight: '600', color: 'black'}}>
                    Chat
                  </Text>
                </View>
              </View>
              <View>
                <Evil name="user" size={30} color="seagreen" />
                <View>
                  <Text
                    style={{fontSize: 9, fontWeight: '600', color: 'black'}}>
                    Profile
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const app1 = () => {
  return <View></View>;
};
