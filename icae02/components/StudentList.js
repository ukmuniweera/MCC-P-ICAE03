import React, { useEffect, useState } from 'react'
import { Button, FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { students } from './StudentsDb'
import { useNavigation } from '@react-navigation/native'

export default function StudentList({ route }) {
  const [studentsData, setStudentsData] = useState(students);
  const navigation = useNavigation();

  useEffect(() => {
    if (route?.params?.newStudent) {
      const { newStudent } = route.params;
      setStudentsData(prev => [...prev, newStudent])
    }
    if (route?.params?.deletedStudent) {
      const { deletedStudent } = route.params;
      setStudentsData(prev=>prev.filter(student=>student.id!==deletedStudent.id))
    }
    if (route?.params?.updatedStudent) {
      const { updatedStudent } = route.params;
      setStudentsData(prev=>prev.map(student=>(student.id === updatedStudent.id ? updatedStudent : student)));
    }
  }, [route?.params])
  return (
    <View>
      <Button title='Add new student' onPress={() => navigation.navigate('Add')} />
      <FlatList
        data={studentsData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Profile', { student: item })}>
            <Image source={item.profile_pic} />
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}
