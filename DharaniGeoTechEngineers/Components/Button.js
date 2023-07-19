import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Button = ({ iconName, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress} activeOpacity={0.7}>
      <AntDesign name={iconName} size={24} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
//     paddingHorizontal:7,
// paddingVertical:7,
  },
  icon: {
    color:'#0E5583'
  },
});

export default Button;
