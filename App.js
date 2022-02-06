import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cars from "./Components/Cars"
import ModelS from "./Components/ModelS"
import Id from "./Components/Id"
import InfoTesla from "./Components/InfoTesla"
import InfoId from "./Components/InfoId"
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{
        headerShown: false
  }}>
        <Stack.Screen name="Cars" component={Cars} />
        <Stack.Screen name="ModelS" component={ModelS} />
        <Stack.Screen name="Id" component={Id} />
        <Stack.Screen name="InfoTesla" component={InfoTesla} />
        <Stack.Screen name="InfoId" component={InfoId} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
