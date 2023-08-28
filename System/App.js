import React, {useState} from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ques from './Ques';
import Ques2 from './Ques2';
import Ques3 from './Ques3';
import Welcome from './Welcome';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App=()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='HOME' component={HomeScreen}/>
        
        <Stack.Screen name='Question1' component={QuesScreen}/>
        <Stack.Screen name='Question2' component={Ques2Screen}/>
        <Stack.Screen name='Question3' component={Ques3Screen}/>
      </Stack.Navigator>
    </NavigationContainer>  

  )
}

export default App;

function Desc({navigation}){
  return(
    <ScrollView>
  <View>
  <Welcome/>
   <Button title='Start' 
   onPress={()=>navigation.navigate('Question1')}/>
  
  <Text style={{fontSize:22 , textAlign:'justify',paddingLeft:20,paddingTop:20}}>This is our <Text style={{fontWeight:"700"}}>Quiz App.{'\n'}</Text>It contains<Text style={{fontWeight:"700"}}> 3 Questions.{'\n'}</Text><Text style={{fontWeight:"900"}}>Hope you'll like it !</Text>{'\n'}
  </Text>
    <Text style={{fontSize:40,textAlign:'center',fontWeight:"700",color:'#ff6666'}}>All The Best !!!{'\n'}</Text> 
  
  </View>
  </ScrollView>
  )
}
function Ack({navigation}){
  return(
    <ScrollView>
  <View>
  <Welcome/>
  <Button title='Start' 
   onPress={()=>navigation.navigate('Question1')}/>
    <Text  style={{fontSize:20,padding:20}}>We would like to express our gratitude to <Text style={{fontWeight:"700"}}>Mr. Dheeraj </Text>sir for providing support and guidance. We got to learn a lot more about<Text style={{fontWeight:"700"}}>  React Native App Development </Text>which will be very helpful for us.</Text>
  
  </View>
  </ScrollView>
  )
}
  function Info({navigation}){
    return(
      <ScrollView>
    <View>
        <Welcome/>
   <Button title='Start' 
   onPress={()=>navigation.navigate('Question1')}/>
      <Text style={{fontSize:30,paddingLeft:20,alignItems:'center',paddingTop:40,fontWeight:'700',opacity:0.6}}>
      THIS APP IS MADE BY {'\n'}
  <Text style={{fontSize:20,paddingLeft:-20,alignItems:'center',paddingTop:10,fontWeight:'700'}}>Yukti Jain{'\n'}
    Tanisha Diwan{'\n'}
    Tikesh Chandrakar
    </Text>
    </Text>
    </View>
    </ScrollView>
    )
  }

function HomeScreen(){
  return(

    <Tab.Navigator>
      <Tab.Screen name='Description' component={Desc} options={{ tabBarBadge:1,}}></Tab.Screen>
      <Tab.Screen name='Acknowledgement' component={Ack} options={{ tabBarBadge:2}}/>
      <Tab.Screen name='About Us' component={Info} options={{ tabBarBadge:3,}}/>
    </Tab.Navigator>
  
  ) 
}

function QuesScreen({navigation}){
  return(
    <View style={{backgroundColor:'orange'}}>
   <Ques/>
   
    <Button title='NEXT' 
   onPress={()=>navigation.navigate('Question2') }/>
   

    </View>
  
  )  
}

function Ques2Screen({navigation}){
  return(
    <View style={{backgroundColor:'orange'}}>
    <Ques2/>
    <View>
  <Button title="NEXT"
   onPress={()=>navigation.navigate('Question3')}/>
  
    </View>
  </View>
    
  )
}
function Ques3Screen(){
  return(
    <View>
    <View style={{backgroundColor:'orange'}}>
   <Ques3/>
   <View style={{backgroundColor:'white',opacity:.99}}><View >
  
    <Button title="Next"
   onPress={()=>alert('Thank You For Your Time !! 😊')}/>
    
  
  </View></View>
  </View>
  <Text  style={{fontSize:35, textAlign:'center',fontWeight:'700',color:'#ff6666',paddingTop:20}}>THANK YOU !! 🙏 </Text>
  </View>
  );
}