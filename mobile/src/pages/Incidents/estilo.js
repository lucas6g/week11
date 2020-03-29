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
   headerText:{
       fontSize:15,
       color:'#737380',
   } ,
   headerTextBold:{
       fontWeight:'bold',
   },
   title:{
    fontSize:30,
    marginBottom:16,
    marginTop:48,
    color:'#13131a',
    fontWeight:'bold'
   },
   description:{
       fontSize:16,
       lineHeight:24,
       color:'#737380'
   },

   listaDeCasos:{
      marginTop:32,
   },
   caso:{
    padding:24,
    borderRadius:8,
    backgroundColor:'#fff',
    marginBottom:16,

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
   btnDetalhes:{
       flexDirection:'row',
       justifyContent:'space-between',
       borderWidth:1,
       borderColor:'#e02041',
       padding:20
   },
   verMais:{
       color:'#e02041',
       fontSize:15,
       fontWeight:'bold'
   }

   







})
