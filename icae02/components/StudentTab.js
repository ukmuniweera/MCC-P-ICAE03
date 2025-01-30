import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Profile';
import StudentList from './StudentList';
import AddStudent from './AddStudent';
import UpdateStudent from './UpdateStudent';


export default function StudentTab() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName='StudentList'>
            <Stack.Screen name={'StudentList'} component={StudentList} options={{ title: "List of Students" }} />
            <Stack.Screen name={'Profile'} component={Profile} options={{ title: "Student Profile" }} />
            <Stack.Screen name={'Add'} component={AddStudent} options={{ title: "Add New Student" }} />
            <Stack.Screen name={'UpdateStudent'} component={UpdateStudent} options={{ title: "Update Student" }} />
        </Stack.Navigator>
    )
}
