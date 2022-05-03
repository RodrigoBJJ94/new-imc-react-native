import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Icons from "react-native-vector-icons/FontAwesome5";
import Styles from "./Styles";
import StylesStandard from "../Height/Styles";

export default function WeightAge({ weight, setWeight, age, setAge }) {
    function decrementAge() {
        if (age <= 0) return;
        else {
            setAge(age - 1);
        };
    };

    function decrementWeight() {
        if (weight <= 0) return;
        else {
            setWeight(weight - 1);
        };
    };

    return (
        <View style={Styles.standardView}>
            <View style={Styles.smallView}>
                <Text style={StylesStandard.sizes}>PESO</Text>
                <Text style={StylesStandard.sizesValue}>{weight}</Text>
                <View style={StylesStandard.sizesDirection}>
                    <TouchableOpacity style={Styles.roundButtons}
                        onPress={() => decrementWeight()}>
                        <Icons name="minus" color="#fff" size={25} />
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.roundButtons}
                        onPress={() => setWeight(weight + 1)}>
                        <Icons name="plus" color="#fff" size={25} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={Styles.smallView}>
                <Text style={StylesStandard.sizes}>IDADE</Text>
                <Text style={StylesStandard.sizesValue}>{age}</Text>
                <View style={StylesStandard.sizesDirection}>
                    <TouchableOpacity style={Styles.roundButtons}
                        onPress={() => decrementAge()}>
                        <Icons name="minus" color="#fff" size={25} />
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.roundButtons}
                        onPress={() => setAge(age + 1)}>
                        <Icons name="plus" color="#fff" size={25} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
