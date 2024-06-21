import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { Provider } from "react-native-paper";
import ApiFilmes from "../screens/ApiVideos";
import LocationScreen from "../screens/LocationScreen";


const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{ title: "SplashScreen" }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={TabsNavigator}
            options={{ title: "Login" }}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ title: "Login" }}
          />

          <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            options={{ title: "cadastro de usuário" }}
          />

          <Stack.Screen
            name="ApiFilmes"
            component={ApiFilmes}
            options={{ title: "tela de Videos" }}
          />

<Stack.Screen
            name="LocationScreen"
            component={LocationScreen}
            options={{ title: "IP" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const Tabs = createMaterialBottomTabNavigator();

export function TabsNavigator() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={HomeScreen} />
    </Tabs.Navigator>
  );
}
