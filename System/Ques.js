import * as React from 'react';
import { Text, View, StyleSheet,Button,TextInput} from 'react-native';
import {useState} from 'react';

const Ques =()=>{
  const [Name,setName]=useState('')
  function buttonClick(){
  alert('The Correct answer is Sponge')
  }
  return(
    <View style= {{backgroundColor:'lightblue',margin:10}}>
    <View>
    <Text style={style1.textQues}>
    QUESTION 1
    </Text>
     </View>
     <Text style={style1.text2}>I am full of holes but can still hold water, what am I?</Text>
     <Text style={{fontSize:20}}>{Name}</Text>
    <TextInput style={style1.text1}
    placeholder="Enter your Answer" />
    <View style={{justifyContent:'center',alignItems:'center' ,borderColor:'red'}}>
        
  <Button title="submit" onPress= {buttonClick}/>
  <Text> </Text>
    </View>
    </View>
  )
}
export default Ques;
const style1=StyleSheet.create({
  text1:{
    fontSize:30,
    borderWidth:2,
    borderColor:'black',
    alignItems:'center',
    paddingLeft:15,
    borderRadius:40,
    backgroundColor:'white',
    margin:20
  },
  textQues:{
    fontSize:40,fontWeight:'700', textAlign:'center',backgroundColor:'red',opacity:0.9,borderRadius:50,width:200,marginLeft:90,marginTop:20,color:"white"
  },
   text2:{
    fontSize:30,
    alignItems:'stretch',
   
    padding:15
    
  }
 
})