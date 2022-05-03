import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Icons from "react-native-vector-icons/FontAwesome5";
import Styles from "./Styles";

export default function Header({ navigation }) {
    return (
        <View style={Styles.titleView}>
            <TouchableOpacity style={Styles.button}
                onPress={() => navigation.goBack()}>
                <Icons name="arrow-left" color="#fff"
                    size={18} style={Styles.icon} />
                <Text style={Styles.title}>CALCULADORA DE IMC</Text>
            </TouchableOpacity>
        </View>
    );
};
