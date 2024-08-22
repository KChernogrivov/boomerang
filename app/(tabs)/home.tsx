import {StyleSheet, View} from "react-native";
import HeaderHome from "@/components/home/header-home";

export default function home() {
    return (
        <View style={styles.home}>
            <HeaderHome />
        </View>
    )
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
    }
})
