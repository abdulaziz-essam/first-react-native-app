import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { StyleSheet,Modal, Text, View,Button ,TextInput,FlatList,ImageBackground } from 'react-native';

import CarList from './components/carList';
export default function App() {


/////// 
  return (
   
    <View style={styles.container}>
<CarList />
    </View>

  );
}

const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:"#fff",
  alignItems:"center",
  justifyContent:"center",

  }, 



});



// const [courseGoals, setCourseGoals] = useState([])
// const [isAddMode, setisAddMode] = useState(false)
// const addGoalHandler = (goal) => {
//   setCourseGoals((currentState) => [...currentState,
//   { id: Math.random().toString(), value: goal }]
//   )
// }

// const removeGoalHAndler = (goalId) => {

//   setCourseGoals((currentGoals) => {

//     return currentGoals.filter((goal) => goal.id != goalId)
//   })
// }