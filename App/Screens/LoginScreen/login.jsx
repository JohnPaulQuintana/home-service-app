import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors/Colors";
import tw from "twrnc";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser";
WebBrowser.maybeCompleteAuthSession();

export default function login() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={require("./../../../assets/images/login.png")}
        style={styles.loginImage}
      />

      <View style={styles.subContainer}>
        <Text style={styles.subContainerTitle}>Let's Find Professional</Text>
        <Text style={styles.subContainerTitle}>
          Web Developers and Andriod Developers
        </Text>

        <Text style={styles.subContainerSubTitle}>
          are you looking for the best and friendly developer's around the
          worlds?
        </Text>

        <TouchableOpacity
          style={tw`border-2 border-white m-10 rounded-md p-2 flex items-center`}
          onPress={onPress}
        >
          <Text style={tw`text-white text-xl`}>Let's Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginImage: {
    width: 350,
    height: 450,
    borderWidth: 2,
    marginTop: 20,
    // borderColor: Colors.PRIMARY,
    borderRadius: 10,
  },

  subContainer: {
    width: "100%",
    backgroundColor: Colors.PRIMARY,
    height: "70%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 10,
    marginTop: -50,
  },

  subContainerTitle: {
    fontSize: 20,
    color: Colors.WHITE,
    textAlign: "center",
  },

  subContainerSubTitle: {
    fontSize: 16,
    textTransform: "capitalize",
    color: Colors.PRIMARYA,
    textAlign: "center",
    borderWidth: 2,
    padding: 10,
    borderRadius: 5,
    backgroundColor: Colors.WHITE,
    borderColor: Colors.PRIMARY,
    marginTop: 20,
  },
});
