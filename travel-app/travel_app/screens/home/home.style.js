import { StyleSheet } from "react-native";
import styles from "../../components/Onboard/slides.style";
import { COLORS } from "../../constants/theme";

const reusable =StyleSheet.create({
    box: {
        backgroundColor:COLORS.white,
        width:40,
        height:40,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:12


    }
})

export default styles