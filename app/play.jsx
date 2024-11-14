import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Play = () => {
  const [progress, setProgress] = useState(30); // Track progress (in %)
  const totalTime = 150; // 2:30 is 150 seconds (You can modify this)

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  };

  // Handle manual progress change on tap
  const handleProgressTap = (event) => {
    const { locationX, width } = event.nativeEvent;
    const newProgress = Math.floor((locationX / width) * 100);
    setProgress(newProgress);
  };

  return (
    <View className="flex-1 bg-gray-900 p-4">
      {/* Lyrics Section */}
      <View className="flex-1 justify-center items-center mb-8">
        <ScrollView
          horizontal
          pagingEnabled
          className="w-full h-1 bg-gray-800 rounded-lg p-4"
        >
          <Text className="text-white text-center text-lg  leading-6">
            I used to rule the world {'\n'}
            Seas would rise when I gave the word {'\n'}
            Now in the morning, I sleep alone {'\n'}
            Sweep the streets I used to own {'\n'}
            {'\n'}
            I used to roll the dice {'\n'}
            Feel the fear in my enemy's eyes {'\n'}
            Listen as the crowd would sing {'\n'}
            Now the old king is dead, long live the king {'\n'}
            One minute, I held the key {'\n'}
            Next the walls were closed on me {'\n'}
            And I discovered that my castles stand {'\n'}
            Upon pillars of salt and pillars of sand {'\n'}
            {'\n'}
            I hear Jerusalem bells a-ringin' {'\n'}
            Roman Cavalry choirs are singin' {'\n'}
            Be my mirror, my sword and shield {'\n'}
            My missionaries in a foreign field {'\n'}
          </Text>
        </ScrollView>
      </View>

      {/* Song Info Section */}
      <View className="mb-4">
        <Text className="text-white text-lg font-bold text-center">Viva La Vida</Text>
        <Text className="text-gray-400 text-center">
        Viva la Vida or Death and All His Friends
        - Cold Play
        </Text>
      </View>

      {/* Heart Icon */}
      <View className="absolute top-12 right-8">
        <TouchableOpacity>
          <Icon name="heart" size={24} color="cyan" />
        </TouchableOpacity>
      </View>

      {/* Custom Progress Bar Section */}
      <View className="mb-4">
        <View 
          className="h-1 bg-gray-500 rounded-full w-full" 
          onTouchEnd={handleProgressTap}
        >
          {/* Progress Indicator */}
          <View
            className="h-full bg-cyan-500 rounded-full"
            style={{ width: `${progress}%` }} // Progress width
          />
        </View>
        <View className="flex-row justify-between px-2 mt-2">
          <Text className="text-gray-400 text-sm">{formatTime(Math.floor(progress / 100 * totalTime))}</Text>
          <Text className="text-gray-400 text-sm">{formatTime(totalTime)}</Text>
        </View>
      </View>

      {/* Music Controls Section */}
      <View className="flex-row justify-between items-center">
        <TouchableOpacity>
          <Icon name="backward" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="bg-cyan-500 p-4 rounded-full">
            <Icon name="play" size={30} color="white" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="forward" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Play;
