import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './Screens/LoginScreen';
import DrawerNavigator from './Navigation/DrawerNavigator'
import IndividualAttendanceEntry from './Screens/IndividualAttendanceEntry';

const Stack = createStackNavigator();

function App() {
   // Set this value based on user registration status
  // const isLoggedIn = false; // Set this value based on user login status

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false } } initialRouteName='Login'>
      <Stack.Screen name="Login" component={LoginScreen} /> 
         <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} /> 
                 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
