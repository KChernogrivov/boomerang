import {Stack} from "expo-router";
import {StatusBar} from "expo-status-bar";

export default function _layout() {
    return (
        <Stack screenOptions={{
            headerShown: false,
        }}
        >
            <Stack.Screen name="(tabs)" />
        </Stack>
    )
}