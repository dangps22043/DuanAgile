import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'


const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Logo}>
        <Image
          source={require('../../media/images/Logo.png')}
          resizeMode='cover'
        />

      </View>
      <View>
        <Text style={styles.Font}>Login</Text>
      </View>
      <View style={styles.ContainerEmail}>
        <Image
          source={require('../../media/images/IconMess.png')}
          resizeMode='cover'
        />
        <TextInput placeholder='Email'></TextInput>
      </View>
      <View style={styles.ContainerPassword}>

        <Image style={styles.IconLock}
          source={require('../../media/images/IconLock.png')}
          resizeMode='cover'

        />
        <TextInput placeholder='Password'></TextInput>
      </View>
      <View>
        <Text style={styles.Forgot}>Forgot Password?</Text>
      </View>
      <View style={styles.ContainerLogin}>
        <TouchableOpacity style={styles.btnLogin}>

          <Text style={styles.TxtLogin}> Login </Text>

        </TouchableOpacity>
      </View>
      <View style={styles.ContainerView}>

        <View style={styles.View}>

        </View>
        <Text>Or</Text>
        <View style={styles.View}>

        </View>
      </View>
      <View style={styles.ContainerIconFBGG}>
        <Image style={styles.IconFace}
          source={require('../../media/images/IconFace.png')}
          resizeMode='cover'

        />
        <Image style={styles.IconGoogle}
          source={require('../../media/images/IconGoogle.png')}
          resizeMode='cover'
        />
      </View>
      <View style={styles.ContainerAccount}>
                <Text style={styles.AccountLabel}>don’t have an account ? </Text>
                <Text
                    style={styles.SignUpLabel}>Sign Up</Text>
            </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  Logo: {

    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  Font: {
    color: 'black',
    lineHeight: 60,
    fontSize: 22,
    alignSelf: 'center',


  },
  Forgot: {
    color: 'black',
    alignSelf: 'flex-end',
    lineHeight: 40,

  },

  ContainerEmail: {
    flexDirection: "row",
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#F67952',
  },
  ContainerPassword: {
    flexDirection: "row",
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#F67952',
  },
  IconLock: {
    width: 45,
    height: 45,
    borderRadius: 10,
  },
  btnLogin: {
    backgroundColor: '#F67952',
    width: 205,
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ContainerLogin: {
    marginTop: 20,
    width: '100%',
    height: 60,
    alignItems: 'center'
  },
  View: {
    width: 75,
    height: 1,
    borderWidth: 0.2,
    marginTop: 15,
    marginHorizontal: 20,
  },
  ContainerView: {
    flexDirection: "row",
    alignItems: 'center',
    marginTop: 40,
    justifyContent: 'center'
  },
  TxtLogin: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500'
  },
  ContainerIconFBGG: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    paddingLeft: 10,
  },
  ContainerAccount:{
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
  },
  SignUpLabel:{
    color:'black',
    fontWeight:'400'
  }
})