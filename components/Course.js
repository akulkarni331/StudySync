import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Course = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={props.onDelete} style={styles.deleteButton}>
                    <Text style={styles.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={props.onToDo} style={styles.toDoButton}>
                    <Text style={styles.toDoButtonText}>To-Do</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15
    },
    itemText: {
        maxWidth: '80%',
        fontSize:18
    },
    deleteButton: {
        backgroundColor: '#FF6347',
        paddingVertical: 5,
        paddingHorizontal: 5, // Adjust the horizontal padding
        borderRadius: 5,
        marginRight: 5, // Adjust the margin between buttons
    },
    deleteButtonText: {
        color: '#FFF',
        fontWeight: 'bold'
    },
    toDoButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 5,
        paddingHorizontal: 5, // Adjust the horizontal padding
        borderRadius: 5,
        marginRight: 5, // Adjust the margin between buttons
    },
    toDoButtonText: {
        color: '#FFF',
        fontWeight: 'bold'
    }
});

export default Course;
