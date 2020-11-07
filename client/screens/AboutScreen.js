import React from 'react';
import {StyleSheet,View,Text,Image} from 'react-native';

import AnimationTypingText from '../components/AnimationTypingText';

const AboutScreen=()=>{
    return(
<View style={styles.container}>
<View style={styles.center}>
    <Image source={require('../assets/images/logo.png')} style={styles.image}/>
    <Text style={styles.text}>Nyumba</Text>
    <View>
    <AnimationTypingText
          text="Welcome to Nyumba app.We are a property listing agency.Hurry!Check your next home from here!"
        />
    </View>
</View>

</View>
    );
}

const styles=StyleSheet.create({
container:{
flex:1,    
backgroundColor:'blue',
justifyContent:"center",
padding:80,
},
center:{

    backgroundColor:'white',
    alignItems:"center",
    justifyContent:"center",  
},
image:{
   marginTop:1 
},
text:{
    fontSize:30
}
});

export default AboutScreen;