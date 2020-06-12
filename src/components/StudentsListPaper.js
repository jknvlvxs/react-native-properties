import React from 'react';
import {ScrollView} from 'react-native';
import {List} from 'react-native-paper';

const students = [
    {id: 1, name: 'Nair Emily Almada', grade: Math.floor(Math.random() * (10 * 100 - 1 * 100) + 1 * 100) / (1*100)},
    {id: 2, name: 'Helena Aurora Aragão', grade: Math.floor(Math.random() * (10 * 100 - 1 * 100) + 1 * 100) / (1*100)},
    {id: 3, name: 'Clarice Isabela Gomes', grade: Math.floor(Math.random() * (10 * 100 - 1 * 100) + 1 * 100) / (1*100)},
    {id: 4, name: 'Melissa Silvana Campos', grade: Math.floor(Math.random() * (10 * 100 - 1 * 100) + 1 * 100) / (1*100)},
    {id: 5, name: 'Augusto Oliver Pires', grade: Math.floor(Math.random() * (10 * 100 - 1 * 100) + 1 * 100) / (1*100)},
    {id: 6, name: 'Alice Manuela da Mata', grade: Math.floor(Math.random() * (10 * 100 - 1 * 100) + 1 * 100) / (1*100)},
    {id: 7, name: 'Vitor Edson da Cunha', grade: Math.floor(Math.random() * (10 * 100 - 1 * 100) + 1 * 100) / (1*100)},
    {id: 8, name: 'Juan Pedro Drumond', grade: Math.floor(Math.random() * (10 * 100 - 1 * 100) + 1 * 100) / (1*100)},
    {id: 9, name: 'Renan Vicente Alves', grade: Math.floor(Math.random() * (10 * 100 - 1 * 100) + 1 * 100) / (1*100)},
    {id: 10, name: 'Marcelo Vicente Alves', grade: Math.floor(Math.random() * (10 * 100 - 1 * 100) + 1 * 100) / (1*100)},
    {id: 11, name: 'Nair Emily Almada', grade: Math.floor(Math.random() * (10 * 100 - 1 * 100) + 1 * 100) / (1*100)},
    {id: 12, name: 'Helena Aurora Aragão', grade: Math.floor(Math.random() * (10 * 100 - 1 * 100) + 1 * 100) / (1*100)},
    {id: 13, name: 'Clarice Isabela Gomes', grade: Math.floor(Math.random() * (10 * 100 - 1 * 100) + 1 * 100) / (1*100)},
    {id: 14, name: 'Melissa Silvana Campos', grade: Math.floor(Math.random() * (10 * 100 - 1 * 100) + 1 * 100) / (1*100)},
    {id: 15, name: 'Augusto Oliver Pires', grade: Math.floor(Math.random() * (10 * 100 - 1 * 100) + 1 * 100) / (1*100)},
    {id: 16, name: 'Alice Manuela da Mata', grade: Math.floor(Math.random() * (10 * 100 - 1 * 100) + 1 * 100) / (1*100)},
    {id: 17, name: 'Vitor Edson da Cunha', grade: Math.floor(Math.random() * (10 * 100 - 1 * 100) + 1 * 100) / (1*100)},
    {id: 18, name: 'Juan Pedro Drumond', grade: Math.floor(Math.random() * (10 * 100 - 1 * 100) + 1 * 100) / (1*100)},
    {id: 19, name: 'Renan Vicente Alves', grade: Math.floor(Math.random() * (10 * 100 - 1 * 100) + 1 * 100) / (1*100)},
    {id: 20, name: 'Vicente Drumond Pires', grade: Math.floor(Math.random() * (10 * 100 - 1 * 100) + 1 * 100) / (1*100)},
    {id: 21, name: 'Isabela Vicente Alves', grade: Math.floor(Math.random() * (10 * 100 - 1 * 100) + 1 * 100) / (1*100)},
    {id: 22, name: 'Oliver Vicente Mata', grade: Math.floor(Math.random() * (10 * 100 - 1 * 100) + 1 * 100) / (1*100)},
    {id: 23, name: 'Edson Vicente Aragão', grade: Math.floor(Math.random() * (10 * 100 - 1 * 100) + 1 * 100) / (1*100)},
    {id: 24, name: 'Borges Vicente Alves', grade: Math.floor(Math.random() * (10 * 100 - 1 * 100) + 1 * 100) / (1*100)},
]

export const Students = props => 
students.map(student => {
    return (
        <List.Item
            title = {student.name}
            description = {'Nota: '+student.grade}
            key={student.id}
            left = {student => 
                <List.Icon icon="school"/>
            }
        />
        
    )
})

export default props => {
    return (
        <ScrollView>
            <Students/>
        </ScrollView>
    )
}