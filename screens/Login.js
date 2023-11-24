import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import CheckBox from "expo-checkbox";

export default function Login() {
  const navigation = useNavigation();
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  const navigateToSignUp = () => {
    navigation.navigate("SignUp");
  };
  const handleLoginPress = () => {
    Alert.alert("Logined Successfully");
  };

  return (
    <View style={styles.container}>
      <View style={styles.Container}>
        <View style={styles.loginContainer}>
          <View style={styles.userIcon}>
            <Icon style={{ marginTop: -60 }} name="user" size={50} />
          </View>
          <Text style={styles.textLogin}>Login Here</Text>
        </View>

        <View>
          <View style={styles.inputContainer}>
            <View>
              <Icon name="envelope" size={20} />
            </View>
            <TextInput
              placeholder="Enter Email"
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          <View style={styles.inputContainer}>
            <View>
              <Icon name="user" size={24} />
            </View>
            <TextInput placeholder="Enter Username" style={styles.input} />
          </View>
          <View style={styles.inputContainer}>
            <View>
              <Icon name="lock" size={26} />
            </View>
            <TextInput
              placeholder="Enter Password"
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
              style={styles.input}
            />
          </View>
        </View>

        <View style={styles.account}>
          <Text style={styles.textAccount}>
            Don't have an account?{" "}
            <Text
              style={{ color: "blue", textDecorationLine: "underline" }}
              onPress={navigateToSignUp}
            >
              SignUp
            </Text>
          </Text>
        </View>

        <View style={styles.wrapperCheckbox}>
          <CheckBox
            value={checked}
            onValueChange={() => setChecked(!checked)}
            color={checked ? "#4630EB" : undefined}
          />
          <Text style={styles.wrapperText}>
            I agree the terms and conditions
          </Text>
        </View>
        <TouchableOpacity
          style={[
            styles.loginBtn,
            { backgroundColor: checked ? "#4630EB" : "gray" },
          ]}
          disabled={!checked}
        >
          <Text style={styles.logintext} onPress={handleLoginPress}>
            Login
          </Text>
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
  loginContainer: {
    marginTop: 30,
  },
  textLogin: {
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
    flexDirection: "row",
  },
  input: {
    fontSize: 18,
    marginLeft: 10,
  },
  account: {
    marginTop: 20,
  },
  textAccount: {
    fontSize: 18,
    fontWeight: "bold",
  },
  loginBtn: {
    marginTop: 20,
    alignItems: "center",
    width: 200,
    padding: 8,
    backgroundColor: "white",
    borderRadius: 10,
  },
  logintext: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  wrapperCheckbox: {
    flexDirection: "row",
    marginTop: 15,
  },
  wrapperText: {
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 10,
  },
});
