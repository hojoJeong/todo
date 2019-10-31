import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './app/components/Header';
import SubTitle from './app/components/SubTitle';
import Input from './app/components/Input';
import TodoItem from './app/components/TodoItem';

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.centered}>
            <Header/>
        </View>
        <View style={styles.inputContainer}>
          <SubTitle title="To-Do 입력"/>
          <Input/>
        </View>
        <View style={styles.todoContainer}>
          <SubTitle title="To-Do List"/>
          <TodoItem text=" 학교가기" isComplete={false}/>
          <TodoItem text=" 청소하기" isComplete={true}/>
          <TodoItem text=" 졸업하기" isComplete={true}/>
        </View>
        <View style={styles.todoContainer}>
          <SubTitle title="Recommendation List"/>
          <TodoItem text=" 운동하기" isComplete={true}/>
          <TodoItem text=" 쇼핑하기" isComplete={true}/>
          <TodoItem text=" 코딩하기" isComplete={true}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  centered:{
    alignItems: "center"
  },
  inputContainer:{
    marginLeft: 20
  },
  todoContainer: {
    marginTop: 20,
    marginLeft:20
  }
});
