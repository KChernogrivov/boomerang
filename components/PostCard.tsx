import {StyleSheet, View, Image, Text, Pressable, useColorScheme} from 'react-native';
import {router} from "expo-router";
import {Colors} from "@/constants/Colors";

export default function PostCard({title = '', image = '', location = '', id = 0}) {
    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => router.push({
                    pathname: `/post/[id]`,
                    params: {id}
                })}
            >
                <Image
                    style={styles.image}
                    source={{uri: image}}
                ></Image>
                <View style={styles.textBlock}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.location}>{location}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderStyle: "solid",
        borderColor: "#000",
        borderRadius: 10,
        overflow: "hidden",
        flex: 1,
    },
    image: {
        height: 150,
    },
    textBlock: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    title: {
        color: Colors[useColorScheme() ?? 'light'].text,
        fontSize: 24,
    },
    location: {
        color: Colors[useColorScheme() ?? 'light'].tint,
    },
})