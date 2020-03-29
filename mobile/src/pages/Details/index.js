import React from 'react'
import {Text,View,Image,TouchableOpacity,Linking} from 'react-native'
import {Feather} from '@expo/vector-icons'
import estilos from './estilo'
import logoImg from '../../assets/logo.png'
import {useNavigation,useRoute} from '@react-navigation/native'

import * as MailComposer from 'expo-mail-composer'


//para abrir qualquer app meu 



function Details(){

    const navigation = useNavigation()
    const route = useRoute()

    const mensagem ='Ola meu ong estou entrando em contato sobre o caso da Cadela atropelada '

    const caso = route.params.caso
    function navigateBack(){
        navigation.goBack()
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject:`Herooi do caso , ${caso.title}`,
            recipients:['lucas.trabalho1533@gmail.com'], //pra onde o email vai ser enviado
            body :mensagem
        })
    }
    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=11981694688text=${mensagem}`)
    }


    return(
        <View style={estilos.container}>
             <View style={estilos.header}>
                    <Image source={logoImg}/>
                    
                    <TouchableOpacity  onPress={navigateBack} style={estilos.btnDetalhes}>
                                    <Feather name="arrow-left" size={28} color="#E02041"/>
                    </TouchableOpacity>

              </View>

              <View style={estilos.caso}>
                    <Text style={estilos.propriedadeDoCaso}>ONG:</Text>
    <Text style={estilos.valorCaso}>{caso.ong.name} de  {caso.ong.city}/{caso.ong.uf}</Text>

                    <Text style={estilos.propriedadeDoCaso}>CASO:</Text>
                    <Text style={estilos.valorCaso}>{caso.description}</Text>

                    <Text style={estilos.propriedadeDoCaso}>VALOR: </Text>
                    <Text style={estilos.valorCaso}>{Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(caso.value)}</Text>
                
              
            </View>

            {/* caixa do contato */}
            <View style={estilos.caixaContato}>
                <Text style={estilos.heroTitle}>Salve o dia</Text>
                <Text style={estilos.heroTitle}>Seja o Heroi desse caso</Text>

                <Text style={estilos.heroDescription}>Entre em Contato:</Text>

                {/* container dos botoes */}
                <View style={estilos.actions}>
                    <TouchableOpacity  onPress={sendWhatsapp} style={estilos.btnAjude}>
                        <Text style={estilos.actionsText}>Whatsapp </Text>
                     
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={sendMail} style={estilos.btnAjude}>
                        <Text style={estilos.actionsText}>Email </Text>
                     
                    </TouchableOpacity>

                </View>

            </View>

        </View>
    )

} 


export default Details