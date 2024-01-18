import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../theme';
import SignIn from './SignIn';
import SignUp from './SignUp';
import MyReview from './MyReview';
import CreateAReview from './CreateAReview';
import SingleRepository from './singleRepository';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackground,
    fontFamily: theme.fonts,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/signIn" element={<SignIn />} exact />
        <Route path="/signUp" element={<SignUp />} exact />
        <Route path="/:id" element={<SingleRepository />} />
        <Route path="/createAReview" element={<CreateAReview />} />
        <Route path="/myReview" element={<MyReview />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
