import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image 
          source={require('../assets/avatar.png')}
          style={styles.avatar}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>
          Lista de Compras
        </Text>
        <Text style={styles.text}>
          Monte sua lista de compras e não esqueça mais o que precisa comprar ao sair de casa!!!
        </Text>
        <Link style={styles.button} href={"/home"}>
          <Text style={styles.buttonText}>Acessar</Text>
        </Link>

      </View>

      <StatusBar style="light" backgroundColor='#000' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  containerImage: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 230,
    height: 230,
    borderRadius: 115,
    resizeMode: 'cover',
  },
  content:{
    flex: 1,
    backgroundColor: '#dadada',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingHorizontal: '5%'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontsize: 16,
    color: 'gray',
  },
  button: {
    position: 'absolute',
    bottom: '15%',
    backgroundColor: '#000',
    alignSelf: 'center',
    borderRadius: 50,
    paddingVertical: 15,
    width: '60%',
    textAlign: 'center',
  },
  buttonText: {
    fontsize: 22,
    color: '#ffffff',
    fontWeight: 'bold'
  }
});
