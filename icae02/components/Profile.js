import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, Image, ScrollView, Text, View } from 'react-native'

export default function Profile({ route }) {
  const { student } = route.params;
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View>
        <Image source={student.profile_pic} />
        <Text>{student.name}</Text>
        <Text>Age: {student.age} | Gender: {student.gender}</Text>
        <Text>Information</Text>
        <Text>ID: {student.id}</Text>
        <Text>Gender: {student.gender}</Text>
        <Text>Age: {student.age}</Text>
        <Text>Course: {student.course_name}</Text>
        <Button title='Home' onPress={()=>navigation.popTo('List')} />
      </View>
    </ScrollView>
  )
}
