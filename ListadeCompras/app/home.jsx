import { ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

export default function home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require('../assets/background.png')}
        style={{flex: 1, justifyContent: 'flex-start'}}
        resizeMode='repeat'
      >
        <View style={styles.header}>
          <Text style={styles.title}>Lista de Produtos</Text>
          <Ionicons name="trash" size={32} color="#fff" />
        </View>   

        <View styke={{ flex: 1}}></View>

        <View style={styles.footer}>
          <View style={styles.inputContainer}>
            <TextInput color="#fff" fontSize={10}/>
          </View>
          <TouchableOpacity style={styles.iconContainer}>
            <Ionicons name='add' size={36} color='#fff'/>
          </TouchableOpacity>
        </View>

      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    header:{
      padding:25,
      paddingTop: 50,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#000000c0',
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
    },
    title: {
      color: '#fff',
      fontSize: 26,
      fontWeight: 'bold'
    },
    footer: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      backgroundColor: '#000000c0',
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
    },
    inputContainer :{
      backgroundColor: '#000',
      elevation: 40,
      flex: 1,
      height: 50,
      marginVertical: 20,
      borderRadius: 30,
      paddingHorizontal: 20,
      justifyContent: 'center',
    },
    iconContainer :{
      height: 50,
      width: 50,
      backgroundColor: '#000',
      borderRadius: 25,
      elevation: 40,
      justifyContent: 'center',
      alignItems: 'center'
    }
})