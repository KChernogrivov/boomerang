import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import {router} from "expo-router";

export default function PostCard({title = '', image = '', location = '', id = 0}) {
    return (
        <TouchableOpacity
            onPress={() => router.push({
                pathname: `/post/[id]`,
                params: {id}
            })}
        >
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{uri: image}}
                ></Image>
                <Text style={styles.title}>Title</Text>
                <Text style={styles.location}>location</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    image: {},
    title: {},
    location: {}
})