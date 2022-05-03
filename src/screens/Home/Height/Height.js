import React from "react";
import { View, Text } from "react-native";
import Slider from "@react-native-community/slider";
import Styles from "./Styles";

export default function Height({ height, setHeight }) {
    return (
        <View style={Styles.heightView}>
            <Text style={Styles.sizes}>ALTURA</Text>
            <View style={Styles.sizesDirection}>
                <Text style={Styles.sizesValue}>{height}</Text>
                <Text style={Styles.heightCm}>cm</Text>
            </View>
            <Slider style={Styles.slider} minimumValue={120} maximumValue={220}
                minimumTrackTintColor="#0084c4" thumbTintColor="#0084c4"
                onValueChange={(newValue) => setHeight(newValue.toFixed(0))} />
        </View>
    );
};
