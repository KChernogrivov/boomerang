import {Tabs} from "expo-router";
import {FontAwesome, Ionicons} from "@expo/vector-icons";

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="post" options={{
                headerTitle: 'Разместить',
                title: 'Разместить',
                tabBarIcon: ({color, focused}) => <Ionicons size={28}
                                                            name={focused ? 'add-circle' : 'add-circle-outline'}
                                                            color={color}/>,
            }}/>
            <Tabs.Screen name="index" options={{
                headerTitle: 'Главная',
                title: 'Главная',
                tabBarIcon: ({color, focused}) => <Ionicons size={28} name={focused ? 'home' : 'home-outline'}
                                                            color={color}/>,
            }}/>
            <Tabs.Screen name="user/index" options={{
                headerTitle: 'Профиль',
                title: 'Профиль',
                tabBarIcon: ({color, focused}) =>
                    <FontAwesome size={28} name={focused ? 'user' : 'user-o'} color={color}/>,
            }}/>
        </Tabs>
    )
}
