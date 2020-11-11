import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";


import Button from "../components/Button";
import Button1 from "../components/Button1";

function WelcomeScreen({ navigation}) {
  return (
    <ImageBackground
      blurRadius={1}
      style={styles.background}
      source={require("../assets/bg.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-sell.png")} />
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Login" onPress={ () => navigation.navigate("Login")} />
        <Button1  title="Register" onPress={ () => navigation.navigate("Register")}  />
        <Text style={styles.tagline1}>Connected</Text>
        <View style={styles.iconContainer}>
          <View style={styles.socialIcon}>
            <MaterialCommunityIcons name="google" color="white" size={15} />
          </View>
          <View style={styles.socialIcon}>
            <MaterialCommunityIcons name="instagram" color="white" size={15}  />
          </View>
          <View style={styles.socialIcon}>
          <MaterialCommunityIcons name="facebook" color="white" size={15}  />
          </View>
      </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 30,
    width: "100%",
  },
  logo: {
    width: 180,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 200,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  
  },
  tagline1:{
    color: "#fff",
    fontSize: 15,
    letterSpacing:1,
    fontWeight: "400",
    paddingVertical: 10,
    alignSelf:"center"
  },
  iconContainer:{
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  flexDirection: "row",

  },
  socialIcon:{
    paddingHorizontal: 10,
    marginBottom: 20,
    
    

  }
});

export default WelcomeScreen;


/* 
  <Button  title="Register" color="primary" />
 <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-sell.png")} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
*/