import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

const Home = () => {
  return (
    <View className="flex-1 bg-[#1a1a2e] p-4">
      {/* Header with Search Bar */}
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-white text-lg font-semibold">Hello Kim,</Text>
        <Text className="text-gray-400">What you want to hear today?</Text>
      </View>

      {/* Search Input */}
      <View className="flex-row items-center bg-gray-700 rounded-full px-4 py-2 mb-4">
        <FontAwesome name="search" size={20} color="white" />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#bbb"
          className="ml-2 text-white flex-1"
        />
      </View>

      {/* Tab Bar (Recommendation, Trending, etc.) */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-4">
        <TouchableOpacity className="mr-4">
          <Text className="text-white text-sm">Recommendation</Text>
        </TouchableOpacity>
        <TouchableOpacity className="mr-4">
          <Text className="text-gray-400 text-sm">Trending</Text>
        </TouchableOpacity>
        <TouchableOpacity className="mr-4">
          <Text className="text-gray-400 text-sm">Rock</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="text-gray-400 text-sm">Acoustic</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Recommendation Section */}
      <View className="flex-row justify-between items-center mb-4">
        <View className="w-40 h-24 bg-gray-800 rounded-lg overflow-hidden">
          <Image
            source={{ uri: 'https://media.istockphoto.com/id/1148222524/vector/friday-banner-speech-bubble-poster-and-typography.jpg?s=612x612&w=0&k=20&c=TlulMxGH7A69-uLuWY9hFu_1qpGnw7s203K8L6ak4U8=' }} // Replace with actual image
            className="w-full h-full"
          />
          <View className="absolute bottom-2 left-2">
            <Text className="text-white text-sm">Friday Party</Text>
            <Text className="text-white text-xs">Party mood!</Text>
          </View>
        </View>

        <View className="w-40 h-24 bg-gray-800 rounded-lg overflow-hidden">
          <Image
            source={{ uri: 'https://m.media-amazon.com/images/I/51GqmiTdonL._UXNaN_FMjpg_QL85_.jpg' }} // Replace with actual image
            className="w-full h-full"
          />
          <View className="absolute bottom-2 left-2">
            <Text className="text-white text-sm">Saturday Party</Text>
            <Text className="text-white text-xs">Party mood!</Text>
          </View>
        </View>
      </View>

      {/* Recently Played Section */}
      <View className="flex-row justify-between items-center mb-2">
        <Text className="text-white text-lg font-semibold">Recently Played</Text>
        <TouchableOpacity>
          <Text className="text-gray-400 text-sm">See all</Text>
        </TouchableOpacity>
      </View>

      {/* Recently Played List */}
      <ScrollView className="space-y-4">
        {/* Song Item */}
        <View className="flex-row items-center justify-between bg-gray-800 rounded-lg p-4">
          <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/b/b2/Coldplay_-_Viva_la_Vida_or_Death_and_All_His_Friends.png' }} // Replace with actual image
            className="w-12 h-12 rounded-lg"
          />
          <View className="flex-1 ml-4">
            <Text className="text-white text-sm">Viva La Vida</Text>
            <Text className="text-gray-400 text-xs">Viva la Vida or Death and All His Friends
            - Cold Play</Text>
            <Text className="text-gray-400 text-xs">1:50 / 4:32</Text>
          </View>
          <TouchableOpacity>
            <Link href ="/play">
            <FontAwesome name="play-circle" size={30} color="white" />
            </Link>
          </TouchableOpacity>
        </View>

        {/* Another Song Item */}
        <View className="flex-row items-center justify-between bg-gray-800 rounded-lg p-4">
          <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/43/NoBoundariesFrontCover.jpg/220px-NoBoundariesFrontCover.jpg' }} // Replace with actual image
            className="w-12 h-12 rounded-lg"
          />
          <View className="flex-1 ml-4">
            <Text className="text-white text-sm">Last Kiss</Text>
            <Text className="text-gray-400 text-xs">No Boundaries: A Benefit for the Kosovar Refugees - Pearl Jam</Text>
            <Text className="text-gray-400 text-xs">2:50 / 3:08</Text>
          </View>
          <TouchableOpacity>
            <Link href ="/play">
            <FontAwesome name="play-circle" size={30} color="white" />
            </Link>
          </TouchableOpacity>
        </View>

        {/* Add more song items as needed */}
      </ScrollView>
    </View>
  );
};

export default Home;
