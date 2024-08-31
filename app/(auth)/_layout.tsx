import { Stack } from 'expo-router';

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen
        name='login'
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='forgotPassword'
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='register'
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='verification'
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='updatePassword'
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
