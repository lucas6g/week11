import {StyleSheet} from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({

    container:{
        flex:1, //para ocupar o tamanho inteiro da tela 
        paddingHorizontal: 24,
        paddingTop:Constants.statusBarHeight +20,
    },
    header:{
        //flex direction row pq no reac native o padrao e collun
        flexDirection:'row',
        justifyContent:'space-between',//alinha horizontalmente
        alignItems:'center',//alinha verticalmente
    },
      caso:{
        padding:20,
        borderRadius:8,
        backgroundColor:'#fff',
        marginBottom:16,
        marginTop:35
    
       },
       propriedadeDoCaso:{
           fontSize:14,
           color:'#41414d',
           fontWeight:'bold'
    
       },
      valorCaso:{
          marginTop:8,
           fontSize:15,
           marginBottom:24,
           color:'#737380'
       },

       caixaContato:{
        padding:10,
        borderRadius:8,
        backgroundColor:'#fff',
        marginBottom:16,
       },
       heroTitle:{
           fontWeight:'bold',
           fontSize:20,
           color:'#13131a',
           lineHeight:30,

       },
       heroDescription:{
           fontSize:15,
           color:'#737380',
           marginTop:16,

       },
       actions:{
            marginTop:16,
            flexDirection:'row',
            justifyContent:'space-between'
       },
       btnAjude:{
           backgroundColor:'#e02041',
           borderRadius:8,
            height:50,
            width:'48%',
            justifyContent:'center',
            alignItems:'center'
        },
        actionsText:{
            color:'#fff',
            fontSize:15,
            fontWeight:'bold'
        },  
       



})