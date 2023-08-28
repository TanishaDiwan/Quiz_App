import React from 'react';
import { View, Text } from 'react-native';
  const Welcome=()=>
{
  return(
    <View style={{backgroundColor:'orange'}}>   
    <View style={{ backgroundColor:'lightblue',margin:10}}>
  <View style={{flex:1, justifyContent:"center", alignItems:"center", margin:40, height:40}}>
    <Text style={{fontSize:35, color:'blue',fontWeight:'700',opacity:0.6,  textAlign:'center'}}>WELCOME TO </Text>
    <Text style={{fontSize:35, color:'blue',fontWeight:'700',opacity:0.6,  textAlign:'center'}}> QUIZ!</Text>
 </View>
    <View style={{flex:1,justifyContent:"center", alignItems:"center", margin:40}}>
    <Text style={{fontSize:20,  textAlign:'center'}}>
    <Text style={{fontWeight: 'bold'}}>
    ARE YOU READY
      <Text style={{  color: 'red'}}> TO START?</Text>
    </Text>
   
    </Text>
     </View>
      </View>
      </View>
  ) 
  }
 

 
  export default Welcome;