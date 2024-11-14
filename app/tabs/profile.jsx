import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';

const data = [
  {
    id: '1',
    section: 'Personal Information',
    options: ['Name', 'Email', 'Language'],
  },
  {
    id: '2',
    section: 'About',
    options: ['Privacy', 'Storage', 'Audio Quality'],
  },
];

const Profile = () => {
  const renderSection = ({ item }) => (
    <View>
      <Text className="text-gray-400 text-lg mt-6 mb-2">{item.section}</Text>
      {item.options.map((option, index) => (
        <TouchableOpacity
          key={`${item.id}-${index}`}
          className="flex-row items-center justify-between py-4 border-b border-gray-700"
        >
          <Text className="text-white text-lg">{option}</Text>
          <Text className="text-gray-400 text-lg">{'>'}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <View className="flex-1 bg-gray-900 px-4">
      <View className="items-center mt-8">
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTukzAjp3NyC_fQDI1YbHpRZ7W3VcZj8G9wjg&s' }}
          className="w-24 h-24 rounded-full"
        />
        <Text className="text-white text-2xl font-semibold mt-4">Kimberlee Dakay</Text>
      </View>

      <FlatList
        data={data}
        renderItem={renderSection}
        keyExtractor={(item) => item.id}
        className="mt-8"
      />
    </View>
  );
};

export default Profile;
