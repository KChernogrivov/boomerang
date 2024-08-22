import {Tabs} from "expo-router";
import {Ionicons} from "@expo/vector-icons";

export default function _layout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
        }}>
            <Tabs.Screen name="create-post" options={{
                tabBarLabel: "Разместить",
                tabBarIcon: ({color}) => <Ionicons name="add-circle" size={24} color={color}/>,
            }} />
            <Tabs.Screen name="home" options={{
                tabBarLabel: "Главная",
                tabBarIcon: ({color}) => <Ionicons name="home" size={24} color={color}/>,
            }} />
            <Tabs.Screen name="profile" options={{
                tabBarLabel: "Профиль",
                tabBarIcon: ({color}) => <Ionicons name="person-circle" size={24} color={color}/>,
            }} />
        </Tabs>
    )
}