import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, TextInput, Platform, TouchableOpacity, Keyboard, Alert, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const CourseListScreen = ({ navigation }) => {
    const [course, setCourse] = useState('');
    const [courseItems, setCourseItems] = useState([]);

    const handleAddCourse = () => {
        Keyboard.dismiss();
        setCourseItems([...courseItems, course]);
        setCourse('');
    }

    const deleteCourse = (index) => {
        Alert.alert(
            'Confirm',
            'Are you sure you want to delete this course?',
            [
                {
                    text: 'No',
                    style: 'cancel',
                },
                {
                    text: 'Yes',
                    onPress: () => {
                        let itemsCopy = [...courseItems];
                        itemsCopy.splice(index, 1);
                        setCourseItems(itemsCopy);
                    },
                },
            ],
            { cancelable: false }
        );
    }

    const navigateToToDo = (courseName) => {
        navigation.navigate('ToDoList', { courseName });
    }

    const Course = (props) => {
        return (
            <View style={styles.item}>
                <View style={styles.itemLeft}>
                    <View style={styles.square}></View>
                    <Text style={styles.itemText}>{props.text}</Text>
                </View>
                <TouchableOpacity onPress={() => navigateToToDo(props.text)} style={styles.toDoButton}>
                    <Text style={styles.toDoButtonText}>To-Do</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteCourse(props.index)} style={styles.deleteButton}>
                    <Text style={styles.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Courses</Text>
            {
                courseItems.map((item, index) => (
                    <Course key={index} text={item} index={index} />
                ))
            }
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.writeCourseWrapper}
            >
                <TextInput
                    style={styles.input}
                    placeholder={"Add a class..."}
                    value={course}
                    onChangeText={text => setCourse(text)}
                />
                <TouchableOpacity onPress={() => handleAddCourse()}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    );
}

const ToDoListScreen = ({ navigation, route }) => {
    const { courseName } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{courseName} To-Do List</Text>
            <View style={styles.buttonContainer}>
                <Button title="Home" onPress={() => navigation.goBack()} />
            </View>
            {/* Add your To-Do List UI here */}
        </View>
    );
}

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="My Courses"
                    component={CourseListScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ToDoList"
                    component={ToDoListScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: '#f0f0f0',
       paddingTop: 50,
       paddingHorizontal: 20,
   },
   title: {
       fontSize: 24,
       fontWeight: 'bold',
       marginBottom: 20,
       textAlign: 'center',
       paddingTop: 20,
   },
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
       fontSize: 18,
   },
   deleteButton: {
       backgroundColor: '#FF6347',
       paddingVertical: 5,
       paddingHorizontal: 10,
       borderRadius: 5,
   },
   deleteButtonText: {
       color: '#FFF',
       fontWeight: 'bold'
   },
   toDoButton: {
       backgroundColor: '#4CAF50',
       paddingVertical: 5,
       paddingHorizontal: 10,
       borderRadius: 5,
   },
   toDoButtonText: {
       color: '#FFF',
       fontWeight: 'bold'
   },
   writeCourseWrapper: {
       position: 'absolute',
       bottom: 60,
       width: '100%',
       flexDirection: 'row',
       justifyContent: 'space-around',
       alignItems: 'center',
   },
   input: {
       paddingVertical: 15,
       paddingHorizontal: 15,
       backgroundColor: '#FFF',
       borderRadius: 60,
       borderColor: "#C0C0C0",
       borderWidth: 1,
       width: 250,
       marginLeft: 25,
   },
   addWrapper: {
       width: 60,
       height: 60,
       backgroundColor: '#FFF',
       borderRadius: 60,
       justifyContent: 'center',
       alignItems: 'center',
       borderColor: '#C0C0C0',
       borderWidth: 1,
       marginLeft: 25,
   },
   addText: {
       fontSize: 36,
       color: '#55BCF6',
       marginTop: -5,
   },
   buttonContainer: {
        alignItems: 'flex-start',
        marginLeft: -3,
        marginTop:-50,
    },
});

export default App;
