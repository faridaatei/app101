import React,{component}from 'react'
import {View,Text,Image,StyleSheet }from 'react-ative';

export default class App extends Component  {
  render()  {
    let pic ={
      uri: ''
    };
    return  (
      <View style={styles.container }>
          <Text style={ styles.textStyle }>Welcome TO Reactinative</Text>
          <Image source = {pic}style={{width: 150,height: 150}}/>
      </View>

      );
  } 
} 

const styles = Stylesheet.created({
  Imagestyle: {
    width: 150,
    height: 150,
  },
  container: {
    alignments:'center'
    }
  },
  textStyle: {
    color:'red',
    fontSize:30
  }
})

      
 