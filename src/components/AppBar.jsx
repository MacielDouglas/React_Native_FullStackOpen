import React from 'react';
import { View, StyleSheet, Pressable, Text, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';
// import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
  },
  texto: {
    color: '#fff',
    padding: 20,
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Pressable>
          <Link to="/">
            <Text style={styles.texto}>Respositories</Text>
          </Link>
        </Pressable>
        <Pressable>
          <Link to="/signIn">
            <Text style={styles.texto}>Sign In</Text>
          </Link>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default AppBar;
