import { StyleSheet, TextInput, View,ImageBackground,ScrollView, Image,TouchableOpacity, Text } from 'react-native';
import { BASE_URL } from '../api/url';
import { useEffect, useState } from 'react';
import axios from 'axios'


export default function App({props, route}) {


    const image= {uri: "https://img.freepik.com/foto-gratis/equipaje-amarillo-plano-espacio-copia_23-2148786124.jpg?w=826&t=st=1670538613~exp=1670539213~hmac=33ca10425840e7c992f10488f22740a3f4802616e952e2bbafcbc9baaa5314cc"}
    
      let [data, setData] = useState([])
      const {id} = route.params
  

      useEffect(()=>{
        axios.get(`${BASE_URL}/api/hotels/${id}`)
        .then(res=> setData( res.data.response))
        .catch(err=> console.log( err))
    },[id])


  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.homeContainer}>
    
        <ScrollView >
        <View style={{height: '100%'}}>
        {
            data.map((datah)=>
                 (
                    <View  style={styles.hotelCard} >
                    <Text style={styles.hotelcardTitle}>{datah.name}</Text>
                    <Image style={styles.hotelcardImg} source={{uri: datah.photo}}></Image>
                    <Text style={styles.hotelcardTitle}>Capacity: {datah.capacity} guests</Text>
            </View>
                ) )
        }
        {
            data.map((datah)=>
                 (
                    <View  style={styles.hotelCard} >
                    <Text style={styles.hotelcardTitle}>{datah.name}</Text>
                    <Image style={styles.hotelcardImg} source={{uri: datah.photo}}></Image>
                    <Text style={styles.hotelcardTitle}>Capacity: {datah.capacity} guests</Text>
            </View>
                ) )
        }
        </View>
        </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 70,
    },
    hotelCard: {
        flex: 1,
        flexDirection: "column",
        height: 500,
        justifyContent: "center",
        alignItems: 'center',
        padding: 8,
        margin: 8,
        backgroundColor: 'white',
        shadowColor: "black",
        borderRadius: 25,
    },
    hotelcardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    hotelcardImg: {
        objectFit: 'cover',
        height: 377,
        width: 300,
    },
});
