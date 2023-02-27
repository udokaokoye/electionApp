import { View, Text, SafeAreaView, ScrollView, Pressable } from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import CandidateCard from "../Components/CandidateCard";

const Vote = ({ route }) => {
  const { ballot, voter } = route.params;
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const presCandidates = [
    {
      candidateName: "Bola Ahmed Tinubu",
      candidateImg:
        "https://media.premiumtimesng.com/wp-content/files/2023/01/Bola-Ahmed-Tinubu-e1653653706419.jpg",
      partyName: "All Progressives Congress",
      partyImg:
        "https://upload.wikimedia.org/wikipedia/en/2/23/All_Progressives_Congress_logo.png",
    },
    {
      candidateName: "Peter Gregory Obi",
      candidateImg:
        "https://media.premiumtimesng.com/wp-content/files/2022/10/78f1dc4e-142f-44e4-a328-f15724fe63d4_peter-obi.jpg",
      partyName: "Labour Party",
      partyImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjMyFgG0PLtToFce0XUChCKksaM4yCdJy1VekWt7YycvByFViP8D19WArH9h8VVcBCKiE&usqp=CAU",
    },
    {
      candidateName: "Atiku Abubakar",
      candidateImg:
        "https://cdn.cfr.org/sites/default/files/styles/open_graph/public/image/2019/09/Nigeria-Atiku-Abubakar-Elections.jpg",
      partyName: "People Democratic Party",
      partyImg:
        "https://upload.wikimedia.org/wikipedia/en/6/62/Logo_of_the_Peoples_Democratic_Party_%28Nigeria%29.png",
    },
    {
      candidateName: "Rabiu Kwankwaso",
      candidateImg:
        "https://pbs.twimg.com/profile_images/1530445927739162625/xtGDZZIm_400x400.jpg",
      partyName: "New Nigeria Peoples Party",
      partyImg:
        "https://cdn.vanguardngr.com/wp-content/uploads/2022/03/NNPP.jpg",
    },
  ];
  return (
    <SafeAreaView>
      <ScrollView>
        <View className='flex-row justify-between items-center p-3'>
          <Pressable onPress={() => navigation.goBack()} className='flex-row items-center'>
            <View className='justify-center items-center rounded-full border-2 border-gray-300' style={{width: 50, height: 50}}>
            <ChevronLeftIcon size={30} color='green' />
            </View>
          </Pressable>
          <Text className="text-center text-3xl text-green-600 font-bold my-10 flex-1">
            Select A Candidate
          </Text>
        </View>

        {ballot == "pres"
          ? presCandidates.map((cand, index) => (
              <CandidateCard key={index} candidate={cand} voter={voter} />
            ))
          : ""}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Vote;
