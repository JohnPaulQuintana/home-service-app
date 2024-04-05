import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import Login from './App/Screens/LoginScreen/login';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';

// const tokenCache = {
//   async getToken(key) {
//     try {
//       return SecureStore.getItemAsync(key);
//     } catch (err) {
//       return null;
//     }
//   },
//   async saveToken(key, value) {
//     try {
//       return SecureStore.setItemAsync(key, value);
//     } catch (err) {
//       return;
//     }
//   },
// };

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
  });

  return (
    // tokenCache={tokenCache}
    <ClerkProvider publishableKey='pk_test_aG9uZXN0LW5ld3QtNDkuY2xlcmsuYWNjb3VudHMuZGV2JA'>
        <View style={styles.container}>
          {/* Signed In Components */}
          <SignedIn>
            <NavigationContainer>
                <TabNavigation />
            </NavigationContainer>
          </SignedIn>

          {/* Signed Out Components */}
          <SignedOut>
            <Login/>
          </SignedOut>
          <StatusBar style="auto" />
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
