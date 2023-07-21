import { StyleSheet, Text, TouchableOpacity, View,ScrollView } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Colors from '../assets/Colors/Colors';
const EditAttendance = () => {
const navigation=useNavigation()
  const AttendanceData=[
     
    {
      "date": "21-07-2023",
      "totalEmployees": 50,
      "presentEmployees": 35,
      "absentEmployees": 8,
      "halfDayEmployees": 7
    },
    {
      "date": "22-07-2023",
      "totalEmployees": 50,
      "presentEmployees": 45,
      "absentEmployees": 3,
      "halfDayEmployees": 2
    },
    {
      "date": "23-07-2023",
      "totalEmployees": 50,
      "presentEmployees": 35,
      "absentEmployees": 8,
      "halfDayEmployees": 7
    },
    {
      "date": "24-07-2023",
      "totalEmployees": 50,
      "presentEmployees": 35,
      "absentEmployees": 8,
      "halfDayEmployees": 7
    },
    {
      "date": "25-07-2023",
      "totalEmployees": 50,
      "presentEmployees": 35,
      "absentEmployees": 8,
      "halfDayEmployees": 7
    },
    {
      "date": "26-07-2023",
      "totalEmployees": 50,
      "presentEmployees": 35,
      "absentEmployees": 8,
      "halfDayEmployees": 7
    },
    {
      "date": "27-07-2023",
      "totalEmployees": 50,
      "presentEmployees": 35,
      "absentEmployees": 8,
      "halfDayEmployees": 7
    },
    {
      "date": "28-07-2023",
      "totalEmployees": 50,
      "presentEmployees": 35,
      "absentEmployees": 8,
      "halfDayEmployees": 7
    },
    {
      "date": "29-07-2023",
      "totalEmployees": 50,
      "presentEmployees": 35,
      "absentEmployees": 8,
      "halfDayEmployees": 7
    },
    {
      "date": "30-07-2023",
      "totalEmployees": 50,
      "presentEmployees": 35,
      "absentEmployees": 8,
      "halfDayEmployees": 7
    },
    {
      "date": "31-07-2023",
      "totalEmployees": 50,
      "presentEmployees": 35,
      "absentEmployees": 8,
      "halfDayEmployees": 7
    },

    {
      "date": "1-08-2023",
      "totalEmployees": 50,
      "presentEmployees": 35,
      "absentEmployees": 8,
      "halfDayEmployees": 7
    },
    {
      "date": "2-08-2023",
      "totalEmployees": 50,
      "presentEmployees": 35,
      "absentEmployees": 8,
      "halfDayEmployees": 7
    },
  ]
  const handleEditPress=()=>{
navigation.navigate('Attendance entry')
  }
   const handleAddPress=()=>{
    navigation.navigate('Attendance entry')
  }
  return (
    <View style={styles.container}>
      
      <View style={styles.bluecontainer} />

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {AttendanceData.map((data, index) => (
          <View style={styles.itemContainer} key={index}>
            <View style={styles.iconsContainer}>
              <TouchableOpacity onPress={() => handleEditPress()} activeOpacity={0.1}>
                <AntDesign name="export2" size={15} style={styles.editIcon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleAddPress()} activeOpacity={0.1}>
                <AntDesign name="pluscircle" size={15} style={styles.addIcon} />
              </TouchableOpacity>
            </View>
            <View style={styles.dataContainer}>
              <View style={styles.dateContainer}>
                <Text style={styles.dateText}>Date: {data.date}</Text>
              </View>
              <View style={styles.countsContainer}>
                <Text>Total: {data.totalEmployees}</Text>
                <Text>P: {data.presentEmployees}</Text>
                <Text>A: {data.absentEmployees}</Text>
                <Text>HD: {data.halfDayEmployees}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bluecontainer: {
    backgroundColor: Colors.primary,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: '90%',
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20
  
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: '10%',
    
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginBottom: 15,
    width: '90%',
    
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 60,
  },
  editIcon: {
    marginRight: 8,
    color: 'blue',
  },
  addIcon: {
    color: 'green',
  },
  dataContainer: {
    flex: 1,
    paddingLeft: 16,
  },
  dateContainer: {
    marginBottom: 8,
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  countsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default EditAttendance;