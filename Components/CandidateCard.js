import { View, Text, Image, Pressable, TouchableOpacity, TextInput } from "react-native";
import React, { useRef, useState, useEffect } from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import { useNavigation } from "@react-navigation/native";

const CandidateCard = ({ candidate, voter }) => {
    const navigation = useNavigation()
  const [selectedCandidate, setselectedCandidate] = useState();
  const [input1, setinput1] = useState('')
  const [input2, setinput2] = useState('')
  const [input3, setinput3] = useState('')
  const [input4, setinput4] = useState('')
  const refRBSheet = useRef();
  const handleSelectCandidate = () => {
    setselectedCandidate(candidate);
    refRBSheet.current.open();
  };
  

  const checkInputs = () => {
    const last4NIN = input1 + "" + input2 + "" + input3 + "" + input4
    if (input1 == '' || input2 == '' || input3 == '' || input4 == '') {
        return false
    } else {
        if (voter?.NIN.slice(-4) == last4NIN) {
            return true
        } else{
            alert("last 4 of NIN dosn't match our records")
        return false
        }
    }
    return false
  }

  const confirmVote = () => {
    refRBSheet.current.close();
    const formData = new FormData()
    formData.append('party', candidate?.partyName)
    formData.append('voterId', voter?.voterId)
    fetch('http://192.168.1.51/election/vote.php', {
    method: 'POST',
    body: formData
    }).then((res) => res.json()).then((data) => {
        if (data == 'ALREADY VOTED') {
            alert("Already Voted")
            navigation.navigate('splash')
        } else {
            alert('Your Vote was casted Successfully')
            navigation.navigate('splash')
        }
    })
  }


  
  return (
    <View
      className="bg-green-600 rounded-3xl mb-10 self-center overflow-hidden"
      style={{ width: "90%", height: 610 }}
    >
      <Image
        source={{ uri: candidate.candidateImg }}
        style={{ width: "100%", height: 400 }}
      />
      <Text className="font-bold text-2xl mt-3 ml-3 text-white">
        {candidate.candidateName}
      </Text>

      <View className=" border-t-2 border-b-2 border-green-600 mt-5 flex-row justify-start items-center m-3 py-2">
        <Image
          className=""
          source={{ uri: candidate.partyImg }}
          style={{ width: 50, height: 50 }}
        />
        <Text className="font-bold ml-3 text-white">{candidate.partyName}</Text>
      </View>

      <TouchableOpacity
        onPress={() => handleSelectCandidate()}
        style={{ width: "90%", height: 50 }}
        className=" bg-white rounded-2xl justify-center items-center self-center"
      >
        <Text className=" text-green-600 font-bold text-xl">
          Select Candidate
        </Text>
      </TouchableOpacity>

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
        <>
          <Text className=" text-center text-2xl text-green-600">Confirm Your Vote</Text>
          <View className='p-2'>
            <Text className='text-xl font-bold'>Party</Text>
            <View className='flex-row items-center'>
              <Image
                source={{ uri: selectedCandidate?.partyImg }}
                className='rounded-full'
                style={{ width: 50, height: 50 }}
                resizeMode='contain'
              />
              <Text className='text-xl ml-2 font-bold'>{selectedCandidate?.partyName}</Text>
            </View>
            <Text className='text-xl font-bold mt-5'>Candidate</Text>
            <View className='flex-row items-center'>
              <Image
                source={{ uri: selectedCandidate?.candidateImg }}
                style={{ width: 50, height: 50 }}
                className='rounded-full'
              />
              <Text className='text-xl ml-2 font-bold'>{selectedCandidate?.candidateName}</Text>
            </View>

            <Text className='text-center text-xl font-bold text-green-600 mt-5'>Enter last 4 of you NIN</Text>
            <View style={{width: '80%'}} className='flex-row justify-evenly self-center mt-10'>
                <TextInput onChangeText={(txt) => setinput1(txt)} className=' w-10 h-10 border-2 border-green-600 text-center' keyboardType='numeric' />
                <TextInput onChangeText={(txt) => setinput2(txt)} className=' w-10 h-10 border-2 border-green-600 text-center' keyboardType='numeric' />
                <TextInput onChangeText={(txt) => setinput3(txt)} className=' w-10 h-10 border-2 border-green-600 text-center' keyboardType='numeric' />
                <TextInput onChangeText={(txt) => setinput4(txt)} className=' w-10 h-10 border-2 border-green-600 text-center' keyboardType='numeric' />
            </View>


            <Pressable onPress={() => confirmVote()} className={`justify-center items-center ${checkInputs() ? 'bg-green-600' : 'bg-gray-400'} self-center rounded-3xl mt-5`} style={{width: '90%', height: 60}}><Text className='text-white text-xl font-bold'>Confirm Vote!</Text></Pressable>
          </View>
        </>
      </RBSheet>
    </View>
  );
};

export default CandidateCard;
