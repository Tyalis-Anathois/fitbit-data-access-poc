import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import ConnectionStatusViewer from './components/ConnectionStatusViewer/ConnectionStatusViewer'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Hello world!</Text>
      <Text>Follow steps from : https://reactnative.dev/docs/environment-setup</Text>
      <Text>Expo infos : https://expo.dev/</Text>
      <StatusBar style="auto" />

      <ConnectionStatusViewer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#555',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
