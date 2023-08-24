import React from 'react';
import { Text, View, Image, StyleSheet, SafeAreaView, Button } from 'react-native';

export default function Payments () {
  return (
    <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
            <Text style={styles.text}>Payments</Text>
        </View>
        <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});
