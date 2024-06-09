import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, TextInput, Platform, TouchableOpacity, Keyboard, Alert } from 'react-native';

const App = () => {
   const [course, setCourse] = useState('');
   const [courseItems, setCourseItems] = useState([]);

   const handleAddCourse = () => {
       Keyboard.dismiss();
       setCourseItems([...courseItems, course]);
       setCourse(''); // Change null to empty string to clear the input field
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

   const Course = (props) => {
       return (
           <View style={styles.item}>
               <View style={styles.itemLeft}>
                   <View style={styles.square}></View>
                   <Text style={styles.itemText}>{props.text}</Text>
               </View>
               <TouchableOpacity onPress={() => deleteCourse(props.index)}>
                   <View style={styles.deleteButton}>
                       <Text style={styles.deleteButtonText}>Delete</Text>
                   </View>
               </TouchableOpacity>
           </View>
       );
   }

   return (
       <View style={styles.container}>
           <Text style={styles.title}>My Subjects List</Text>
           {
               courseItems.map((item, index) => {
                   return (
                       <Course key={index} text={item} index={index} />
                   );
               })
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
       maxWidth: '80%'
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
});

export default App;
