import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, Image, ScrollView, Text, View } from 'react-native'

export default function Profile({ route }) {
  const { student, updatedStudent } = route.params || {};
  const displayStudent = updatedStudent || student;

  const navigation = useNavigation();
  return (
    <ScrollView>
      <View>
        <Image source={displayStudent?.profile_pic} />
        <Text>{displayStudent?.name}</Text>
        <Text>Age: {displayStudent?.age} | Gender: {displayStudent?.gender}</Text>
        <Text>Information</Text>
        <Text>ID: {displayStudent?.id}</Text>
        <Text>Gender: {displayStudent?.gender}</Text>
        <Text>Age: {displayStudent?.age}</Text>
        <Text>Course: {displayStudent?.course_name}</Text>
        <Button title='Update' onPress={() => navigation.navigate('Update', { student: displayStudent })} />
        <Button title='Delete' onPress={() => navigation.popTo('List', { deletedStudent: student })} />
        <Button title='Home' onPress={() => navigation.popTo('List')} />
      </View>
    </ScrollView>
  )
}
