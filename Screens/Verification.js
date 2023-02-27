import { View, Text, SafeAreaView, Pressable, TouchableOpacity, TextInput, Keyboard, Image } from 'react-native'
import React, {useLayoutEffect, useState, useRef, useEffect, useContext} from 'react'
import { useNavigation } from '@react-navigation/native';
import RBSheet from "react-native-raw-bottom-sheet";
import { AuthContext } from '../lib';

const Verification = ({route}) => {
    const {verifiedVoter, setverifiedVoter} = useContext(AuthContext)
    const navigation = useNavigation()
    const [verficationMethod, setverficationMethod] = useState('')
    const [input1, setinput1] = useState('')
    const [input2, setinput2] = useState('')
    const [input3, setinput3] = useState('')
    const [input4, setinput4] = useState('')
    const [input5, setinput5] = useState('')
    

  const refRBSheet = useRef();
    const {voter} = route.params
    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
      }, []);

      useEffect(() => {
        if (verifiedVoter !== null) {
            navigation.navigate('voteCategory', {
                voter: voter
            })
        }
      }, [verifiedVoter])
      

      

      const identityVerificationMethods = ['Facial Recognition', 'Text Verification', 'Email Verification']

    const verificationMethodSelected = (method) => {
        setverficationMethod(method)
        refRBSheet.current.open()
    }

    const verifyVoter = async () => {
        const secureOTP = input1 + "" + input2 + "" + input3 + "" + input4 + "" + input5

        if (secureOTP == "12345") {

            setverifiedVoter(voter)
            setverifiedVoter(voter)
            refRBSheet.current.close()
            
            // setTimeout(() => {
            //     console.log(verifiedVoter)
            // }, 1000);
            // return

        } else {
            alert("FAILED")
        }
    }
  return (
    <SafeAreaView className='mt-40'>
      <Text className='text-center text-4xl font-bold text-green-600'>Welcome, {voter?.firstName}</Text>
      <Text className='text-center mt-2 font-bold'>Choose a way to verify your identity</Text>
      <Image className=' self-center rounded-full mt-5' source={{uri: voter.photo}} style={{width: 150, height: 150}} />

      <View className='mt-10'>
            {identityVerificationMethods.map((method, index) => (
                <TouchableOpacity onPress={() => verificationMethodSelected(method)} className=' py-4 mb-4 self-center border-2 border-green-600 rounded-xl' style={{width: '80%'}} key={index}>
                    <Text className='text-center'>{method}</Text>
                </TouchableOpacity>
            ))}
      </View>

      <RBSheet
        ref={refRBSheet}
        height={550}
        closeOnDragDown={true}
        closeOnPressMask={true}
        openDuration={250}
        customStyles={{
          container: {
            borderRadius: 20,
            backgroundColor: "#EBEEEC",
          },
          draggableIcon: {
            backgroundColor: "#aab8b9",
          },
        }}
      >

        {verficationMethod == 'Text Verification' ? (
            <Pressable onPress={() => Keyboard.dismiss()}>
            <Text className='text-center text-xl text-green-600 font-bold'>We just sent a secure OTP to your phone</Text>
            <Text className='text-center font-bold mt-2'>Enter OTP below</Text>
            <View style={{width: '80%'}} className='flex-row justify-evenly self-center mt-10'>
                <TextInput onChangeText={(txt) => setinput1(txt)} className=' w-10 h-10 border-2 border-green-600 text-center' keyboardType='numeric' />
                <TextInput onChangeText={(txt) => setinput2(txt)} className=' w-10 h-10 border-2 border-green-600 text-center' keyboardType='numeric' />
                <TextInput onChangeText={(txt) => setinput3(txt)} className=' w-10 h-10 border-2 border-green-600 text-center' keyboardType='numeric' />
                <TextInput onChangeText={(txt) => setinput4(txt)} className=' w-10 h-10 border-2 border-green-600 text-center' keyboardType='numeric' />
                <TextInput onChangeText={(txt) => setinput5(txt)} className=' w-10 h-10 border-2 border-green-600 text-center' keyboardType='numeric' />
            </View>

            <Pressable onPress={() => verifyVoter()} className='bg-green-600 self-center mt-10 py-4 rounded-lg' style={{width: '80%'}}><Text className='text-center text-xl font-bold text-white'>Continue</Text></Pressable>
            </Pressable>
        ) : ''}

        </RBSheet>
    </SafeAreaView>
  )
}

export default Verification