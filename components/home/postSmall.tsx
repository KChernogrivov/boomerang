import {View, StyleSheet, Image, Text} from "react-native";
import React from "react";

export default function PostSmall() {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={require('../../assets/images/mock.jpg')} />
            <Text style={styles.title}>Бла бла блаб лабалал</Text>
            <Text>Дата бла бла</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        overflow: "hidden",
    },
    image: {
        width: 'auto',
        flex: 1,
        borderRadius: 10,
        height: 130,
    },
    title: {
        fontSize: 24,
        fontWeight: "600",
    }
})
