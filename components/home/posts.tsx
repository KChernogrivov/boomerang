import {View, StyleSheet, Text, TextInput, Pressable, FlatList} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import React from "react";
import PostSmall from "@/components/home/postSmall";

export default function posts() {
    const data = [{}, {}];

    return (
        <View style={styles.main}>
            <Text style={styles.title}>Доска объявлений</Text>
            <FlatList style={styles.posts} data={data} renderItem={({item}) => <PostSmall/>} numColumns={2}
                      contentContainerStyle={{gap: 20}}
                      columnWrapperStyle={{gap: 20}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        padding: 20,
        flex: 1,
    },
    title: {
        paddingBottom: 10,
        fontSize: 24,
        fontWeight: "600",
    },
    posts: {
        gap: 20,
    }
})
