import React from 'react'

// pacote responsavel pela navegacao das telas
import {createStackNavigator} from '@react-navigation/stack'
//navigationContainer = BroserNavigation
import {NavigationContainer} from '@react-navigation/native'


//paginas nas rotas
import Incidents from './pages/Incidents'
import Details from './pages/Details'

const Appstack = createStackNavigator()

function Routes(){
    return(
        <NavigationContainer>
            <Appstack.Navigator screenOptions={{headerShown:false}}>
                <Appstack.Screen name="inicidents" component={Incidents}/>
                <Appstack.Screen name="details" component={Details}/>

            </Appstack.Navigator>

        </NavigationContainer>
    )
}

export default Routes



