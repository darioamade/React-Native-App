import React from "react";
import { Button, Text } from 'react-native';
import { createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "./app/components/Screen";

const Link = () => {
  const navigation = useNavigation();

return (
    <Button
    title="Click"
    onPress={() => navigation.navigate("TweetDetails", {id:1}) } />
)
}
const Tweets = ({ navigation}) => (
    <Screen>
      <Text>Tweets</Text>
    <Link />
    </Screen>

  )

const TweetDetails = ( { route }) => (
  <Screen>
    <Text>Tweet Details {route.params.id}</Text>
  </Screen>

)

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
  <Stack.Screen name="Tweets" component={Tweets}/>
  <Stack.Screen name="TweetDetails" component={TweetDetails} />
  </Stack.Navigator>

);

// Create a temporary account component
const Account = () => <Screen><Text>Account</Text></Screen>

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator>
  <Tab.Screen name="Feed" component={StackNavigator} />
  <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
)

  export default function App() {
    return (
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>

    );
  }
       

 








/* 

export default function App() {
const [imageUri, setImageUri]= useState();

  const requestPermission = async () => {
    const {granted} = await ImagePicker.requestCameraRollPermissionsAsync() // we need to await to get the result. but now that the fn is wrapped in requestPermission we no longer await down bellow
    if(!granted)
      alert('You need to enable permission to access the library')
  }
  useEffect(() => {
    requestPermission();
  }, []);

const selectImage = async ()=> {
  try {
    const result =  await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled)
    setImageUri(result.uri);
  } catch (error) {
    console.log('Error reading an image');
  }
};

  return (
      <Screen>
      <ImageInput 
        imageUri={imageUri}
        onChangeImage={ uri => setImageUri(uri)}
      />
     </Screen>
  );
 
}

*/




























/* const result = await Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.LOCATION);
    result.granted */




/* import {Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppButton from './app/components/AppButton';


import Icon from './app/components/Icon';


import Card from './app/components/Card';


import AppText from './app/components/AppText';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen'; */

/* const categories = [
  {label: "Cameras", value: "1"},
  {label: "Clothing", value: "2"},
  {label: "Furniture", value: "3"},
]

export default function App() {
const [category, setCategory] = useState(categories[0]);
  return (
    <Screen>
    <AppPicker
      selectedItem={category}
      onSelectItem={ item => setCategory(item)}
      items={categories}
      icon="apps"
      placeholder="Email" />
      <AppTextInput icon="email" placeholder="Email"/>
    
    </Screen>
    );
  }
 */





  /* 
     <Screen>
      <Switch  value={isNew} onValueChange={newValue => setIsNew(newValue)} />
    </Screen>
  */

  /*       <AppTextInput placeholder="Username" icon="email"/> */
/* 
export default function App(){
  const [ firstName, setFirstName] = useState('');
    return (
      <Screen>
      <Text>{firstName}</Text>
        <TextInput 
        secureTextEntry
        // secureTextEntry={true}
        // clearButtonMode="always"
        // keyboardType="numeric"
        // maxLength={5}
        onChangeText={text => setFirstName(text)}
        placeholder="First Name"
        style={{
          borderBottom:"#ccc",
          borderBottomWidth: 1
        }}/>
      </Screen>
   )
 
   
}
 */












/* 
 */

/*    return <ListingsScreen/> */
/* <Screen>
<ListItem 
title="My title" 

ImageComponent={ <Icon name="email" />}/>

</Screen> */

/*   <Icon name="email" size={100} /> */
/*   return (
    <ListingDetailsScreen/>

  ); */
/* 
<View style={{
    backgroundColor:'#f8f8f8',
    padding: 20,
    paddingTop: 100
  }}>
    <Card 
    title="Red jacket for sale"
    subTitle="$100"
    image={require("./app/assets/jacket.jpg")}/>
  </View>

*/

/* import AppText from './app/components/AppText';
export default function App(){
  return <WelcomeScreen/>
} */


// <MaterialCommunityIcons name="email" size={60} color="blue"/>
// <AppText>I love React Native!</AppText>


/* <View style={{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <AppButton title="Login" onPress={()=> console.log('Tapped')} />
      
    </View> */