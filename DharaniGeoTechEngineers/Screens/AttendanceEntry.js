import React, { useState } from 'react';
import { View, Text, FlatList,TouchableOpacity, StyleSheet,Platform  } from 'react-native';
import RadioButton from '../Components/RadioButton'; // Custom RadioButton component
import DateTimePicker from '@react-native-community/datetimepicker';
import Colors from '../assets/Colors/Colors';

const AttendanceForm = () => {
  // Sample data for the list of users
  const usersData = [
    { id: 1, name: 'James', attendance: 'Present' },
    { id: 2, name: 'Johnny', attendance: 'Absent' },
    { id: 3, name: 'Robbin', attendance: 'Half Day' },
    // Add more users as needed
  ];
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === 'ios'); // Show the date picker on iOS only
    setSelectedDate(selectedDate || selectedDate);
  };

  // Function to handle changes in attendance status
  const handleAttendanceChange = (userId, attendance) => {
    // Handle the logic to update the attendance status for the specific user
    // For simplicity, we will just update the state directly in this example.
    const updatedUsersData = usersData.map((user) =>
      user.id === userId ? { ...user, attendance } : user
    );
    setUsersData(updatedUsersData);
  };
  const handleSave = () => {
    // Handle the logic to save the attendance data
    // For this example, we will simply log the updated usersData
    console.log('Updated Attendance Data:', usersData);
  };

  // Render each row in the FlatList
  const renderRow = ({ item }) => {
    return (
      <View style={styles.row}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.radioButtonsContainer}>
          <RadioButton
            
            color="green"
            selected={item.attendance === 'Present'}
            onPress={() => handleAttendanceChange(item.id, 'Present')}
          />
          <RadioButton
          
            color="red"
            selected={item.attendance === 'Absent'}
            onPress={() => handleAttendanceChange(item.id, 'Absent')}
          />
          <RadioButton
           
            color="grey"
            selected={item.attendance === 'Half Day'}
            onPress={() => handleAttendanceChange(item.id, 'Half Day')}
          />
        </View>
        
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.bluecontainer}/>
       {/* Date Picker */}
       <TouchableOpacity style={styles.datePickerContainer} onPress={() => setShowDatePicker(true)}>
        <Text style={styles.datePickerText}>
          {selectedDate.toDateString()}
        </Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={handleDateChange}
        />
      )}
      <View style={styles.formContainer}>
      <View style={styles.header}>
        <Text style={styles.columnName}>Name</Text>
        <Text style={styles.columnName}>Present</Text>
        <Text style={styles.columnName}>Absent</Text>
        <Text style={styles.columnName}>Half Day</Text>
      </View>
      <FlatList
        data={usersData}
        renderItem={renderRow}
        keyExtractor={(item) => item.id.toString()}
      />
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:'#ccc'
  },
  bluecontainer:{
    flex:1,
    backgroundColor:Colors.primary,


  },
  datePickerContainer: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  formContainer:{
    flex:1,
    padding: 20,
    borderRadius:20,
    backgroundColor:'#fff'
  },
  header: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  columnName: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    flex: 1,
    // backgroundColor:'#ccc',
    paddingHorizontal:5
  },
  radioButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 2,
 paddingVertical:1,
 paddingHorizontal:0
  },
  saveButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AttendanceForm;
