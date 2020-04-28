import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

/*
TODO: article html elementleri ile gelince icindekileri
React native'e ceviren bir fonksiyon yazilabilir
*/

export default function App() {

  const [firstbuttPressed, setfirstbuttPressed] = useState(false)
  const [secondbuttPressed, setsecondbuttPressed] = useState(false)

  let d = new Date();
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  let date = `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}` 

  return (
    <View style={styles.body}>
      <View style={styles.padding}></View>
      <View style={styles.main}>
        
        <View style={styles.date}>
          <Text>{date}</Text>
        </View>
        
        <View style={styles.buttons}>
          
          <View style={styles.button}>
            <Button style={styles.button} title='Mehmet Yilmaz' disabled={firstbuttPressed} onPress={() => {
              setfirstbuttPressed(true);
              setTimeout(() => {setfirstbuttPressed(false);}, 1000);
            }}/>
          </View>
          
          <View style={styles.button}>
            <Button style={styles.button} title='Murat Belge'disabled={secondbuttPressed} onPress={() => {
              setsecondbuttPressed(true);
              setTimeout(() => {setsecondbuttPressed(false);}, 1000);
            }}/>  
          </View>
          
          <View style={styles.button}>
            <Button style={styles.button} title='Murat Belge'disabled={secondbuttPressed} onPress={() => {
              setsecondbuttPressed(true);
              setTimeout(() => {setsecondbuttPressed(false);}, 1000);
            }}/>
          </View>
        </View>
        
        <View style={styles.article}>
          <ScrollView>
            <Text>This is scroll</Text>
          </ScrollView>
        </View>
      
      </View>
      <View style={styles.padding}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'row',
  },
  padding: {
    flex: 1,
    backgroundColor: 'red',
  },
  main: {
    flex: 15,
    backgroundColor: '#fff',
    alignItems: 'stretch',
  },
  date: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'pink',
  },
  buttons: {
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: "flex-start",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: 'green',
  },
  button: {
    margin: 5,
  },
  article: {
    flex: 10,
  }
});
