import React from "react";
import { View, Text } from "react-native";
import Styles from "./Styles";

export default function Main({ title, imc, caption }) {
    return (
        <View style={Styles.mainView}>
            <Text style={Styles.text}>{title}</Text>
            <Text style={Styles.textIMC}>
                {imc !== Infinity ? imc.toFixed(0) : ""}</Text>
            {caption === "Você não está saudável" ?
                <Text style={Styles.textRed}>{caption}</Text> :
                <Text style={Styles.text}>{caption}</Text>}
        </View>
    );
};
