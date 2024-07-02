import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import { weightedStrings } from './src/WeightedStrings';
import { isBalanced } from './src/BalancedBrackets';
import { highestPalindrome } from './src/HighestPalindrome';

export default function App() {
    const [input, setInput] = useState<string>('');
    const [queries, setQueries] = useState<string>('');
    const [k, setK] = useState<string>('');
    const [result, setResult] = useState<string>('');

    const handleWeightedStrings = () => {
        const queryArray = queries.split(',').map(Number);
        const res = weightedStrings(input, queryArray);
        setResult(res.join(', '));
    };

    const handleBalancedBrackets = () => {
        const res = isBalanced(input);
        setResult(res);
    };

    const handleHighestPalindrome = () => {
        const res = highestPalindrome(input, parseInt(k, 10));
        setResult(res);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Weighted Strings</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter string"
                value={input}
                onChangeText={setInput}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter queries (comma separated)"
                value={queries}
                onChangeText={setQueries}
            />
            <Button title="Check Weighted Strings" onPress={handleWeightedStrings} />

            <Text style={styles.title}>Balanced Brackets</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter string"
                value={input}
                onChangeText={setInput}
            />
            <Button title="Check Balanced Brackets" onPress={handleBalancedBrackets} />

            <Text style={styles.title}>Highest Palindrome</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter string"
                value={input}
                onChangeText={setInput}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter k"
                value={k}
                onChangeText={setK}
            />
            <Button title="Check Highest Palindrome" onPress={handleHighestPalindrome} />

            <Text style={styles.result}>Result: {result}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 10,
        width: '100%',
        paddingLeft: 8,
    },
    result: {
        marginTop: 20,
        fontSize: 18,
    },
});
