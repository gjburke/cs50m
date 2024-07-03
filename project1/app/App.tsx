import { StyleSheet, Text, View } from 'react-native';
import Timer from './Timer'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pomodoro Timer</Text>
      <Timer></Timer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 72,
    color: 'blue',
  },
});
