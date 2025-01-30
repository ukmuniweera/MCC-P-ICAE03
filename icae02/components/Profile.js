import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { Image } from 'react-native-web';

export default function Profile({ route }) {
    const { student } = route.params;
    return (
        <View>
            <Image style={{ width: 400, height: 400 }} source={student.profile_pic} />
            <Text>{student.name}</Text>
            <Text>{student.age}|{student.gender}</Text>
            <Text>Information:</Text>
            <Text>ID: {student.id}</Text>
            <Text>Name: {student.gender}</Text>
            <Text>Age: {student.age}</Text>
            <Text>Course: {student.course_name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});