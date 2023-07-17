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
      </View>
      {[
        { name: 'Home', iconName: 'home' },
        { name: 'About', iconName: 'user' },
        { name: 'Services', iconName: 'windows' },
        { name: 'Projects', iconName: 'camera' },
        { name: 'Gallery', iconName: 'wechat' },
        { name: 'Contact', iconName: 'mail' },
      ].map((item) => renderDrawerItem(item.name, item.iconName))}
    </Animated.View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />} initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Services" component={Services} />
        <Drawer.Screen name="Projects" component={Projects} />
        <Drawer.Screen name="Gallery" component={Gallery} />
        <Drawer.Screen name="Contact" component={Contact} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: '#fff',
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
    color: '#333',
  },
  drawerItemIconActive: {
    color: '#8F11E7',
  },
  drawerItemLabel: {
    marginLeft: 5,
    fontSize: 16,
    color: '#333',
    fontFamily: 'RobotoRegular',
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
});

export default App;
