import React from 'react'
import { Stack } from 'expo-router'
import { useFonts} from 'expo-font'
import { useEffect } from 'react'
import { SplashScreen } from 'expo-router'


SplashScreen.preventAutoHideAsync();

const MainLayout = () => {

  const [fontsLoaded, error] = useFonts({
    "impact": require("../assets/fonts/impact.ttf"),
   
  });
  
  useEffect(() => {
    if (error) throw error;
  
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);
  
  if (!fontsLoaded && !error) {
    return null;
  }
  
  return (

    <Stack>

      <Stack.Screen name="index" options={{
        headerShown:false
      }}/>

    </Stack>
  )
}

export default MainLayout

