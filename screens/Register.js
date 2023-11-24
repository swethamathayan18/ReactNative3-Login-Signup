import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome"


export default function SignUp() {
  const navigation = useNavigation();
  const [password, setPassword] = useState("");

  const navigateToSignIn = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>  
      <View style={styles.Container}>
        <View style={styles.SignUpContainer}>
        <View style={styles.userIcon}>
            <Icon style={{ marginTop: -60 }} name="user" size={50} />
          </View>
          <Text style={styles.textSignUp}>SignUp Here</Text>
        </View>
        <View style={styles.account}>
          <Text style={styles.textAccount}>
            Already have an account?{" "}
            <Text style={{ color: "blue", textDecorationLine: "underline" }} onPress={navigateToSignIn}>
              Signin
            </Text>
          </Text>
        </View>
        <View>
          <View style={styles.inputContainer}>
          <View><Icon name="envelope" size={22}/></View>
            <TextInput
              placeholder="Enter Email"
              placeholderTextColor="#888888" 
              style={styles.input}
            />
          </View>
          <View style={styles.inputContainer}>
          <View><Icon name="user" size={23}/></View>
            <TextInput
              placeholder="Enter Username"
              placeholderTextColor="#888888"
              style={styles.input}
            />
          </View>
          <View style={styles.inputContainer}>
          <View><Icon name="lock" size={26}/></View>
            <TextInput
              placeholder="Enter Password"
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
              placeholderTextColor="#888888"
              style={styles.input}
            />
          </View>
          <View style={styles.inputContainer}>
          <View><Icon name="lock" size={26}/></View>
            <TextInput
              placeholder="Confirm Password"
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
              placeholderTextColor="#888888"
              style={styles.input}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.signupBtn}>
          <Text style={styles.signuptext}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DCDCDC",
    alignItems: "center",
    justifyContent: "center",
  },
  Container: {
    backgroundColor: "white",
    width: 350,
    height: 500,
    borderRadius: 20,
    alignItems: "center",
  },
  userIcon: {
    alignItems: "center",
  },
  SignUpContainer: {
    marginTop: 30,
  },
  textSignUp: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
  },
  inputContainer: {
    backgroundColor: "white",
    width: 300,
    padding: 12,
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection:"row"
  },
  input: {
    fontSize: 18,
    marginLeft:10
  },
  account: {
    marginTop: 10,
  },
  textAccount: {
    fontSize: 18,
    fontWeight: "bold",
  },
  signupBtn: {
    marginTop: 20,
    alignItems:"center",
    width:200,
    padding:8,
    backgroundColor:"#4630EB",
    borderRadius:10
  },
  signuptext:{
      fontSize:18,
      fontWeight:"bold",
      color:"white"
  },
});
