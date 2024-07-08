import { StyleSheet, View, Text, Pressable } from 'react-native';

export default function SearchPage({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Search Screen</Text>
            <Pressable
                title="Movie"
                onPress={() => navigation.navigate("Movie")}
            >
                <Text style={styles.button}>Movie</Text>
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
    }
});