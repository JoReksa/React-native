import React from 'react';
import { version } from 'react';
import { View, Text, Image, ScrollView, TextInput, Button , Dimensions} from 'react-native';


const App = () => {
  return (
    <View style={{height:'100%'}}>
    <ScrollView>
        <Text>Comment</Text>
          <Text>LIKE & VIEW </Text>
    <View style={{ flex: 1, backgroundColor: 'powderblue' }}>
          <Image
            source={{
              uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AAADPz8+Wlpb7+/s6OjphYWH09PSysrLCwsLw8PAYGBhTU1OGhoYzMzP4+PhJSUlYWFh9fX1ERERycnKDg4Pb29tpaWmkpKQ1NTXExMSUlJRfX1/X19esrKwdHR0pKSnj4+Nubm6fn5+MjIzc7WjQAAADz0lEQVR4nO3d6XabMBCGYcAkjmnqpXWx4zS77/8aG+IsdtDII6FBI/V7fzdBz5Ew4HCqokAIIYQQQgghhNB/Ut20lc7aph7Oq/bLUnPLfTVEWW9vYgsYzV+8jbOH2INn9jDzm8BN7IE7tPGYxmYee9ROzRtn4GPsMTv26Eis05rBrrnbQk3pHPxo4wKcxR6tVw6fqPWP2IP16oG/Trexx+rZlj2F6X3MHLrhTmIVe6TeVUzhPvZAvdszhb9jD9S7JQ9Yxx7ngHgnYhN7mAPi3bq1sYc5oJYlNHyUriYaW/UHyvswNQgnrB8cuwmEVBCqCUIyCNUEIRmEaoKQDEI1QUgGoZogJINQTRCSQagmCMkgVBOEZBAe2l2N2250oeHPIqKtRhdeyqNOuoTwLQghhFAyCA9BCCGEkkF4CEIIIZRsfGH+T8DVbNwMY8c3UWQQqglCMgjVBCEZhGqCkAxCNUFIBqGaICSD8FAtkSrh+uYidPNbVcK//X81uD+qhBLfJv6EEEIIIYQQQgghhBBCCCHMTpj/82H+z/j5f0+jIAjJIFQThGQQqglCMgjVBCEZhGqCkAxCNUFIBqGaICSDUE0QkkGoJgjJDMLbeurVwnYcz9/5WX3rK7zr/6Bv15bDTCW2/7xjCZ/CHdAiXIjsb/rEEi7CHZAW1hfhjnKU9bT4Oni47UdJ4UJmTynu3nLPwY5ICWWWaFk+84ABt84jhLXUrmD3TGG4La3MQrm9+dh7kQZbpkah0DlY8hdpwCuiSSh1Dpbcq2HQSTQIhS4TXfwpfL3fCHTMvnAhB2ReDN/bhTlmTyhyq/ae4X84tfUS5KDfhXIfMmX54gY0Ppq4901YC25G7/GAdx/gsKdCyRnkXutPaocP6EQoeJm44O3sKDCNx0KxWzXPCXzv6nrQoY+EYrdqy6sBvq5mN1lvLjkZ3jj9Ek7pGVyxfrupzXqyY9+KBmjRf678FFrOQccXg2PW9Hdk/xBabtUSAlqEllu1lIC00HKr5vhmd+QooeUykRaQElouE0kt0YISWm7VUgOahZbLRGJLtDAKV0U252CXaQ4zWqKFUUiX4Ay6CX/FHqxXDsIkZ9BFmCiQL0xziRZ8YbJArjDVJVpwhenOIFOYMpAlTBrIESZ8DnadF6Y9gwxh6sCzwuSB54TpA88I17GHFyCrMAegVZjBEn1tSr8PlwewKMi/YWexRLvWuQNNr0/ntES7jN8d5jODhfn96ayApnWa0xJ9q/32t9Bt7AEJdPT2xuOe9+p8ci3aqutuzLckEEIIIYQQQgghlH3/APfyampSdc6RAAAAAElFTkSuQmCC',
            }}
            resizeMode='contain'
          style={{ width:Dimensions.get('screen').width, height:200 }} />
          

        </View>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1
          }}
          defaultValue="Comment....." />

        <Button onPress={() => {
          alert('CONFIRMED');
        } } title="Confirm"></Button>
      
        </ScrollView>
      </View>
  );
}

export default App;