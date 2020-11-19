

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.cerceve}>
     <Text style={styles.yazi}>Hesap Oluştur</Text>
        <TextInput style={styles.yazibilgi} placeholder="Kullanıcı Adı" 
        underlineColorAndroid={'transparent'} />
        <TextInput style={styles.yazibilgi} placeholder="E-mail" />
        <TextInput style={styles.yazibilgi} placeholder="Şifre" 
        secureTextEntry={true}/>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btntext}>Oluştur</Text>


        </TouchableOpacity>


     </View>
   
    </>
  );
};

const styles = StyleSheet.create({
  cerceve:{
    alignSelf:'stretch',
    flex:1,
    backgroundColor:'#CCCC00',
    alignItems:'center',
    justifyContent:'center',
    paddingLeft:60,
    paddingRight:60,



  },
  yazi:{
    color:'#FF6600',
    fontSize:24,
    paddingBottom:10,
    marginBottom:40,
    borderBottomColor:'#199187',
    borderBottomWidth:1,
  },
  yazibilgi:{
    color:'#FF6600',
    fontSize:15,
    alignSelf:'stretch',
    height:40,
    marginBottom:30,
    borderBottomWidth:1,
    borderBottomColor:'#f8f8f8'
  },
  button:{
  alignSelf:'stretch',
  alignItems:'center',
  padding:20,
  backgroundColor:'#9966FF',
  marginTop:30,
  }
});

export default App;
