import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const ListItem = ({item, deleteItem}) => {
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text style={styles.listItemText}>
                    {item.text}
                </Text>
                <Text onPress={() => deleteItem(item.id)}
                    style={{ fontSize: 30, padding: 0 }}
                >
                    X
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default ListItem

const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth : 1,
        borderColor: '#eee'
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listItemText: {
        fontSize: 18,
    }

})
