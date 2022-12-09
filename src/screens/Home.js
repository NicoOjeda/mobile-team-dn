import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity } from 'react-native';

export default function Home (props) {

  const navigateHotels=()=>{
    props.navigation.navigate('Hotels')
  }

const image= {uri: "https://img.freepik.com/foto-gratis/equipaje-amarillo-plano-espacio-copia_23-2148786124.jpg?w=826&t=st=1670538613~exp=1670539213~hmac=33ca10425840e7c992f10488f22740a3f4802616e952e2bbafcbc9baaa5314cc"}

    return (
      <ImageBackground source={image} resizeMode="cover" style={styles.homeContainer}>
      <View style={styles.Container}>
        <Text style={styles.text}>Mytinerary</Text>
        <Text style={styles.text2}>To travel is to live</Text>
        {/* <button title='Cities'/> */}
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.buttons} onPress={navigateHotels} title='Hotels'>
              <Text>Hotels</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={navigateHotels} title='Hotels'>
              <Text>Cities</Text>
            </TouchableOpacity>
            {/* <Button style={styles.buttons} onPress={navigateHotels} title='Cities'/> */}
          </View>
      </View>
      </ImageBackground>
    )
  }


  const styles = StyleSheet.create({
    homeContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    Container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 4
    },
    buttonsContainer:{
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      margin: 10   
    },
    buttons:{
      backgroundColor: '#E7C621',
      color: '#E7C621',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      borderRadius: 10,
      padding:6,
      borderColor: "black",
      borderWidth: 1,
      margin: 10   
    },
    text:{
      color: '#000',
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        fontStyle: 'italic'
    },
    text2:{
      color: '#000',
        fontSize: 20,
        textAlign: 'center',
        fontStyle: 'italic'
    }
  });
