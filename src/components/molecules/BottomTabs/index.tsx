import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

type IconProps = {
    label?: string,
    focus?: boolean
}

const Icon = ({ label, focus }: IconProps) => {
    switch (label) {
        case 'Home':
            return focus ? <Ionicons name="home" size={32} color="black" /> :
                <Ionicons name="home-outline" size={32} color="black" />

        case 'FavoriteScreen':
            return focus ? <MaterialIcons name="favorite" size={32} color="black" /> :
                <MaterialIcons name="favorite-border" size={32} color="black" />

        case 'CartScreen':
            return focus ? <Ionicons name="cart-sharp" size={32} color="black" /> :
                <Ionicons name="cart-outline" size={32} color="black" />

        case 'SettingScreen':
            return focus ? <Ionicons name="settings" size={32} color="black" /> :
                <Ionicons name="settings-outline" size={32} color="black" />
    }

    return <Ionicons name="home" size={24} color="black" />

}


const BottomTabs = ({ state, descriptors, navigation }: any) => {
    return (
        <View style={{ flexDirection: 'row', backgroundColor : 'white' , paddingVertical : 20, paddingHorizontal : 50 , justifyContent : 'space-between' }}>
            {state.routes.map((route: any, index: number) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                    >
                        <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                            <Icon label={label} focus={isFocused} />
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    )
}

export default BottomTabs

const styles = StyleSheet.create({})