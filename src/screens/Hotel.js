import { StyleSheet, TextInput, View,ImageBackground,ScrollView, Image,TouchableOpacity, Text, Button } from 'react-native';
import { BASE_URL } from '../api/url';
import { useEffect, useState } from 'react';
import axios from 'axios'


export default function App({navigate, route}) {


    const image= {uri: "https://img.freepik.com/foto-gratis/equipaje-amarillo-plano-espacio-copia_23-2148786124.jpg?w=826&t=st=1670538613~exp=1670539213~hmac=33ca10425840e7c992f10488f22740a3f4802616e952e2bbafcbc9baaa5314cc"}
    
    let [data, setData] = useState([])
    let [data2, setData2] = useState([])
    let [mostrarOcultar, setMostrarOcultar] = useState(false)

    const {id} = route.params
    let hide = ()=>{
        setMostrarOcultar(!mostrarOcultar)
      }

    useEffect(()=>{
        axios.get(`${BASE_URL}/api/hotels/${id}`)
        .then(res=> setData( res.data.response))
        .catch(err=> console.log( err))

        axios.get(`${BASE_URL}/api/shows?&hotelId=${id}`)
        .then(res=> setData2( res.data.response))
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
                    {/* <TouchableOpacity style={styles.hotelcardButton} onPress={()=> props.navigation.navigate('Shows', {
                                id: datah._id
                            })}>
                                <Text>view more!</Text>
                            </TouchableOpacity> */}
            </View>
                ) )
        }
        {
            data2.map((data2)=>
                 (
                    <View  style={styles.ShowCard} >
                        <Text style={styles.ShowcardTitle}>Show: {data2.name}</Text>
                        <Image style={styles.ShowcardImg} source={{uri: data2.photo}}></Image>
                        <Text style={styles.ShowcardTitle}>Description:  {data2.description}</Text>
                        <Text style={styles.ShowcardTitle}>Price: USD  {data2.price}</Text>
                        <Text style={styles.ShowcardTitle}>Date: {data2.date}</Text>
                        <TouchableOpacity style={styles.ShowButton} onPress={hide} >
                            <Text>Comments</Text>
                        </TouchableOpacity>
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
        paddingVertical: 30
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
        width: 350,
    },
    ShowCard: {
        flex: 1,
        flexDirection: "column",
        minHeight: 620,
        justifyContent: "center",
        alignItems: 'center',
        padding: 8,
        margin: 8,
        backgroundColor: '#999999',
        shadowColor: "black",
        borderRadius: 25,
    },
    ShowcardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#E7C621'
    },
    ShowcardImg: {
        objectFit: 'cover',
        height: 400,
        width: 360,
    },
    ShowButton: {
        textAlign: 'center',
        textTransform: 'uppercase',
        backgroundSize: 200,
        backgroundColor: '#E7C621',
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 1,
        shadowColor: "black",
        paddingVertical: 4,
        paddingHorizontal: 20,
        margin: 10,
        fontStyle: "italic"
    },
});
