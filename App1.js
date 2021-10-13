import React, {Component} from 'react';
import {View, Text, Button, FlatList, SafeAreaView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
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
          borderBottomWidth: 1,
          backgroundColor: '#fff',
          height: 50,
        }}>
        <View>
          <View style={{}}>
            <Text style={{fontWeight: 'bold', color: 'black'}}>
              Gopay Top Up {item.title}
            </Text>
            <Text style={{fontWeight: 'bold', color: 'blue'}}>
              #28829123344
            </Text>
            <Text style={{fontSize: 10}}>9 Apr.09.00PM</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontWeight: 'bold', color: 'green'}}>Rp.</Text>
          <Text style={{fontSize: 24, color: 'green', fontWeight: 'bold'}}>
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
        }}>
        <View>
          {/* line atas */}
          <View>
            <View
              style={{
                backgroundColor: 'skyblue',
                height: 130,
                borderRadius: 20,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: 10,
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon name="left" size={30} color="white" />
                  <Icon
                    name="wallet"
                    size={20}
                    color="white"
                    style={{marginLeft: 10}}
                  />
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      width: 100,
                      color: 'black',
                      marginLeft: 10,
                    }}>
                    Gopay
                  </Text>
                </View>
                <View>
                  <Icon name="ellipsis1" size={30} color="white" />
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{
                    height: 50,
                    width: 50,
                    marginLeft: 50,
                    marginTop: 10,
                    borderRadius: 20,
                  }}
                  source={require('/Users/itmudah/AwesomeProject/pp1.jpeg')}></Image>
                <View style={{marginLeft: 10, marginTop: 15}}>
                  <Text
                    style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
                    Scrwm
                  </Text>
                  <Text style={{fontSize: 10}}>
                    Tap to see your Gojek profile
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/* line tengah */}
          <View style={{padding: 10}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
              }}>
              <View style={{alignItems: 'center'}}>
                <View
                  style={{
                    width: 60,
                    height: 60,
                    backgroundColor: 'skyblue',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 30,
                  }}>
                  <Icon name="upsquare" size={30} color="white"></Icon>
                </View>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: 'bold',

                    color: 'black',
                  }}>
                  Pay
                </Text>
              </View>
              {/* plus */}
              <View style={{alignItems: 'center'}}>
                <View
                  style={{
                    width: 60,
                    height: 60,
                    backgroundColor: 'skyblue',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 30,
                  }}>
                  <Icon name="plussquareo" size={30} color="white"></Icon>
                </View>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: 'bold',
                    color: 'black',
                  }}>
                  Top Up
                </Text>
              </View>
              {/* req */}
              <View style={{alignItems: 'center'}}>
                <View
                  style={{
                    width: 60,
                    height: 60,
                    backgroundColor: 'skyblue',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 30,
                  }}>
                  <Icon name="downsquare" size={30} color="white"></Icon>
                </View>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: 'bold',
                    color: 'black',
                  }}>
                  Request
                </Text>
              </View>
              {/* pay */}
              <View style={{alignItems: 'center'}}>
                <View
                  style={{
                    width: 60,
                    height: 60,
                    backgroundColor: 'skyblue',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 30,
                  }}>
                  <Icon name="dingding-o" size={30} color="white"></Icon>
                </View>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: 'bold',
                    color: 'black',
                  }}>
                  Pay Later
                </Text>
              </View>
            </View>
          </View>
          {/* line tengah 2 */}
          <View style={{padding: 10}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
              }}>
              <View style={{alignItems: 'center'}}>
                <View
                  style={{
                    width: 60,
                    height: 60,
                    backgroundColor: 'skyblue',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 30,
                  }}>
                  <Icon name="star" size={30} color="white"></Icon>
                </View>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: 'bold',

                    color: 'black',
                  }}>
                  Cash Out
                </Text>
              </View>
              {/* wallet */}
              <View style={{alignItems: 'center'}}>
                <View
                  style={{
                    width: 60,
                    height: 60,
                    backgroundColor: 'skyblue',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 30,
                  }}>
                  <Icon name="wallet" size={30} color="white"></Icon>
                </View>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: 'bold',
                    color: 'black',
                  }}>
                  Plus
                </Text>
              </View>
              {/* hantu */}
              <View style={{alignItems: 'center'}}>
                <View
                  style={{
                    width: 60,
                    height: 60,
                    backgroundColor: 'skyblue',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 30,
                  }}>
                  <Icon name="aliwangwang-o1" size={30} color="white"></Icon>
                </View>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: 'bold',
                    color: 'black',
                  }}>
                  Go Tagihan
                </Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <View
                  style={{
                    width: 60,
                    height: 60,

                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 30,
                  }}></View>
              </View>
            </View>
          </View>
        </View>
        {/* line pp bawah */}
        <View>
          <View
            style={{
              backgroundColor: 'white',
              height: 140,
              borderRadius: 20,
              margin: 5,
              padding: 7,
              borderWidth: 1,
              marginTop: -25,
            }}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  margin: 2,
                }}>
                <View>
                  <Text style={{fontWeight: 'bold', color: 'black'}}>
                    Gopay Friends
                  </Text>
                  <Text style={{color: 'black'}}>
                    These are who you last sent or request Gopay to.
                  </Text>
                  <Text style={{color: 'black'}}>
                    Tap their name to send again
                  </Text>
                </View>
                <View style={{}}>
                  <Text style={{color: 'green', fontWeight: 'bold'}}>
                    See more
                  </Text>
                </View>
                {/* line gambar */}
              </View>
            </View>
            <View>
              <View style={{flexDirection: 'row'}}>
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
                    fontWeight: 'bold',
                    color: 'black',
                  }}>
                  Hardi
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'black',
                    marginLeft: 25,
                  }}>
                  Santo
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'black',
                    marginLeft: 19,
                  }}>
                  Harley
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* line scroll */}
        <View style={{}}>
          <Text
            style={{
              marginHorizontal: 20,
              fontWeight: 'bold',
              color: 'black',
              fontSize: 17,
            }}>
            History
          </Text>
          <SafeAreaView style={{height: 100, marginHorizontal: 10}}>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </SafeAreaView>
        </View>
        {/* line bawah */}
      </View>
    );
  }
}
const app1 = () => {
  return <View></View>;
};
