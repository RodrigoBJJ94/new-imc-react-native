import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Icons from "react-native-vector-icons/FontAwesome5";
import Styles from "./Styles";
import StylesStandard from "../WeightAge/Styles";

export default function Gender({ color, setColor }) {
    return (
        <View style={StylesStandard.standardView}>
            <View style={color === true ? Styles.cardActive : Styles.cardInactive}>
                <TouchableOpacity style={Styles.genderButton}
                    onPress={() => setColor(!color)}>
                    <Icons name="mars" color="#0084c4" size={110} />
                    <Text style={Styles.sizes}>MASCULINO</Text>
                </TouchableOpacity>
            </View>
            <View style={color !== true ? Styles.cardActive : Styles.cardInactive}>
                <TouchableOpacity style={Styles.genderButton}
                    onPress={() => setColor(!color)}>
                    <Icons name="venus" color="#ff0f9b" size={110} />
                    <Text style={Styles.sizes}>FEMININO</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
