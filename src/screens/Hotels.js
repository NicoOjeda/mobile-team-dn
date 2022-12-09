import { StyleSheet, TextInput, View,ImageBackground,ScrollView, Image,TouchableOpacity, Text} from 'react-native';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import hotelsAction from '../redux/actions/hotelsAction';
import {Picker} from '@react-native-picker/picker';



export default function App(props) {


    const image= {uri: "https://img.freepik.com/foto-gratis/equipaje-amarillo-plano-espacio-copia_23-2148786124.jpg?w=826&t=st=1670538613~exp=1670539213~hmac=33ca10425840e7c992f10488f22740a3f4802616e952e2bbafcbc9baaa5314cc"}
    const image2= {uri: 'https://a.cdn-hotels.com/gdcs/production40/d811/5e89ad90-8f10-11e8-b6b0-0242ac110007.jpg?impolicy=fcrop&w=800&h=533&q=medium'}
    const [valueInput, setvalueInput] = useState('')
    const [selectedValue, setSelectedValue]  = useState('')
    let dispatch = useDispatch()
    const hotels = useSelector(state => state.hotelsReducer.listHotels)

    useEffect(()=>{
        if(valueInput === ""){
            dispatch(hotelsAction.getHotels())
        } else {
            let search = {
                name: valueInput,
                order:""
              
            }
            console.log(search);
            dispatch(hotelsAction.getHotelsNameOrder(search))
        }
    },[valueInput])
    


  return (
      <ImageBackground source={image} resizeMode="cover" style={styles.homeContainer}>
        <View >
        <TextInput placeholder='search' style={styles.search} onChangeText={setvalueInput} value={valueInput}/>
            {/* <Picker style={styles.picker}
                selectedValue={selectedValue}
                oonValueChange={(itemValue) => setSelectedValue(itemValue)}>
                <Picker.Item label="order: asc" value="asc" />
                <Picker.Item label="order: dsc" value="dsc" />
            </Picker> */}
        </View>
        <ScrollView >
        {
            hotels.length === 0 ? 
                    (
                    <View className='Hotelscard-empty'>
                        <Text>We didn't found this place. Try other!</Text>
                    </View>
                    ): 
                    (
                    <>
                    {hotels.map(hotel=>(
                        <View  style={styles.hotelCard} >
                            <Text style={styles.hotelcardTitle}>{hotel.name}</Text>
                            <Image style={styles.hotelcardImg} source={{uri: hotel.photo}}></Image>
                            <TouchableOpacity style={styles.hotelcardButton} onPress={()=> props.navigation.navigate('Hotel Details', {
                                id: hotel._id
                            })}>
                                <Text>view more!</Text>
                            </TouchableOpacity>
                    </View>
                    ))} 
                    </>
                    ) 
                }



        
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
    picker:{
        backgroundColor: '#E7C621',
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 1,
        height:40
    },
    search: {
        borderRadius: 10,
        padding:3,
        paddingHorizontal:6,
        margin: 10,
        width: 150,
        borderColor: "black",
        borderWidth: 1,
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
        // fontFamily: 'adobe-handwriting-ernie',
    },
    hotelcardImg: {
        objectFit: 'cover',
        height: 377,
        width: 300,
    },
    hotelcardButton: {
        textAlign: 'center',
        textTransform: 'uppercase',
        backgroundSize: 200,
        backgroundColor: '#E7C621',
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 1,
        shadowColor: "black",
        paddingVertical: 8,
        paddingHorizontal: 45,
        margin: 10,
        fontStyle: "italic"
    },
});
