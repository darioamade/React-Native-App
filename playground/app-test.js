import React from 'react';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import {
    StyleSheet,
    Text, 
    View,
    Alert,
    SafeAreaView ,
    Image,
    TouchableHighlight,
    Button,
    Platform,
    StatusBar,
    Dimensions
} from 'react-native';


export default function App() {
  const { landscape } = (useDeviceOrientation())

  return (
    <SafeAreaView style={styles.container}>
    <View style={{
      backgroundColor:'blue',
      width: "100%",
      height: landscape ? "100%" : "30%"
    }}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});


//blurRadius={10}
//  <Image source={require('./assets/Fav2.png')}/>

/* <Image 
source={{
  width:200,
  height:300,
  uri:'https://picsum.photos/200/300'
}}/> */

/* 
export default function App() {
  const handlePress = () => alert('Text Press');
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
      Hello React Navite
      </Text>
      <TouchableHighlight onPress={() => console.log('Image Tapped')}>
        <View 
          style={{
            width:200,
            height:70,
            backgroundColor:"blue"
          }}/>
      </TouchableHighlight>
    </SafeAreaView>
  );
} */

/* 
<Button  
color="orange"
title="Click Me"
onPress={ () => Alert.alert("My Title", "My message",[
   {text: "Yes", onPress: () => console.log('Yes')},
   {text: "No", onPress: () => console.log('No')}
  ] ) }/>
 */

 /* 
  <Button  
    color="orange"
    title="Click Me"
    onPress={()=>
      Alert.prompt('My First', 'My message', text => console.log(text))
      }
      />
 */