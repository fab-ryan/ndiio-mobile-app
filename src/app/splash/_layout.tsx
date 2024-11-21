import { Stack } from 'expo-router';

export const unstable_settings ={
  initialRouteName:'/(tabs)/'
}
export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{ headerShown: false }}
      />
     
    </Stack>
  );
}
