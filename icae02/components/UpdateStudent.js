import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'

export default function UpdateStudent({ route }) {
  const { student } = route.params;

  const [name, setName] = useState(student.name);
  const [age, setAge] = useState(student.age);
  const [gender, setGender] = useState(student.gender);
  const [course, setCourse] = useState(student.course);

  const handleUpdate = () => {
    const updatedStudent = {
      ...student,
      name,
      age,
      gender,
      course,
    };

    navigation.popTo('List', { updatedStudent });
  };

  const navigation = useNavigation();
  return (
    <View>
      <Text>Add A New Student</Text>
      <TextInput placeholder='Name' value={name} onChangeText={setName} />
      <TextInput placeholder='Age' value={age} onChangeText={setAge} />
      <TextInput placeholder='Gender' value={gender} onChangeText={setGender} />
      <TextInput placeholder='Course' value={course} onChangeText={setCourse} />
      <Button title='Update' onPress={handleUpdate} />
    </View>
  )
}
