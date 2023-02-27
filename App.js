import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState, useEffect } from "react";
import Auth from "./Screens/Auth";
import Vote from "./Screens/Vote";
import Splash from "./Screens/Splash";
import Verification from "./Screens/Verification";
import { AuthContext } from "./lib";
import VoteCategories from "./Screens/VoteCategories";
export default function App() {
  const Stack = createNativeStackNavigator();
  const [verifiedVoter, setverifiedVoter] = useState(null);
  // useEffect(() => {

  // }, [])

  return (
    <AuthContext.Provider value={{ verifiedVoter, setverifiedVoter }}>
      <NavigationContainer>
        <TailwindProvider>
          <Stack.Navigator>
            {verifiedVoter !== null ? (
              <>
              <Stack.Screen name="vote" component={Vote} />
              <Stack.Screen name="voteCategory" component={VoteCategories} />
                <Stack.Screen name="verification" component={Verification} />
                <Stack.Screen name="splash" component={Splash} />
                <Stack.Screen name="auth" component={Auth} />
              </>
            ) : (
              <>
                <Stack.Screen name="splash" component={Splash} />
                <Stack.Screen name="auth" component={Auth} />
                <Stack.Screen name="verification" component={Verification} />
              </>
            )}
          </Stack.Navigator>
        </TailwindProvider>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
