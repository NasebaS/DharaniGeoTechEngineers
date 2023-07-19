import React, { useState } from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import { View, Text, StyleSheet, TouchableOpacity, Animated, ImageBackground, Dimensions, Image } from 'react-native';
import ActiveIndicator from '../Components/ActiveIndicator';
import Divider from '../Components/Divider'

import Logout from './Logout';
import Profile from './Profile';
import Dashboard from './Dashboard';
import AttendanceEntry from './AttendanceEntry';
import EditAttendance from './EditAttendance';
import MaterialInward from './MaterialInward';
import MaterialRequest from './MaterialRequest';
import ExpenseReport from './ExpenseReport';
import ExpenseEntry from './ExpenseEntry';
import DPREntry from './DPREntry';
import DPRReport from './DPRReport';
import PityCashentry from './PityCashentry';
import AntDesign from 'react-native-vector-icons/AntDesign';



const Drawer = createDrawerNavigator();
const windowWidth = Dimensions.get('window').width;

function CustomDrawerContent({ navigation }) {
  const [activeItem, setActiveItem] = useState('');
  const animatedValue = React.useRef(new Animated.Value(0)).current;

  const handlePress = (item) => {
    setActiveItem(item);
    navigation.navigate(item);
  };

  const handleEditPress = () => {
    
    navigation.navigate('Profile');
  };
  const handleLogoutPress=(item)=>{
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
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
        {isActive && <ActiveIndicator />}
      </TouchableOpacity>
    );
  }

  return (
    
    <DrawerContentScrollView
    style={styles.drawerContainer} // Apply the custom style with rounded corners
  >
      <View style={styles.drawerHeader}>
      
        <Image source={require('../assets/images/logobg.png')} style={styles.logoImage} />
        <TouchableOpacity onPress={() => handleEditPress()} activeOpacity={0.1} >
            <AntDesign name="edit" size={15}
             style={[styles.editIcon, styles.shadow]}
             />
          </TouchableOpacity>
        {/* <Text style={styles.companyName}>Dharani GeoTech Engineers</Text> */}
        <View style={styles.headerIconContainer}>
          <TouchableOpacity onPress={() => handleLogoutPress()} activeOpacity={0.1}>
            <AntDesign name="logout" size={14} 
            style={[styles.logoutIcon, styles.shadow]}
            />
          </TouchableOpacity>
          
        </View>
      </View>
      <Divider/>
      {[
       
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
         
       ].map((item) => renderDrawerItem(item.name, item.iconName))}
        {/* <View style={styles.drawerBottomRadius} /> */}
        </DrawerContentScrollView>
  );
}

function Main() {
 

  return (
    <View style={styles.drawerWrapper}>
      <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />} initialRouteName="Dashboard"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0E5583',
        },
        headerTintColor: '#fff', // Optional, to set the color of the header text/icons
      }}
      drawerStyle={styles.drawerStyle}
      >
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
      
       
      </Drawer.Navigator>
      </View>
  );
}

const styles = StyleSheet.create({
  drawerWrapper: {
    flex: 1,
    // borderRadius: 10, // Set the borderRadius to the desired value
    overflow: 'hidden', // This ensures that the rounded corners are applied correctly
  },
  drawerContainer: {
    flex: 1, 
    // backgroundColor: '#008080',
    // borderRadius: 10,
    // overflow: 'hidden',
    
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  drawerHeader: {
   
    paddingVertical: 20,
    paddingHorizontal: 15,
    flexDirection:'row',
    justifyContent:'center',
   
    
  },
  // drawerBottomRadius: {
  //   position: 'absolute',
  //   bottom: 0,
  //   right: 0,
  //   width: 10,
  //   height: 10,
  //   borderBottomRightRadius: 10,
  //   borderTopRightRadius:5,
  //   backgroundColor: '#333',
  // },
  maskContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
    paddingTop:20
  },
  drawerItemIcon: {
    marginLeft: 10,
    color: '#666',
  },
  drawerItemIconActive: {
    color: '#0E5583',
 
  },
  drawerItemLabel: {
    
    marginLeft: 25,
    fontSize: 18,
    color: '#666',
    // fontFamily: 'Alice-Bold',
    fontFamily: 'CrimsonText-Bold',
  },
  
  drawerItemLabelActive: {
    color: '#0E5583',
    borderRadius: 5,
    
    paddingVertical:8,
   
    
  },
  drawerItemIconInactive: {
    color: '#666', // Change to the desired inactive color
  },
  drawerItemLabelInactive: {
    color: '#666', // Change to the desired inactive color
    borderRadius: 5,
    paddingVertical: 8,
  },
  logoImage: {
    width: Dimensions.get('window').width * 0.3,
    height: Dimensions.get('window').width * 0.3,
    resizeMode: 'contain',
    borderRadius: 20,
    left:30

  },
  companyName:{
    
    fontSize: 18,
    color: '#fff',
 
    fontFamily: 'Alice-Regular',
  },
  headerIconContainer: {
    marginRight: 50,
    left:70,
    flexDirection:'column',
    justifyContent:'space-between',
   
  },
  logoImageContainer: {
    marginLeft: 15,
  },
  logoutIcon:{
backgroundColor:'#0E5583',
paddingHorizontal:7,
paddingVertical:7,
color:'#fff',
borderRadius:5,

  },
  editIcon:{
    // backgroundColor:'#0E5583',
    // paddingHorizontal:7,
    // paddingVertical:7,
    color:'#000',
    borderRadius:10,
    top:80,
    left:30,
    height:20,
    width:20

  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 10,
  },
  drawerStyle: {
    top:5  // Set the background color of the drawer to transparent
  },
  
});

export default Main;