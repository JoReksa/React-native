import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Alert,
} from 'react-native';
import {useState} from 'react';
import Card from './kartu';
import Sco from 'react-native-vector-icons/FontAwesome5';

export default function TodoApp() {
  const [tilte, setTitle] = useState([
    {
      todo: 'Walking',
      description: 'walk',
      status: 'open',
      avatar:
        'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png',
    },
    {
      todo: 'Running',
      description: 'run',
      status: 'done',
      avatar:
        'https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png',
    },
    {
      todo: 'Sitting',
      description: 'sit',
      status: 'open',
      avatar:
        'https://cdn.iconscout.com/icon/free/png-256/boy-avatar-4-1129037.png',
    },
  ]);
  const [cari, setCari] = useState('');
  const [todo, setTodo] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [avatar, setAvatar] = useState('');

  return (
    <View>
      <TextInput
        style={{color: 'green', borderWidth: 1, borderRadius: 10, margin: 10}}
        placeholder="Type Anda"
        value={todo}
        onChangeText={e => {
          setTodo(e);
        }}
      />
      <TextInput
        style={{color: 'green', borderWidth: 1, borderRadius: 10, margin: 10}}
        placeholder="Type Mantap "
        value={description}
        onChangeText={e => {
          setDescription(e);
        }}
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity
          onPress={() => {
            setStatus('Completed');
          }}
          style={{
            padding: 10,
            backgroundColor: status == 'Completed' ? '#20cb9d' : '#fafafa',
            borderWidth: 1,
            borderRadius: 10,
            width: 80,
          }}>
          <Text
            style={{
              color: status == 'Completed' ? 'white' : 'black',
              textAlign: 'center',
            }}>
            ST
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setStatus('Open');
          }}
          style={{
            padding: 10,
            backgroundColor: status == 'Open' ? '#20cb9d' : '#fafafa',
            borderWidth: 1,
            borderRadius: 10,
            width: 80,
          }}>
          <Text
            style={{
              color: status == 'Open' ? 'white' : 'black',

              textAlign: 'center',
            }}>
            LT
          </Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={{color: 'green', borderWidth: 1, borderRadius: 10, margin: 10}}
        placeholder="URL AVATAR"
        value={avatar}
        onChangeText={e => {
          setAvatar(e);
        }}
      />
      <TouchableOpacity
        onPress={() => {
          if (
            todo.length == 0 ||
            description.length == 0 ||
            status.length == 0 ||
            avatar.length == 0
          ) {
            Alert.alert('Fill all data');
          } else {
            const asd = [...tilte];
            const newData = {
              todo: todo,
              description: description,
              status: status,
              avatar: avatar,
            };
            asd.push(newData);
            setTitle(asd);
            setTodo('');
            setDescription('');
            setStatus('');
            setAvatar('');
          }
        }}>
        <Sco
          name="bone"
          size={25}
          color={'black'}
          style={{alignSelf: 'center'}}
        />
      </TouchableOpacity>
      <FlatList
        data={tilte}
        style={{margin: 10}}
        numColumns={1}
        renderItem={data => (
          <Card
            data={data.item}
            deleteTodo={() => {
              const qwe = tilte.filter((item, i) => data.index !== i);
              setTitle(qwe);
            }}
          />
        )}
        keyExtractor={(item, i) => i}
      />
    </View>
  );
}
