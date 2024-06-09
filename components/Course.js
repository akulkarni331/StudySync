import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Course = (props) => {
   return (
       <View style={styles.item}>
           <View style={styles.itemLeft}>
               <View style={styles.square}></View>
               <Text style={styles.itemText}>{props.text}</Text>
           </View>
           <TouchableOpacity onPress={props.onDelete} style={styles.deleteButton}>
               <Text style={styles.deleteButtonText}>Delete</Text>
           </TouchableOpacity>
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
   }
});

export default Course;
