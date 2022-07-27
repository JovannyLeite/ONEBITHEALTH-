import react from "react"
import { View, Text, TouchableOpacity, Share } from "react-native"
import styles from "./style"

export default function ResultImc(props){

const onShare = async () =>{
    const result = await Share.share({
        message: "Meu imc hoje é: " + props.resultImc,
    })
}

    return(
        <View style={styles.contextImc}>
            <View style={styles.boxSharebutton}>
            <Text style={styles.information}>{props.messageResultImc}</Text>
            <Text style={styles.titleResultImc}>{props.resultImc}</Text>
                <TouchableOpacity 
                onPress={onShare}
                style={styles.shared}>
                    <Text style={styles.sharedText}>Shared</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}