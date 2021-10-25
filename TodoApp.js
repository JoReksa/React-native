import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import {useState} from 'react';
import Card from './kartu';
import Sco from 'react-native-vector-icons/AntDesign';

export default function TodoApp() {
  const [tilte, setTitle] = useState([]);
  const [cari, setCari] = useState('');

  return (
    <View>
      <View style={style.boxsearch}>
        <TextInput
          placeholder="search"
          value={cari}
          onChangeText={e => {
            setCari(e);
          }}
          underlineColorAndroid="transparent"
          style={style.border}
        />

        <View>
          <TouchableOpacity
            onPress={() => {
              const newarry = [...tilte];
              newarry.push(cari);
              setTitle(newarry);
              setCari('');
            }}>
            <Sco name="enter" size={25} color={'black'} style={{}} />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text>{cari}</Text>
      </View>
      <FlatList
        data={tilte}
        numColumns={2}
        renderItem={({item, index}) => {
          return (
            <Card
              data={item}
              deleteTodo={() => {
                const del = tilte.filter((item, i) => index !== i);
                setTitle(del);
              }}
            />
          );
        }}></FlatList>
    </View>
  );
}

const style = StyleSheet.create({
  Text: {
    fontFamily: 'North',
    alignSelf: 'center',
    fontSize: 20,
    backgroundColor: 'white',
    margin: 5,
  },
  // buten: {
  //   borderRadius: 10,
  //   height: 20,
  //   width: 50,
  //   backgroundColor: 'blue',
  //   color: 'white',
  //   textAlign: 'center',
  // },
  border: {
    borderWidth: 1,
    borderColor: 'darkgrey',
    borderRadius: 10,
    margin: 10,
    marginVertical: 50,
    width: 200,
  },
  boxsearch: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  buten2: {
    borderRadius: 10,
    height: 20,
    width: 50,
    backgroundColor: 'blue',
    color: 'white',

    alignSelf: 'auto',
  },
  deletetxt: {
    color: 'white',
    textAlign: 'center',
  },
});
