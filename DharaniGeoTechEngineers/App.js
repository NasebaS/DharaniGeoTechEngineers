import React, { useState } from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions, Image } from 'react-native';
import Home from './Screens/Home';
import About from './Screens/About';
import Services from './Screens/Services';
import Projects from './Screens/Projects';
import Gallery from './Screens/Gallery';
import Contact from './Screens/Contact';
import Logout from './Screens/Logout';
import Profile from './Screens/Profile';
import Dashboard from './Screens/Dashboard';
import AttendanceEntry from './Screens/AttendanceEntry';
import EditAttendance from './Screens/EditAttendance';
import MaterialInward from './Screens/MaterialInward';
import MaterialRequest from './Screens/MaterialRequest';
import ExpenseReport from './Screens/ExpenseReport';
import ExpenseEntry from './Screens/ExpenseEntry';
import DPREntry from './Screens/DPREntry';
import DPRReport from './Screens/DPRReport';
import PityCashentry from './Screens/PityCashentry';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RegisterScreen from './Screens/RegisterScreen';
import LoginScreen from './Screens/LoginScreen';


const Drawer = createDrawerNavigator();
const windowWidth = Dimensions.get('window').width;

function CustomDrawerContent({ navigation }) {
  const [activeItem, setActiveItem] = useState('');
  const animatedValue = React.useRef(new Animated.Value(0)).current;

  const handlePress = (item) => {
    setActiveItem(item);
    navigation.navigate(item);
  };

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  const renderDrawerItem = (item, iconName) => {
    const isActive = activeItem === item;

    return (
      <TouchableOpacity
        key={item}
        style={styles.drawerItem}
        onPress={() => handlePress(item)}
        activeOpacity={0.1}
      >
        <AntDesign
          name={iconName}
          size={24}
          style={[styles.drawerItemIcon, isActive && styles.drawerItemIconActive]}
        />
        <Text style={[styles.drawerItemLabel, isActive && styles.drawerItemLabelActive]}>{item}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <Animated.View style={[styles.drawerContainer, { transform: [{ translateX }] }]}>
      <View style={styles.drawerHeader}>
        <Image source={require('./assets/images/logo.png')} style={styles.logoImage} />
        <Text style={styles.companyName}>Dharani GeoTech Engineers</Text>
      </View>
      {[
        { name: 'Logout', iconName: 'logout' },
        { name: 'Profile', iconName: 'user' },
        { name: 'Dashboard', iconName: 'dashboard' },
        { name: 'Attendance entry', iconName: 'layout' },
        { name: 'Edit Attendance', iconName: 'carryout' },
        { name: 'Material request', iconName: 'indent-right' },
        { name: 'Material Inward', iconName: 'indent-left' },
        { name: 'Expense entry', iconName: 'codesquareo' },
        { name: 'DPR Entry', iconName: 'export2' },
        { name: 'DPR Report', iconName: 'export' },
        { name: 'Expense report', iconName: 'dropbox' },
        { name: 'Pity cash entry', iconName: 'codepen' },     
        { name: 'Register', iconName: 'codepen' },    
        { name: 'Login', iconName: 'codepen' },    
       ].map((item) => renderDrawerItem(item.name, item.iconName))}
    </Animated.View>
  );
}

function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleRegister = () => {
    // Perform registration logic here
    setIsRegistered(true);
  };

  const handleLogin = () => {
    // Perform login logic here
    setIsLoggedIn(true);
  };

  if (!isRegistered) {
    return (
    <NavigationContainer>
      <RegisterScreen onRegister={handleRegister} />;
    </NavigationContainer>
    )
    
  }

  if (!isLoggedIn) {
    return (
      <NavigationContainer>
    <LoginScreen onLogin={handleLogin} />;
    </NavigationContainer>
    )
    
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />} initialRouteName="RegisterScreen">
        <Drawer.Screen name="Logout " component={Logout} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="Attendance entry" component={AttendanceEntry} />
        <Drawer.Screen name="Edit Attendance" component={EditAttendance} />
        <Drawer.Screen name="Material request" component={MaterialRequest} />
        <Drawer.Screen name="Material Inward" component={MaterialInward} />
        <Drawer.Screen name="Expense entry" component={ExpenseEntry} />
        <Drawer.Screen name="DPR Entry" component={DPREntry} />
        <Drawer.Screen name="DPR Report" component={DPRReport} />
        <Drawer.Screen name="Expense report" component={ExpenseReport} />
        <Drawer.Screen name="Pity cash entry" component={PityCashentry} />
        <Drawer.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }}/>
        <Drawer.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
       
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    borderRadius: 5,
  },
  drawerHeader: {
    backgroundColor: '#8F11E5',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  drawerItemIcon: {
    marginRight: 10,
    color: '#666',
  },
  drawerItemIconActive: {
    color: '#8F11E7',
  },
  drawerItemLabel: {
    marginLeft: 5,
    fontSize: 18,
    color: '#333',
    fontFamily: 'Alice-Regular',
  },
  drawerItemLabelActive: {
    color: '#8F11E7',
    borderRadius: 5,
  },
  logoImage: {
    width: 100,
    height: 100,
    left: 70,
    resizeMode: 'contain',
    borderRadius: 50,
  },
  companyName:{
    marginTop: 10,
    fontSize: 18,
    color: '#fff',
    left:2,
    fontFamily: 'Alice-Regular',
  },
});

export default App;
