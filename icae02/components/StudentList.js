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
  }, [route?.params?.newStudent])
  return (
    <View>
      <FlatList
        data={studentsData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Profile', { student: item })}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <Button title='Add new student' onPress={() => navigation.navigate('Add')} />
    </View>
  )
}
