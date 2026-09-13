import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../../constants/theme';
import { HeightSpacer, WidthSpacer, ReusableBtn } from '../../components';
import styles from './signin.style';

const Signin = ({ onLoginSuccess }) => {
  const [loader, setLoader] = useState(false);
  const [obsecureText, setObsecureText] = useState(true);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Please enter a valid email')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
  });

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          setLoader(true);
          try {
         const loginResponse = await fetch('http://172.20.10.2:5003/api/login', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email: values.email, password: values.password }),
            });
            const loginData = await loginResponse.json();

            if (!loginResponse.ok) {
              Alert.alert('Error', loginData.message || 'Login failed');
              setLoader(false);
              return;
            }

            const token = loginData.token; 

            if (!token) {
              Alert.alert('Error', 'Token not received');
              setLoader(false);
              return;
            }


            const userResponse = await fetch('http://172.20.10.2:5003/api/users', {
              method: 'GET',
              headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
              },
            });

            const userData = await userResponse.json();

            if (!userResponse.ok) {
              Alert.alert('Error', userData.message || 'Failed to fetch user data');
              setLoader(false);
              return;
            }

            Alert.alert('Success', 'You have successfully signed in');

     
            if (onLoginSuccess) {
              onLoginSuccess({ token, ...userData });
            }
          } catch (error) {
            Alert.alert('Connection Error', 'Unable to reach the server');
          } finally {
            setLoader(false);
          }
        }}
      >
        {({
          handleChange,
          handleSubmit,
          values,
          errors,
          touched,
          setFieldTouched,
        }) => (
          <View>
            <View style={styles.wrapper}>
              <Text style={styles.label}>Email</Text>
              <View style={styles.inputWrapper(touched.email ? COLORS.lightBlue : COLORS.lightGrey)}>
                <MaterialCommunityIcons name="email-outline" size={20} color={COLORS.gray} />
                <WidthSpacer width={10} />
                <TextInput
                  placeholder="Enter your email"
                  onFocus={() => setFieldTouched('email')}
                  onBlur={() => setFieldTouched('email', false)}
                  value={values.email}
                  onChangeText={handleChange('email')}
                  autoCapitalize="none"
                  style={{ flex: 1 }}
                />
              </View>
              {touched.email && errors.email && (
                <Text style={styles.errorMessage}>{errors.email}</Text>
              )}
            </View>

            <View style={styles.wrapper}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.inputWrapper(touched.password ? COLORS.lightBlue : COLORS.lightGrey)}>
                <MaterialCommunityIcons name="lock-outline" size={20} color={COLORS.gray} />
                <WidthSpacer width={10} />
                <TextInput
                  secureTextEntry={obsecureText}
                  placeholder="Enter your password"
                  onFocus={() => setFieldTouched('password')}
                  onBlur={() => setFieldTouched('password', false)}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  autoCapitalize="none"
                  style={{ flex: 1 }}
                />
                <TouchableOpacity onPress={() => setObsecureText(!obsecureText)}>
                  <MaterialCommunityIcons
                    name={obsecureText ? 'eye-off-outline' : 'eye-outline'}
                    size={20}
                    color={COLORS.gray}
                  />
                </TouchableOpacity>
              </View>
              {touched.password && errors.password && (
                <Text style={styles.errorMessage}>{errors.password}</Text>
              )}
            </View>

            <HeightSpacer height={20} />
            <ReusableBtn
              onPress={handleSubmit}
              btnText={loader ? 'Logging in...' : 'SIGN IN'}
              width={SIZES.width - 40}
              backgroundColor={COLORS.green}
              borderColor={COLORS.green}
              borderWidth={0}
              textColor={COLORS.white}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Signin;
