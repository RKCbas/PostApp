import { Stack, useRouter } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default function PostsList() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#AEDFF7' }}>
      <Stack.Screen
        options={{
          title: 'Posts List',
          headerStyle: { backgroundColor: '#1E90FF' },
          headerTintColor: '#FFF',
        }}
      />
      <Text style={{ fontSize: 24 }}>Posts List Screen</Text>
      <Button title="Add Post" onPress={() => router.push({ pathname: '/add-post', params: { message: 'Add Post Screen' } })} />
      <Button title="View Post" onPress={() => router.push({ pathname: '/view-post', params: { message: 'View Post Screen' } })} />
    </View>
  );
}
