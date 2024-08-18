import {FlatList, StyleSheet, View} from "react-native";
import PostCard from "@/components/PostCard";
import {useEffect} from "react";

interface Post {
    albumId: string,
    id: number,
    title: string,
    url: string,
}

const posts: Post[] = [];


const fetchPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(json => {
            posts.push(...json)
        });
};

export default function Home() {

    useEffect(() => {
        fetchPosts();
    })

    return (
        <View>
           <FlatList
               style={styles.posts}
            data={posts}
            renderItem={({ item }) => (
                <PostCard title={item.title} id={item.id} location='location' image='asd' />
            )}
           />
        </View>
    )
}

const styles = StyleSheet.create({
    posts: {
        flex: 1,
    }
})