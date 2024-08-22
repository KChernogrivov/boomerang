import {View, StyleSheet, Text, TextInput, Pressable} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import React from "react";
import {Colors} from "@/constants/Colors";

export default function headerHome() {
    const [value, onChangeText] = React.useState('');

    return (
        <View style={styles.header}>
            <View style={styles.search}>
                <View style={styles.searchBar}>
                    <Ionicons style={styles.searchBarIcon} name="search" size={18}/>
                    <TextInput style={styles.searchBarInput} inputMode='search' placeholder="Поиск"
                               onChangeText={text => onChangeText(text)}
                               value={value} placeholderTextColor={"f4f4f4"}
                    />
                </View>
                <Pressable onPress={() => {
                    onChangeText('')
                }}>
                    <Text style={styles.searchClear}>Очистить</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 50,
        padding: 10,
        backgroundColor: 'black',
    },
    search: {
        flexDirection: "row",
        alignItems: 'center',
        gap: 10,
    },
    searchBar: {
        flex: 1,
        flexDirection: "row",
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    searchBarIcon: {
        marginRight: 10,
    },
    searchBarInput: {
        flex: 1,
        padding: 5,
    },
    searchClear: {
        color: '#fff',
    }
})
