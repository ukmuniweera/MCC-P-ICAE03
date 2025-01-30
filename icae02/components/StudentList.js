import React from 'react'
import { StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import { students } from './StudentsDb';
import { Image, View } from 'react-native-web';

export default function StudentList() {
    return (
        <View>
            {students.map((student) => (
                <View>
                    <Title onClick={() => alert('Hi')} key={student.id}>{student.name}</Title>
                </View>
            ))}
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
