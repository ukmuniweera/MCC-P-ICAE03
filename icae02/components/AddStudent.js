import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { StyleSheet, TextInput, View, Button } from 'react-native'

export default function AddStudent() {
    const [id, setId] = useState();
    const [name, setname] = useState();
    const [age, setAge] = useState();
    const [gender, setGender] = useState();
    const [course, setCourse] = useState();

    const navigation = useNavigation();

    const newStudent = {
        id: id,
        name: name,
        gender: gender,
        age: age,
        course: course,
        profile_pic: require('../assets/profilepic/1.jpg')
    }

    const handleSubmit = () => {
        navigation.navigate('StudentList', { newStudent })
    }

    return (
        <View>
            <TextInput placeholder="Student ID" value={id} onChangeText={setId} />
            <TextInput placeholder="Student Name" value={name} onChangeText={setname} />
            <TextInput placeholder="Student Age" value={age} onChangeText={setAge} />
            <TextInput placeholder="Student Gender" value={gender} onChangeText={setGender} />
            <TextInput placeholder="Student Course" value={course} onChangeText={setCourse} />
            <Button title="Add Student" onPress={handleSubmit} />
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