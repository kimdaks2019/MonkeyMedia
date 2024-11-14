import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';

const songs = [
  { id: 1, title: 'Viva La Vida', artist: 'Cold Play' },
  { id: 2, title: 'Last Kiss', artist: 'Last Kiss' },
  { id: 3, title: 'Creep', artist: 'Radiohead' },
  { id: 4, title: 'Everything I Own', artist: 'Bread' },
  { id: 5, title: 'Wild Horses', artist: 'The Rolling Stones' },
  { id: 6, title: 'Ventura Highway', artist: 'America' }
];

const Favorite = () => {
  const [currentSong, setCurrentSong] = useState(null);

  const handlePlay = (song) => {
    setCurrentSong(song);
  };

  const renderSongItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => handlePlay(item)}
      className="flex-row justify-between items-center mb-4 p-2 bg-gray-800 rounded-lg"
    >
      <View className="flex-1">
        <Text className="text-white font-semibold">{item.title}</Text>
        <Text className="text-gray-400 text-xs">{item.artist}</Text>
      </View>
      {/* Play/Pause Button */}
      <Text className={`text-${currentSong?.id === item.id ? 'green' : 'white'}`}>
        {currentSong?.id === item.id ? '⏸' : '▶️'}
      </Text>
    </TouchableOpacity>
  );  

  return (
    <View className="flex-1 bg-gray-900 p-4">
      {/* Profile Picture */}
      <View className="flex-row items-center mb-6">
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTukzAjp3NyC_fQDI1YbHpRZ7W3VcZj8G9wjg&s' }} // Dummy image for avatar
          className="w-12 h-12 rounded-full"
        />
        <Text className="text-white ml-4 text-lg font-semibold">Favorite Songs</Text>
      </View>

      {/* Song List */}
      <FlatList
        data={songs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderSongItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Favorite;
