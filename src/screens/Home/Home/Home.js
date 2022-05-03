import React, { useState } from "react";
import { View } from "react-native";
import FocusStatusBar from "../../../components/Statusbar.js/Statusbar";
import Header from "../Header/Header";
import Gender from "../Gender/Gender";
import Height from "../Height/Height";
import WeightAge from "../WeightAge/WeightAge";
import Calculate from "../Calculate/Calculate";
import Styles from "./Styles";

export default function Home({ navigation }) {
    const [height, setHeight] = useState(170);
    const [weight, setWeight] = useState(70);
    const [age, setAge] = useState(25);
    const [color, setColor] = useState(true);

    return (
        <View style={Styles.mainView}>
            <FocusStatusBar backgroundColor="#767676" barStyle="light-content" />
            <Header />
            <Gender color={color} setColor={setColor} />
            <Height height={height} setHeight={setHeight} />
            <WeightAge weight={weight} age={age} setWeight={setWeight} setAge={setAge} />
            <Calculate navigation={navigation} height={height} weight={weight} />
        </View>
    );
};
