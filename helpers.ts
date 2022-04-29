import { Alert } from 'react-native-web'
import {API_URL} from './Config'

export async function fetchPublishableKey(){
    try{
        const response = await fetch(`${API_URL}/config`)
        const {PublishableKey} = await response.json()
        return PublishableKey
    } catch(e){
        console.log(e)
        console.warn('Unable to fetch publishable key. Is you server running?')
        Alert.alert('Error','Unable to fetch publishable key. Is you server running?')
    }
}