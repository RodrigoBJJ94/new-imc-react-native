import { StyleSheet } from "react-native";

export default StyleSheet.create({
    standardView: {
        flexDirection: "row",
        justifyContent: "center",
        height: "25%",
    },
    smallView: {
        backgroundColor: "#9e9e9e",
        margin: 15,
        marginRight: 18,
        marginLeft: 18,
        width: "40%",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    roundButtons: {
        backgroundColor: "#7e7e7e",
        borderRadius: 28,
        width: 56,
        height: 56,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 5,
        marginRight: 5,
    }
});
