import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListingEditScreen from "../screens/ListingEditScreen";
import ListingsScreen from '../screens/ListingsScreen';
import AccountScreen from '../screens/AccountScreen';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import NewListingButton from './NewListingButton';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen 
        name="Feed" 
         component={FeedNavigator} 
         options={{ 
             tabBarIcon: ({ color, size}) => 
             <MaterialCommunityIcons 
             name="home-circle"
             color={color}
             size={size}
             />
         }}
         
         />
        <Tab.Screen name="ListingEdit" 
         component={ListingEditScreen} 
        options={({ navigation}) => ({ 
            tabBarButton: () => (
            <NewListingButton
             onPress={ () => navigation.navigate("ListingEdit")} 
             />
             ),
            tabBarIcon: ({ color, size}) => (
            <MaterialCommunityIcons 
            name="plus-circle"
            color={color}
            size={size}
            />
            ),
        })}
        />
        <Tab.Screen name="Account" 
         component={AccountNavigator } 
        options={{ 
            tabBarIcon: ({ color, size}) => 
            <MaterialCommunityIcons 
            name="account-circle"
            color={color}
            size={size}
            />
        }}/>
    </Tab.Navigator>
);

export default AppNavigator;