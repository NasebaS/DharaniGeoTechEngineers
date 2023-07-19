import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import FormContainer from './FormContainer';

const Profile = () => {
  const handleFormSubmit = (formData) => {
    // Implement your logic to update user info here
    console.log('Form Data:', formData);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.blueScreen} />

      {/* Form container with username, role, and new password fields */}
      <View style={styles.formContainer}>
        <FormContainer onSubmit={handleFormSubmit} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blueScreen: {
    flex: 1,
    backgroundColor: '#0E5583', // Your desired blue color
  },
  formContainer: {
    position: 'absolute',
    top: '2%', // Place the form container at the center of the screen
    left: 0,
    right: 0,
    bottom:1,
    
    backgroundColor: 'transparent', // Set the background color to transparent
    paddingHorizontal: 1,
    
    zIndex: 1, // Set a higher z-index to make it appear above the blue screen
  },
});

export default Profile;
