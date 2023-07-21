// RadioButton.js

import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

export default function RadioButton({ label, selected, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={[styles.radio, selected && styles.radioSelected]} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ccc',
    marginRight: 10,
  },
  radioSelected: {
    borderColor: '#007AFF',
  },
  label: {
    fontSize: 16,
  },
});
