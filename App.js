import React, { useState } from 'react'
import { StyleSheet, View, FlatList, Alert } from 'react-native'
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [items, setItems] = useState([
    { id: uuidv4(), text: 'Milk' },
    { id: uuidv4(), text: 'Eggs' },
    { id: uuidv4(), text: 'Bread' },
    { id: uuidv4(), text: 'Juice' },
  ]);

  const deleteItem = (id) => {
    setItems(prevItmes => {
      return prevItmes.filter(item => item.id != id);
    });
  }

  // const addItem = (item) => {
  //   setItems(prevItmes => {
  //     return [{ id: uuidv4(), text: item } , ...prevItems]
  //   });
  // }
  // item 말고 text로 하면, id: uuidv4(), text: text로 할 필요 없음.


  // AddItem에서 쓰이는 addItem 구절
  const addItem = (text) => {
    if(!text) {
      Alert.alert('Error', 'Please enter an item', [{ text: "OK", onPress: () => console.log("OK Pressed")}], { cancelable: true })
    } else {
      setItems(prevItems => {
        return [{ id: uuidv4(), text } , ...prevItems]
      });
    }
  }

  return (
    <View style={styles.container}>
      <Header title="Good"/>
      <AddItem addItem={addItem}  />
      <FlatList 
        data={items}
        renderItem={({item}) => 
          <ListItem item={item} deleteItem={deleteItem} />
        }
        //<ListItem item={item} />에서 item이 ListItem이랑 엮인 거임
        // <listItem itemz={item} /> 이런 식으로 바꿀경우 ListItem 또한 itemz로 바꿔야함
        // 또한 deleteItemz={deleteItem}로 바꾸면 ListItem에서도 deleteItemz로
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  }
});

export default App
