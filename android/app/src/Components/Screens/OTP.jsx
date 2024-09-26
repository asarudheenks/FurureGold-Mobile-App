import { useNavigation } from '@react-navigation/native';
import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Dimensions } from 'react-native';


const { width } = Dimensions.get('window');

const OTP = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const otpInputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleOtpChange = (value, index) => {
    const updatedOtp = [...otp];

    // Handle backspace case (when value is empty)
    if (value === '') {
      updatedOtp[index] = '';
      setOtp(updatedOtp);

      // Move to the previous input on backspace
      if (index > 0) {
        otpInputRefs[index - 1].current.focus();
      }
      return;
    }

    // Update the OTP array with new value
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    // Move to the next input after entering a value
    if (index < otpInputRefs.length - 1) {
      otpInputRefs[index + 1].current.focus();
    }
  };

  const navigation = useNavigation();

  const handleVerifyOtp = () => {
    const otpString = otp.join('');
    if (otpString.length === 4) {
      Alert.alert('OTP Verified',);
      navigation.navigate('Tabs'); 
    } else {
      Alert.alert('Error', 'Please enter a valid 4-digit OTP');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>OTP Verification</Text>
      <Text style={styles.text}>We have sent a verification code</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={otpInputRefs[index]}
            style={styles.otpInput}
            value={digit}
            onChangeText={(value) => handleOtpChange(value, index)}
            keyboardType="numeric"
            maxLength={1}
            autoFocus={index === 0}
          />
        ))}
      </View>
      <Text style={styles.text}>Didn't get the OTP? </Text>
      <TouchableOpacity onPress={() => Alert.alert('Resend OTP', 'OTP has been resent.')}>
        <Text style={styles.link}>Resend OTP</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleVerifyOtp}>
        <Text style={styles.buttonText}>Verify OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: width * 0.1,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: width * 0.07,
    fontWeight: 'bold',
    marginBottom: width * 0.05,
    color: 'black',
    textAlign: 'center',
  },
  text: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    marginBottom: width * 0.1,
    color: 'black',
    textAlign: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: width * 0.1,
  },
  otpInput: {
    width: width * 0.15,
    height: width * 0.15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    fontSize: width * 0.07,
    textAlign: 'center',
  },
  link: {
    fontSize: width * 0.05,
    color: '#007BFF',
    textAlign: 'center',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#a27c5d',
    width: '100%',
    borderRadius: 8,
    paddingVertical: width * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: width * 0.1,
  },
  buttonText: {
    color: '#fff',
    fontSize: width * 0.05,
    fontWeight: 'bold',
  },
});

export default OTP;
