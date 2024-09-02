import { useEffect, useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function LaskinScreen({ navigation }) {
    const [numbers, setNumbers] = useState({
        first: '',
        second: '',
    });
    const [calculation, setCalculation] = useState('');
    const [calculations, setCalculations] = useState([]);
    const inputFocus = useRef(null);
    let localResult;

    const handleTotal = () => {
        if (numbers.first && numbers.second) {
            localResult = Number(numbers.first) + Number(numbers.second);
            addToList("+");
        }
    }

    const handleDifference = () => {
        if (numbers.first && numbers.second) {
            localResult = Number(numbers.first) - Number(numbers.second);
            addToList("-");
        }
    }

    const addToList = (operator) => {
        setCalculation(`${numbers.first} ${operator} ${numbers.second} = ${localResult}`);
        setNumbers({});
        inputFocus.current.focus();
    }

    const handlePress = () => {
        setCalculation('');
        navigation.navigate("Historia", { calculations: calculations });
    }

    useEffect(() => {
        inputFocus.current.focus();
    }, [])

    useEffect(() => {
        if (calculation != '') {
            setCalculations([calculation, ...calculations]);
        }
    }, [calculation])

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.laskincontainer}>
                <TextInput
                    maxLength='6'
                    style={styles.input}
                    value={numbers.first}
                    inputMode='numeric'
                    returnKeyType='done'
                    onChangeText={text => setNumbers({ ...numbers, first: text })}
                    ref={inputFocus}
                />
                <TextInput
                    maxLength='6'
                    style={styles.input}
                    value={numbers.second}
                    inputMode='numeric'
                    returnKeyType='done'
                    onChangeText={text => setNumbers({ ...numbers, second: text })}
                />
                <View style={styles.buttonContainer}>
                    <Button color='green' title='+' onPress={handleTotal} />
                    <Button color='red' title='-' onPress={handleDifference} />
                    <Button
                        title='Historia'
                        onPress={handlePress}
                    />
                </View>
            </View>
            <View style={styles.calculationContainer}>
                <Text style={styles.result}>{calculation}</Text>
            </View>
            <StatusBar style="auto" />
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
    laskincontainer: {
        flex: 1,
        marginTop: 50,
    },
    result: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'gray',
        width: 150,
        padding: 8,
    },
    buttonContainer: {
        width: 150,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'center',
    },
    calculationContainer: {
        flex: 2,
        alignItems: 'center',
    },
});
