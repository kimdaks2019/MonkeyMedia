import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View className="flex-1 bg-gray-900 justify-center items-center">
      <StatusBar style="light" />
      
      {/* Main Text */}
      <Text className="text-teal-400 text-2xl font-bold mb-6 text-center">
        Start Tuning Your Ideas into Reality
      </Text>

      {/* Subtitle */}
      <Text className="text-gray-300 text-7x1 font-bold mb-12 text-center">
        Listen to Monkey Media
      </Text>

      {/* Get Started Button */}
      <TouchableOpacity className="bg-teal-500 py-3 px-10 rounded-full mb-4">
        <Link href ="/register" className="text-white text-lg">Register</Link>
      </TouchableOpacity>

      {/* Continue with Email Button */}
      <Link href="/login" className="bg-transparent border-2 border-teal-500 py-3 px-10 rounded-full">
        <Text className="text-teal-500 text-lg">Login</Text>
      </Link>

      {/* Terms and Privacy Policy */}
      <Text className="text-gray-400 text-xs mt-9 align-text-bottom opacity-70">
        By continuing, you agree to terms of service and privacy policy.
      </Text>
    </View>
  );
}
