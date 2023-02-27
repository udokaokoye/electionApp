import { View, Text, SafeAreaView, Pressable, TouchableOpacity } from 'react-native'
import React, {useLayoutEffect, useEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native';

const VoteCategories = ({route}) => {
    const {voter} = route.params
    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
      }, []);
  return (
    <SafeAreaView className='mt-32'>
      <Text className='text-center text-green-600 font-bold text-2xl'>Select An Election Category</Text>
      <View className='mt-5'>
        <TouchableOpacity onPress={() => navigation.navigate('vote', {ballot: 'pres', voter: voter})} className='self-center justify-center items-center border-2 border-green-600 rounded-xl' style={{width: '90%', height: 60}}><Text className='font-bold'>Presidential Ballot</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => alert('No Candidate')} className='self-center justify-center items-center border-2 border-green-600 rounded-xl mt-10' style={{width: '90%', height: 60}}><Text className='font-bold'>Sentorial Ballot</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => alert('No Candidate')} className='self-center justify-center items-center border-2 border-green-600 rounded-xl mt-10' style={{width: '90%', height: 60}}><Text className='font-bold'>National Assembley Ballot</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default VoteCategories