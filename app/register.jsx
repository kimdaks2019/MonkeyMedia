import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View className="flex-1 bg-gray-900 p-6 justify-center">
      {/* App Logo */}
      <View className="items-center mb-6">
        <Image
          source={{ uri: 'https://img.icons8.com/fluency/96/000000/musical-notes.png' }} // Dummy icon for the app
          className="w-20 h-20 mb-4"
        />
        <Text className="text-teal-400 text-xl font-bold">Welcome to MonkeyMedia</Text>
      </View>

      {/* Create Account Title */}
      <Text className="text-white text-xl font-semibold mb-6">Create your account</Text>

      {/* Name Input */}
      <TextInput
        placeholder="Name"
        placeholderTextColor="#aaa"
        value={name}
        onChangeText={setName}
        className="bg-gray-800 text-white p-3 mb-4 rounded-lg"
      />

      {/* Email Input */}
      <TextInput
        placeholder="Email"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        className="bg-gray-800 text-white p-3 mb-4 rounded-lg"
      />

      {/* Password Input */}
      <TextInput
        placeholder="Password"
        placeholderTextColor="#aaa"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="bg-gray-800 text-white p-3 mb-6 rounded-lg"
      />

      {/* Sign Up Button */}
      <TouchableOpacity className="bg-teal-500 p-3 rounded-lg mb-4">
        <Link href = "/login"className="text-center text-white font-semibold">Sign up</Link>
      </TouchableOpacity>

      {/* Or Continue with */}
      <Text className="text-gray-400 text-center mb-4">Or continue with</Text>

      {/* Google Sign Up Button */}
      <TouchableOpacity className="bg-white flex-row items-center justify-center p-3 rounded-lg mb-6">
        <Image
          source={{ uri: 'https://img.icons8.com/color/48/000000/google-logo.png' }} // Google icon
          className="w-6 h-6 mr-2"
        />
        <Text className="text-gray-900 font-semibold">Sign up with Google</Text>
      </TouchableOpacity>

      {/* Already have an account */}
      <View className="flex-row justify-center">
        <Text className="text-gray-400">Already have an account? </Text>
        <TouchableOpacity>
          <Link href = "/login" className="text-teal-400">Sign in</Link>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
