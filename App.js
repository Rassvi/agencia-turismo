import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, Image, Button, ImageBackground, Pressable } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ 
            flex: 1, 
            alignItems: 'center', 
            marginTop: 15,
          }}>
      <View style={styles.card}>
        <Image 
          source={{uri: 'https://jakadatoursegypt.com/wp-content/uploads/2020/12/Alexandria-Egypt.jpg'}} 
          style={styles.imagen}
        />

        <View style={{padding: 10, flex: 1,}}>
          <Text style={styles.titles}>
            Hospedarse en Alexandria
          </Text>
          <View style={styles.infoDesc}>
            <Text style={styles.info}> 1 - 2 personas </Text>
            <Text style={styles.info}> Vistas al mar </Text>
            <Text style={styles.info}> Gimnasio </Text>
          </View>
          <Button title='Ver detalles'
            onPress={ () => navigation.navigate('Alexandria') }
          />
        </View>
      </View>

      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fd/6f/ankara.jpg?w=700&h=500&s=1' }} 
          style={styles.imagen}
        />

        <View style={{padding: 10, flex: 1,}}>
          <Text style={styles.titles}>
            Hospedarse en Ankara
          </Text>
          <View style={styles.infoDesc}>
            <Text style={styles.info}> 1 - 3 personas </Text>
            <Text style={styles.info}> El hotel admite mascotas </Text>
            <Text style={styles.info}> Guia incluido </Text>
          </View>
          <Button title='Ver detalles'
            onPress={ () => navigation.navigate('Ankara') }
          />
        </View>
      </View>

      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://cdn.britannica.com/16/177616-050-0167E767/Casablanca-Morocco.jpg' }} 
          style={styles.imagen}
        />

        <View style={{padding: 10, flex: 1,}}>
          <Text style={styles.titles}>
            Hospedarse en Casablanca
          </Text>
          <View style={styles.infoDesc}>
            <Text style={styles.info}> 1 - 4 personas </Text>
            <Text style={styles.info}> El hotel admite mascotas </Text>
            <Text style={styles.info}> Buffete Gratis </Text>
          </View>
          <Button title='Ver detalles'
            onPress={ () => navigation.navigate('Casablanca') }
          />
        </View>
      </View>
      
    </View>
  );
}

function Alexandria ({ navigation }){
  const alexImage = { uri:'https://media.tacdn.com/media/attractions-splice-spp-674x446/0c/01/7c/30.jpg' };
  return( 
    <View style={{flex: 1, }}>
      <ImageBackground style={{minHeight: '35%', alignItems:'center', justifyContent: 'center'}} source={alexImage}>
        <Text style={{backgroundColor: '#000A', color: '#fff', padding: 15, fontSize: 35}}>
          Visita Alexandria
        </Text>
      </ImageBackground>

      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={styles.infoCard}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>El destino ofrece: </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Text>Vistas al mar</Text>
            <Text>Estacionamiento gratis</Text>
            <Text>Gimnasio</Text>
          </View>
        </View>

        <View style={{backgroundColor: 'white', borderRadius: 15, padding: 10, marginBottom: 25}}>
          <Text>
          Alejandría es una ciudad portuaria mediterránea de Egipto. Durante el período helenístico, fue el hogar de un faro que se incluye entre las Siete maravillas del mundo antiguo, junto con una importante biblioteca. La Biblioteca de Alejandría actual tiene forma de disco y es extremadamente moderna.
          </Text>
        </View>

        <View style={{backgroundColor: 'white', borderRadius: 15, padding: 10}}>
          <Text style={{fontSize: 18, marginBottom: 5, textAlign: 'center'}}>
            Quedarse en APT Suites Alexandria-Fort Belvoir
          </Text>

          <Pressable style={{backgroundColor: '#4300d2', padding: 15, borderRadius: 25,}}>
            <Text style={{color: 'white', fontSize: 16, textAlign: 'center'}}>Elegir fechas</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

function Ankara ({ navigation }){
  return( 
    <View>
      
    </View>
  );
}

function Casablanca ({ navigation }){
  return( 
    <View>
      
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options={{ title: 'Inicio' }} 
        />

        <Stack.Screen 
          name="Alexandria"
          component={Alexandria}
          options={{ title: 'Viajar a: Alexandria' }}
        />

        <Stack.Screen 
          name="Ankara"
          component={Ankara}
          options={{ title: 'Viajar a: Ankara' }}
        />

        <Stack.Screen 
          name="Casablanca"
          component={Casablanca}
          options={{ title: 'Viajar a: Casablanca' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  // Estilos de la pagina Home
  card: {
    marginTop: 15,
    marginBottom: 15,
    flexDirection: 'row',
    minWidth: '95%',
    minHeight: 240,
    borderRadius: 15,
    backgroundColor: '#fff',
    shadowColor: "#000",shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imagen: {
    flex: 1,
    resizeMode: 'cover'
  },
  titles: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  infoDesc: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  info: {
    width: '75%', 
    backgroundColor: '#cdcdcd',
    padding: 5,
    marginBottom: 2,
    marginTop: 2,
    borderRadius: 15,
    textAlign: 'center'
  },

  // Estilos de las pantallas extra. 
  infoCard: {
    width: '98%',
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 15,
    marginTop: 15,
    marginBottom: 15,
  },
});

export default App;