import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    formContext: {
        flex: 1,
        marginTop:10,
        backgroundColor: "#ffffff",
        alignItems: "center",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingTop: 30,
    },
    form:{
        width: "100%",
    },
    formLabel:{
        color: "#000000",
        fontSize:18,
        paddingLeft:20,
    },
    input: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height:40,
        margin:12,
        paddingLeft:10,
    },
    buttonCalculator:{
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#ff0043",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        margin: 30
    },
    textButtonCalculator:{
        fontSize:20,
        color: "#ffffff",        
    },
    errorMessage:{
        fontSize:12,
        color: "red",
        fontWeight:"bolder",
        paddingLeft:20,
    },
    exhibitionResultImc:{
        width: "100%",
        height:"50%"
    },
    listImcs:{
        marginTop:20,
    },
    resultImcItem:{
        fontSize:26,
        color:"green",
        width:"100%",
        paddingRight:20
    },
    textResultList:{
        fontSize:18, 
        color:"black"      
    }
});

export default styles