import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'


// 1. TextInput에 글씨를 적으면
// 2. 그게 onChange로 가고
// 3. 이게 함수자너? 그 적힌 값이 textValue로 돼서 setText(textValue)로 들어가니 그게 text가 됨.
// 4. 그 text가 addItem(text)으로 들어가고
// 5. 위에서 이미 {addItem} 으로 해서 props로 가져왔으니 App.js에 addItem이 실행된다.

const AddItem = ({title, addItem}) => {
    const [text, setText] = useState('');
    const onChange = textValue => setText(textValue);

    return (
        <View>
            <TextInput 
                placeholder="Add Item..." 
                style={styles.input}
                onChangeText={onChange}
                // 리액트네이티브에서는 onChange말고 onChangeText를 써야함
            />
            <TouchableOpacity 
                style={styles.btn} 
                onPress={() => addItem(text)}
            >
                <Text style={styles.btnText}>
                    <Text style={{ fontSize: 20, padding: 0 }}>+</Text>
                    Add Item
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddItem

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16
    },

    btn: {
        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 5,
    },

    btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center'
    },
})
