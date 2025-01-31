import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'

export default function AddStudent() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [course, setCourse] = useState('');

  const newStudent = {
    id: id,
    name: name,
    age: age,
    gender: gender,
    course: course,
    profile_pic: require('../assets/profilepic/18.jpg')
  }

  const navigation = useNavigation();

  return (
    <View>
      <Text>Add A New Student</Text>
      <TextInput placeholder='ID' value={id} onChangeText={setId} />
      <TextInput placeholder='Name' value={name} onChangeText={setName} />
      <TextInput placeholder='Age' value={age} onChangeText={setAge} />
      <TextInput placeholder='Gender' value={gender} onChangeText={setGender} />
      <TextInput placeholder='Course' value={course} onChangeText={setCourse} />
      <Button title='Add' onPress={() => navigation.popTo('List', { newStudent })} />
    </View>
  )
}
