import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HistoriaScreen({ route }) {
    const { calculations } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.listcontainer}>
                <FlatList
                    data={calculations}
                    renderItem={({ item }) => <Text style={styles.list}>{item}</Text>}
                    ListEmptyComponent={<Text>No calculations yet...</Text>}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listcontainer: {
        flex: 2,
        marginTop: 50,
    },
    list: {
        width: 250,
        height: 30,
        textAlign: 'center',
        padding: 2,
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'hotpink',
        borderRadius: 10,
        marginBottom: 5,
    },
});