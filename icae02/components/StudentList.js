import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Title } from 'react-native-paper';
import { students } from './StudentsDb';
import { useNavigation } from '@react-navigation/native';

export default function StudentList({ route }) {
    const [listStudent, setListStudent] = useState(students);

    React.useEffect(() => {
        if (route.params?.newStudent) {
            const { newStudent } = route.params;
            setListStudent([...listStudent, newStudent]);
        }

    }, [route.params?.newStudent])

    const navigation = useNavigation();
    return (
        <View>
            <FlatList
                data={listStudent}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => { navigation.navigate('Profile', { student: item }) }}>
                        <Title>{item.name}</Title>
                    </TouchableOpacity>
                )}
            />
            <Button title="+" onPress={() => { navigation.navigate('Add') }} />
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
