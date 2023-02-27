import { View, Text, SafeAreaView, Image, Pressable, TextInput, Keyboard } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Auth = () => {
  const navigation = useNavigation();
  const [votersNumber, setvotersNumber] = useState('')
  const [isLoading, setisLoading] = useState(false)
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const continueProcess = () => {
    if (votersNumber == '') {
        alert("Please Enter Voters Number")
        return;
    }
    const formData = new FormData()
    formData.append('voterId', votersNumber)
    fetch('http://192.168.1.51/election/getVoter.php', {
      method: 'POST',
      body: formData
    }).then((res) => res.json()).then((data) => {
      if (data !== 'NO VOTER') {
        navigation.navigate('verification', {
          voter:data
      })
      } else {
        alert('Voter Not Found, Check your voters number and try again')
        // return
      }
    })

  }

  return (
    <Pressable onPress={()=> Keyboard.dismiss()} className='mt-32 flex-1'>
        <SafeAreaView>
      <Text className='text-center text-4xl font-bold text-green-600'>Welcome</Text>
      <Text className='text-center p-2 font-bold'>Enter you voters registeration number below</Text>

      <TextInput onChangeText={(txt) => setvotersNumber(txt)} value={votersNumber} className=' border-2 border-gray-300 rounded-xl self-center mt-6 p-3' style={{width: '80%', height: 50}} placeholder='voters registeration number' placeholderTextColor={'#787779'} keyboardType='numeric'  />
      <Pressable onPress={()=> continueProcess()} className='bg-green-600 self-center px-9 py-3 mt-5 rounded-xl' style={{width: '80%'}}><Text className=' text-center text-white font-bold text-lg'>Continue</Text></Pressable>
      </SafeAreaView>
    </Pressable>
  );
};

export default Auth;
