import { View, Text, FlatList, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const data = [
  {
    id: '1',
    title: 'Rock Music',
    description: 'Rock music is famous for having a strong backbeat, usually in 4/4 rhythm, although more progressive styles can employ trickier time signatures.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhoD3ETFjex4I-dvmvIvPuZk-z2_x14uTzBg&s',
  },
  {
    id: '2',
    title: 'Country Music',
    description: 'Country music, style of American popular music that originated in rural parts of the South and West in the early 20th centuryt',
    image: 'https://i.pinimg.com/736x/a3/03/02/a30302da6060b6bea4c2c58d36f0dd49.jpg', // No image provided, will use fallback
  },
  {
    id: '3',
    title: 'Soft Rock',
    description: 'Soft rock (also known as light rock) is a form of rock music that originated in the late 1960s in Southern California and the United Kingdom',
    image: 'https://cdns-images.dzcdn.net/images/cover/e1cdc266832114f6b2ad617f56178558/500x500.jpg', // No image provided, will use fallback
  },
  {
    id: '4',
    title: 'Alternative Rock',
    description: 'Alternative music that blends elements of conventional rock with influences from other musical styles (such as punk rock, hard rock, hip-hop, or folk)',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToIIwgrthXEc5xqeRgegQRzXudWRTfD4JVMA&s', // Provided image, no need for fallback
  },
];

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text) {
      const filtered = data.filter((item) =>
        item.title.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity className="flex-row items-center p-4 border-b border-gray-700">
      <Image
        source={{ uri: item.image || 'https://via.placeholder.com/100' }} // Fallback image for all items
        className="w-16 h-16 rounded-lg"
        style={{ resizeMode: 'cover' }}
      />
      <View className="ml-4 flex-1">
        <Text className="text-white font-bold text-lg">{item.title}</Text>
        <Text className="text-gray-400 text-sm">{item.description}</Text>
      </View>
      <Text className="text-gray-400 text-lg">{'>'}</Text>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-gray-900 px-4">
      <View className="bg-gray-800 rounded-lg mt-8 px-4 py-2 flex-row items-center">
        <TextInput
          value={searchQuery}
          onChangeText={handleSearch}
          placeholder="Search"
          placeholderTextColor="#A9A9A9"
          className="text-white flex-1"
        />
      </View>
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        className="mt-4"
      />
    </View>
  );
};

export default Search;
