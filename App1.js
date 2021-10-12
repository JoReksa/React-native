import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default class App1 extends Component {
  render() {
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
          <View
            style={{backgroundColor: 'skyblue', height: 150, borderRadius: 20}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name="left" size={30} color="white" />
                <Icon name="wallet" size={20} color="white" />
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    width: 100,
                    color: 'black',
                  }}>
                  Gopay
                </Text>
              </View>
              <Icon name="ellipsis1" size={30} color="white" />
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

        {/* line bawah */}
        <View style={{height: 60, backgroundColor: 'silver'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'stretch',
            }}>
            <Icon
              name="home"
              size={30}
              color="white"
              style={{left: 40, top: 5}}
            />
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'bold',
                width: 100,
                color: 'black',
                top: 40,
                left: 20,
                textAlign: 'left',
              }}>
              Home
            </Text>
            <Icon
              name="appstore1"
              size={30}
              color="white"
              style={{left: 40, top: 5}}
            />
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'bold',
                width: 100,
                color: 'black',
                top: 40,
                left: 16,
                textAlign: 'left',
              }}>
              Activity
            </Text>
            <Icon
              name="mail"
              size={30}
              color="white"
              style={{left: 40, top: 5}}
            />
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'bold',
                width: 100,
                color: 'black',
                top: 40,
                left: 24,
                textAlign: 'left',
              }}>
              Chat
            </Text>
            <Icon
              name="user"
              size={30}
              color="white"
              style={{left: 40, top: 5}}
            />
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'bold',
                width: 100,
                color: 'black',
                top: 40,
                left: 20,
                textAlign: 'left',
              }}>
              Profile
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
const app1 = () => {
  return <View></View>;
};
