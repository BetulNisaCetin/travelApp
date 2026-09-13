import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import styles from './signin.style';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { COLORS, SIZES } from '../../constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { HeightSpacer, WidthSpacer, ReusableBtn } from '../../components';
import { useNavigation } from '@react-navigation/native';

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  username: Yup.string()
    .min(3, 'Username must be at least 3 characters')
    .required('Username is required'),
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Email is required'),
});

const Registration = () => {
  const [loader, setLoader] = useState(false);
  const [obsecureText, setObsecureText] = useState(true);
  const navigation = useNavigation(); 

  const handleRegister = async (values) => {
    setLoader(true);
    try {
      const response = await fetch('http://172.20.10.2:5003/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      setLoader(false);

      if (response.ok) {
        Alert.alert('Success', 'Account created successfully');
        navigation.navigate('Signin');
      } else {
        Alert.alert('Error', data.message || 'Registration failed');
      }
    } catch (error) {
      setLoader(false);
      Alert.alert('Network Error', 'Something went wrong. Please try again.');
      console.error('Register error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: '', password: '', username: '' }}
        validationSchema={validationSchema}
        onSubmit={handleRegister}
      >
        {({
          handleChange,
          touched,
          handleSubmit,
          values,
          errors,
          isValid,
          setFieldTouched,
        }) => (
          <View style={{ paddingTop: 30 }}>
           
            <View style={styles.wrapper}>
              <Text style={styles.label}>Username</Text>
              <View>
                <View
                  style={styles.inputWrapper(
                    touched.username ? COLORS.lightBlue : COLORS.lightGrey
                  )}
                >
                  <MaterialCommunityIcons
                    name="face-man-profile"
                    size={20}
                    color={COLORS.gray}
                  />
                  <WidthSpacer width={10} />
                  <TextInput
                    placeholder="Enter your username"
                    onFocus={() => setFieldTouched('username')}
                    onBlur={() => setFieldTouched('username', '')}
                    value={values.username}
                    onChangeText={handleChange('username')}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={{ flex: 1 }}
                  />
                </View>
                {touched.username && errors.username && (
                  <Text style={styles.errorMessage}>{errors.username}</Text>
                )}
              </View>
            </View>

        
            <View style={styles.wrapper}>
              <Text style={styles.label}>Email</Text>
              <View>
                <View
                  style={styles.inputWrapper(
                    touched.email ? COLORS.lightBlue : COLORS.lightGrey
                  )}
                >
                  <MaterialCommunityIcons
                    name="email-outline"
                    size={20}
                    color={COLORS.gray}
                  />
                  <WidthSpacer width={10} />
                  <TextInput
                    placeholder="Enter your email"
                    onFocus={() => setFieldTouched('email')}
                    onBlur={() => setFieldTouched('email', '')}
                    value={values.email}
                    onChangeText={handleChange('email')}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={{ flex: 1 }}
                  />
                </View>
                {touched.email && errors.email && (
                  <Text style={styles.errorMessage}>{errors.email}</Text>
                )}
              </View>
            </View>

            
            <View style={styles.wrapper}>
              <Text style={styles.label}>Password</Text>
              <View>
                <View
                  style={styles.inputWrapper(
                    touched.password ? COLORS.lightBlue : COLORS.lightGrey
                  )}
                >
                  <MaterialCommunityIcons
                    name="lock-outline"
                    size={20}
                    color={COLORS.gray}
                  />
                  <WidthSpacer width={10} />
                  <TextInput
                    secureTextEntry={obsecureText}
                    placeholder="Enter your password"
                    onFocus={() => setFieldTouched('password')}
                    onBlur={() => setFieldTouched('password', '')}
                    value={values.password}
                    onChangeText={handleChange('password')}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={{ flex: 1 }}
                  />
                  <TouchableOpacity onPress={() => setObsecureText(!obsecureText)}>
                    <MaterialCommunityIcons
                      name={obsecureText ? 'eye-off-outline' : 'eye-outline'}
                      size={18}
                      color={COLORS.gray}
                    />
                  </TouchableOpacity>
                </View>
                {touched.password && errors.password && (
                  <Text style={styles.errorMessage}>{errors.password}</Text>
                )}
              </View>
            </View>

           
            <HeightSpacer height={20} />
            <ReusableBtn
              onPress={handleSubmit}
              btnText={loader ? 'Registering...' : 'REGISTER'}
              width={SIZES.width - 40}
              backgroundColor={COLORS.green}
              borderColor={COLORS.green}
              borderWidth={0}
              textColor={COLORS.white}
              disabled={!isValid || loader}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Registration;
