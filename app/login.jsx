import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Switch } from 'react-native';
import { Link } from 'expo-router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <View className="flex-1 bg-gray-900 p-6 justify-center">
      {/* App Logo */}
      <View className="items-center mb-6">
        <Image
          source={{ uri: 'https://img.icons8.com/fluency/96/000000/musical-notes.png' }} // Dummy icon for the app
          className="w-20 h-20 mb-4"
        />
        <Text className="text-white text-2xl font-bold">MonkeyMedia</Text>
      </View>

      {/* Sign In Title */}
      <Text className="text-white text-xl font-semibold mb-6">Sign in to your account</Text>

      {/* Email Input */}
      <TextInput
        placeholder="Email address"
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
        className="bg-gray-800 text-white p-3 mb-2 rounded-lg"
      />

      {/* Remember Me & Forgot Password */}
      <View className="flex-row justify-between items-center mb-4">
        <View className="flex-row items-center">
          <Switch
            value={rememberMe}
            onValueChange={setRememberMe}
            trackColor={{ false: "#767577", true: "#34D399" }} // Track color for off/on states
            thumbColor={rememberMe ? "#34D399" : "#f4f3f4"}   // Thumb color for the switch
          />
          <Text className="text-white text-sm ml-2">Remember me</Text>
        </View>
        <TouchableOpacity>
          <Link href= "/register" className="text-teal-400 text-sm">Register Now</Link>
        </TouchableOpacity>
      </View>

      {/* Sign In Button */}
      <TouchableOpacity className="bg-teal-500 p-3 rounded-lg mb-4">
        <Link href = "/tabs/home" className="text-center text-white font-semibold">Sign in</Link>
      </TouchableOpacity>

      {/* Or Continue with */}
      <Text className="text-gray-400 text-center mb-4">Or continue with</Text>

      {/* Google Sign In Button */}
      <TouchableOpacity className="bg-white flex-row items-center justify-center p-3 rounded-lg">
        <Image
          source={{ uri: 'https://img.icons8.com/color/48/000000/google-logo.png' }} // Google icon
          className="w-6 h-6 mr-2"
        />
        <Text className="text-gray-900 font-semibold">Sign in with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
