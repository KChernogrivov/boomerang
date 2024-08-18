import {Text, View} from "react-native";
import { StatusBar } from 'expo-status-bar';
import {Link} from "expo-router";

export default function PostCard() {
    return (
        <View>
            <Link
                href={{
                    pathname: '/post/[id]',
                    params: { id: 'bacon' }
                }}>
                View post
            </Link>
        </View>
    )
}