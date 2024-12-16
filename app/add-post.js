import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default function AddPost() {
  const router = useRouter();
  const { message } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#C0EAC0' }}>
      <Stack.Screen
        options={{
          title: 'Add Post',
          headerStyle: { backgroundColor: '#32CD32' },
          headerTintColor: '#FFF',
        }}
      />
      <Text style={{ fontSize: 24 }}>{message}</Text>
      <Button title="Save" onPress={() => router.replace('/')} />
    </View>
  );
}
