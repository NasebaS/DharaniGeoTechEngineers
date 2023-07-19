// DrawerItem.js
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ActiveIndicator from '../Components/ActiveIndicator';

const renderDrawerItem = (item, iconName, activeItem, handlePress) => {
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
};

export default renderDrawerItem;
