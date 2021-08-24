import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Day1_Frist from './screens/Day1_First';

const Stack = createNativeStackNavigator();



const App = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            Headers: null
          }}
          name={Day1_Frist}
          component={Day1_Frist}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
