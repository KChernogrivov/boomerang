import {FlatList, StyleSheet, View, Text, ActivityIndicator, useColorScheme} from "react-native";
import PostCard from "@/components/PostCard";
import React, {useEffect} from "react";
import {Colors} from "@/constants/Colors";

export default function Posts() {
    const [isLoading, setIsLoading] = React.useState(false);
    const [items, setItems] = React.useState<any[]>([]);


    const fetchPosts = () => {
        setIsLoading(true);
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json())
            .then(json => {
                setItems(json);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    useEffect(() => {
        fetchPosts();
    }, [])

    if (isLoading) {
        return (
            <View>
                <ActivityIndicator size='large'/>
            </View>
        )
    }

    return (
        <View style={styles.posts}>
            <FlatList
                data={items}
                numColumns={2}
                contentContainerStyle={styles.post}
                columnWrapperStyle={styles.post}
                renderItem={({item}) => (
                    <PostCard title={item.title} id={1} location='location' image='https://via.placeholder.com/150/92c952'/>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    posts: {
        padding: 10,
        flex: 1,
        backgroundColor: Colors[useColorScheme() ?? 'light'].background,
    },
    post: {
        gap: 20,
    }
})