import { Stack } from 'expo-router';

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen
        name='[slug]'
        options={{ headerShown: false }}
      />
    </Stack>
  );
}