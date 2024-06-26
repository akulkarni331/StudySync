import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, TextInput, Platform, TouchableOpacity, Keyboard } from 'react-native';


const Task = (props) => {
   return (
       <View style={styles.item}>
           <View style={styles.itemLeft}>
               <View style={styles.square}></View>
               <Text style={styles.itemText}>{props.text}</Text>
           </View>
           <View style={styles.circular}></View>
       </View>
   );
}


const App = () => {
   const [task, setTask] = useState('');
   const [taskItems, setTaskItems] = useState([]);


   const handleAddTask = () => {
       Keyboard.dismiss();
       setTaskItems([...taskItems, task]);
       setTask(null);
   }


   const completeTask = (index) => {
       let itemsCopy = [...taskItems];
       itemsCopy.splice(index, 1);
       setTaskItems(itemsCopy);
   }


   return (
       <View style={styles.container}>
           <Text style={styles.title}>My Subjects List</Text>
           {
               taskItems.map((item, index) => {
                   return (
                       <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                           <Task text={item} />
                       </TouchableOpacity>
                   );
               })
           }


           <KeyboardAvoidingView
               behavior={Platform.OS === "ios" ? "padding" : "height"}
               style={styles.writeTaskWrapper}
           >
               <TextInput
                   style={styles.input}
                   placeholder={"Add a class..."}
                   value={task}
                   onChangeText={text => setTask(text)}
               />
              
               <TouchableOpacity onPress={() => handleAddTask()}>
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
       marginBottom: 20,
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
       marginRight: 15,
   },
   itemText: {
       maxWidth: '80%',
      
   },
   circular: {
       width: 12,
       height: 12,
       borderColor: '#55BCF6',
       borderWidth: 2,
       borderRadius: 5,
   },
   writeTaskWrapper: {
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