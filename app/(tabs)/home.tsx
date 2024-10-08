import {StyleSheet, View} from "react-native";
import HeaderHome from "@/components/home/header-home";
import Posts from "@/components/home/posts";

export default function home() {
    return (
        <View style={styles.home}>
            <HeaderHome />
            <Posts />
        </View>
    )
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
    }
})
