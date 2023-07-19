import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const FormContainer = ({ username, role }) => {
  const [newPassword, setNewPassword] = useState('');

  const handleChangePassword = () => {
    // Handle the password change logic here, for example, you can make an API call to update the password.
    console.log('New password:', newPassword);
    // Reset the input field after the password is changed
    setNewPassword('');
  };

  return (
    <View style={styles.container}>
      {/* User Icon */}
      <View style={styles.userIconContainer}>
        <AntDesign name="user" size={80} color="#333" />
      </View>

      <View style={styles.userInfoContainer}>
        {/* User Info */}
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.role}>{role}</Text>
      </View>

      {/* Change Password Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="New Password"
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
          <Text style={styles.buttonText}>Update Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 100,
    backgroundColor: '#F0F0F0', // Light gray background color
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  userIconContainer: {
    position: 'absolute',
    top: -40,
    backgroundColor: '#fff',
    width: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userInfoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  role: {
    fontSize: 18,
    color: '#666',
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0E5583',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FormContainer;