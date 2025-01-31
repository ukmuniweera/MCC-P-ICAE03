import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StudentList from './StudentList';
import AddStudent from './AddStudent';
import Profile from './Profile';
import UpdateStudent from './UpdateStudent';

export default function StudentTab() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName='List'>
      <Stack.Screen name="List" component={StudentList} />
      <Stack.Screen name="Add" component={AddStudent} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Update" component={UpdateStudent} />
    </Stack.Navigator>
  )
}
