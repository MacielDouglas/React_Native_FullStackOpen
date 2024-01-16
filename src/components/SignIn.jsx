import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default function SignIn() {
  const onSubmit = (values) => {
    // Aqui você pode lidar com os dados do formulário, como fazer uma solicitação de login
    console.log('Sign In:', values);
  };

  return (
    <Formik initialValues={{ username: '', password: '' }} onSubmit={onSubmit}>
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('username')}
            onBlur={handleBlur('username')}
            value={values.username}
            placeholder="Username"
          />
          <TextInput
            style={styles.input}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            placeholder="Password"
            secureTextEntry={true}
          />
          <Button onPress={handleSubmit} title="Sign In" />
        </View>
      )}
    </Formik>
  );
}
