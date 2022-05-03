import React, { useState, useEffect } from "react";
import { View  } from "react-native";
import FocusStatusBar from "../../../components/Statusbar.js/Statusbar";
import Styles from "./Styles";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Calculate from "../Calculate/Calculate";

export default function Result({ navigation, route }) {
    weight = route.params?.weight;
    height = route.params?.height;

    const [title, setTitle] = useState("");
    const [caption, setCaption] = useState("");
    const imc = weight / (height * height) * 10000;

    useEffect(() => {
        if (imc < 17) {
            setTitle('Muito abaixo do peso');
        } else if (imc >= 17 && imc < 18.5) {
            setTitle('Ligeiramente abaixo do peso');
        } else if (imc >= 18.5 && imc < 25) {
            setTitle('Peso normal');
        } else if (imc >= 25 && imc < 30) {
            setTitle('Ligeiramente acima do peso');
        } else if (imc >= 30 && imc < 35) {
            setTitle('Obesidade');
        } else if (imc >= 35 && imc < 40) {
            setTitle('Obesidade severa');
        } else if (imc === Infinity) {
            setTitle('');
        } else {
            setTitle('Obesidade mórbida');
        };
    }, [imc]);

    useEffect(() => {
        if (imc >= 17 && imc < 30) {
            setCaption('Você está saudável');
        } else if (imc === Infinity) {
            setCaption('');
        } else {
            setCaption('Você não está saudável');
        }
    }, [imc]);

    return (
        <View style={Styles.viewResult}>
            <FocusStatusBar backgroundColor="#313131" barStyle="dark-content" />
            <Header navigation={navigation} />
            <Main title={title} imc={imc} caption={caption} />
            <Calculate navigation={navigation} />
        </View>
    );
};
