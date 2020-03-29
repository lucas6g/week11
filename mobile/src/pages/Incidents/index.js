import React ,{useEffect,useState}from 'react'
import {View,FlatList,Text,Image,TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {Feather} from '@expo/vector-icons'
import logoImg from '../../assets/logo.png'
import estilo from './estilo'

//axios para fazer requisiçoes http
import api from '../../Services/api'


function Incidents(){

    const [casos,setCasos] = useState([]) 
    const [total,setTotal] = useState(0)
    const navigation = useNavigation()

    function navegarVerMaisDetalhes(caso){
        navigation.navigate('details',{caso})
    }

    async function carregaCasos(){
        const resposta  = await api.get('/insidents/mobile')


        setCasos(resposta.data)
        setTotal(resposta.headers['x-total-count'])
    }


    useEffect( ()=>{
       carregaCasos()
       
    },[])

    return(
        // View funciona como um container
        <View style={estilo.container}>
            <View style={estilo.header}>
                <Image source={logoImg}/>
                    <Text style={estilo.headerText}>
                            Total de <Text style={estilo.headerTextBold}>{total} casos</Text>
                    </Text>
            </View>
            <Text style={estilo.title}>Bem-vindo!</Text>
            <Text style={estilo.description}>Escolha um dos casos abaixo e salve vidas</Text>
            
            {/* sempre quando tiver uma lista colocar dentro do flat lis para poder dar scroll */}
            <FlatList style={estilo.listaDeCasos}
                data={casos}
                showsVerticalScrollIndicator={false}
                keyExtractor={caso=> caso.id}
                renderItem={({item:caso})=>{return(

             <View style={estilo.caso}>
                    <Text style={estilo.propriedadeDoCaso}>ONG:</Text>
                <Text style={estilo.valorCaso}>{caso.ong.name}</Text>

                    <Text style={estilo.propriedadeDoCaso}>CASO:</Text>
                <Text style={estilo.valorCaso}>{caso.title}</Text>

                    <Text style={estilo.propriedadeDoCaso}>VALOR: </Text>
                    <Text style={estilo.valorCaso}>{Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(caso.value)} </Text>
                
                {/* botao abaixo */}
                    <TouchableOpacity  onPress={()=>{navegarVerMaisDetalhes(caso)}} style={estilo.btnDetalhes}>
                            <Text style={estilo.verMais}>Ver Mais Detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#E02041"/>
                    </TouchableOpacity>
            </View>
            )}}
            />

                {/* Fim container principal da tela */}
        </View>  


    )

}


export default Incidents