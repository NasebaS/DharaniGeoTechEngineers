import React from 'react';
import { View, StyleSheet } from 'react-native';

const Divider = () => {
    return <View style={styles.divider} />;
  };
  const styles = StyleSheet.create({
   
  
    divider: {
      height: 1,
      backgroundColor: '#0E5583',
      marginHorizontal: 30,
      paddingVertical: 1.1, 
    },
  });


  export default Divider;