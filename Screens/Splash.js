import { View, Text, SafeAreaView, Image, Pressable } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false
      })
    }, [])
  return (
    <View className='flex-1' style={{backgroundColor: '#fff', height: '100%'}}>
    <SafeAreaView className="mt-60">
            <Image className='self-center' resizeMode='contain' source={require('../assets/inec1.png')} style={{width: '100%'}} />
            <Image className='self-center' resizeMode='contain' source={require('../assets/inec2.png')} style={{width: '90%'}} />
            <Pressable onPress={()=> navigation.navigate('auth')} style={{backgroundColor: '#03A34D'}} className='self-center px-12 py-4  rounded-2xl mt-4'><Text className=' text-white font-bold'>Authenticate Voter</Text></Pressable>
    </SafeAreaView>
    </View>
  )
}

export default Splash