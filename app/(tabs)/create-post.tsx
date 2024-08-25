import {View, Text, StyleSheet} from "react-native";
import {Dropdown} from 'react-native-element-dropdown';
import {useState} from "react";

const data = [
    {label: 'Item 1', value: '1'},
    {label: 'Item 2', value: '2'},
    {label: 'Item 3', value: '3'},
    {label: 'Item 4', value: '4'},
    {label: 'Item 5', value: '5'},
    {label: 'Item 6', value: '6'},
    {label: 'Item 7', value: '7'},
    {label: 'Item 8', value: '8'},
];

export default function createPost() {
    const [value, setValue] = useState('');

    return (
        <View style={styles.card}>
            <Text style={styles.title}>Добавить объявление</Text>
            <View>
                <Text>Тип объявления</Text>
                <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    data={data}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Select item"
                    searchPlaceholder="Search..."
                    value={value}
                    onChange={item => {
                        setValue(item.value);
                    }}
                />
            </View>
            <View>
                <Text>Категория объявления</Text>
                <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    data={data}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Категория"
                    searchPlaceholder="Поиск"
                    value={value}
                    onChange={item => {
                        setValue(item.value);
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: "600",
    },
    dropdown: {
        margin: 16,
        height: 50,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
    },
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
})