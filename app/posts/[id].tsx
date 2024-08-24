import {View, Text, StyleSheet} from "react-native";
import React, {useEffect} from "react";
import {useLocalSearchParams, useNavigation} from "expo-router";

export default function postPage() {
    const params = useLocalSearchParams();
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTitle: params.id,
        })
    }, [])

    return (
        <View>
            <Text>qwe</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
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