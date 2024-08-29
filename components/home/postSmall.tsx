import {View, StyleSheet, Image, Text, Pressable} from "react-native";
import React from "react";
import {useRouter} from "expo-router";

export default function PostSmall({id = 1, image = ''}) {
    const router = useRouter();

    return (
        <View style={styles.card}>
            <Pressable
                onPress={() => router.push(`/posts/${id}`)}
            >
                <Image style={styles.image} source={require('../../assets/images/mock.jpg')}/>
                <Text style={styles.title}>Бла бла блаб лабалал</Text>
                <Text>Дата бла бла</Text>
            </Pressable>
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
        aspectRatio: 4 / 3,
    },
    title: {
        fontSize: 24,
        fontWeight: "600",
    }
})
