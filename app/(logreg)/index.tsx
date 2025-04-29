import { useEffect, useState } from "react";
import { View, Alert, SafeAreaView,StyleSheet,Text, TextInput, TouchableOpacity} from "react-native";
//import { styles } from "@/css/common_styles";


export default function Test(){
    const [textOut,setText] = useState("")
    const press = () =>{
        console.log(textOut)
    }

    useEffect(()=>{
        console.log(textOut)
    },[textOut])
    
    function testing(){
        setText("ben")
    }
    return (
        <SafeAreaView style={styles.safearea}>
            <View style={styles.body}>
                <View>
                    <Text>Hello World</Text>
                </View>
                <TouchableOpacity onPress={press}>
                    <Text>Betton</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={testing}>
                    <Text>Testing Funciton</Text>
                </TouchableOpacity>
                <TextInput style={styles.input} onChangeText={setText}></TextInput>
            </View>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    'body':{
        backgroundColor:'red',
    },
    'safearea':{
        flex:1,
        backgroundColor:'azure',
    },
    'input':{
        backgroundColor:'white',
        width:"50%",
        marginHorizontal:'auto',
        padding:10,
        borderCurve:"circular",
    }
})