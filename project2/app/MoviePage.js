import { StyleSheet, View, Text, Pressable } from 'react-native';

export default function MovePage({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Movie Page</Text>
            <Pressable
                onPress={() => navigation.navigate("Search")} 
            >
                <Text style={styles.button}>Back</Text>
            </Pressable>
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
    button: {
        color: 'blue',
    },
});