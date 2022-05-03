import React from "react";
import { View, Text } from "react-native";
import Styles from "./Styles";

export default function Header() {
    return (
        <View style={Styles.titleView}>
            <Text style={Styles.title}>CALCULADORA DE IMC</Text>
        </View>
    );
};
