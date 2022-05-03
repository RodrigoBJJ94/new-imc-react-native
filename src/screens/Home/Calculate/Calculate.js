import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Styles from "../../Result/Calculate/Styles";

export default function Calculate({ navigation, weight, height }) {
    return (
        <TouchableOpacity style={Styles.recalculate}
            onPress={() => navigation.navigate("Result", {
                weight: weight, height: height,
            })}>
            <Text style={Styles.textRecalculate}>CALCULAR</Text>
        </TouchableOpacity>
    );
};
