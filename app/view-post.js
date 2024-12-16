import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default function ViewPost() {
  const router = useRouter();
  const { message } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFB6C1' }}>
      <Stack.Screen
        options={{
          title: 'View Post',
          headerStyle: { backgroundColor: '#FF69B4' },
          headerTintColor: '#FFF',
        }}
      />
      <Text style={{ fontSize: 24 }}>{message}</Text>
      <Button title="Delete" onPress={() => router.replace('/')} />
    </View>
  );
}
