import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Styles from "./Styles";

export default function Calculate({ navigation }) {
    return (
        <TouchableOpacity style={Styles.recalculate}
            onPress={() => navigation.goBack()}>
            <Text style={Styles.textRecalculate}>RECALCULAR</Text>
        </TouchableOpacity>
    );
};
