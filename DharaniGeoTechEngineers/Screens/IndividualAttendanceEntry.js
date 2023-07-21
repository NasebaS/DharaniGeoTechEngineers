import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import RadioButtonsGroup from 'react-native-radio-buttons-group';
import RadioGroup from '../Components/RadioGroup';

const IndividualAttendanceEntry = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [attendanceType, setAttendanceType] = useState('');

  const attendanceOptions = [
    { id: '1', label: 'Present' },
    { id: '2', label: 'Half Day' },
    { id: '3', label: 'Absent' },
  ];

  const handleAddAttendance = () => {
    // Perform any validation checks for the name and date fields if required.
    // Submit the data to your API or perform any other actions.

    // Clear the form after successful submission
    setName('');
    setDate('');
    setAttendanceType('');
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Add New Attendance</Text>

      {/* TextInput for Name */}
      <View style={{ marginBottom: 16 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Name</Text>
        <TextInput
          style={{
            marginBottom: 8,
            paddingVertical: 8,
            paddingHorizontal: 12,
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 4,
          }}
          value={name}
          onChangeText={text => setName(text)}
          placeholder="Enter Name"
        />
      </View>

      {/* Date Picker */}
      {/* ... Previous code for date picker ... */}

      {/* Radio Buttons Group */}
     
      <RadioGroup
        radioButtons={attendanceOptions}
        selectedId={attendanceType}
        onPress={(id) => setAttendanceType(id)}
        containerStyle={{ marginBottom: 16 }}
      />

      {/* Add Attendance Button */}
      <Button
        title="Add Attendance"
        onPress={handleAddAttendance}
        disabled={!name || !date || !attendanceType}
      />
    </View>
  );
};

export default IndividualAttendanceEntry;
