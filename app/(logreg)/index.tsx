import { useState } from "react";
import { View, Alert, SafeAreaView,StyleSheet,Text, TextInput, TouchableOpacity} from "react-native";
//import { styles } from "@/css/common_styles";


export default function Test(){
    const [textOut,setText] = useState("")
    const press = () =>{
        Alert.alert(textOut)
    }

    return (
        <SafeAreaView style={styles.safeariea}>
            <View>
                <Text>Hello World</Text>
            </View>
            
            <TouchableOpacity onPress={press}>
                <Text>Betton</Text>
            </TouchableOpacity>
            <TextInput style={styles.input} onChangeText={setText}></TextInput>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    'safeariea':{
        backgroundColor:'red',
    },
    'input':{
        backgroundColor:'white',
        width:"50%",
        marginHorizontal:'auto',
        padding:10,
        borderCurve:"circular",
    }
})