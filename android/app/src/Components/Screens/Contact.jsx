import React from 'react';
import { StyleSheet, Text, View, TextInput,  ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 

const Contact = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Contact Us</Text>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Name"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
          />
          <TextInput
            style={[styles.input, styles.messageInput]}
            placeholder="Your Message"
            multiline
            numberOfLines={4}
          />
        </View>
      </View>
        
      <View style={styles.iconContainer}>
        <View style={styles.iconWrapper}>
          <TouchableOpacity style={styles.icon}>
            <Icon name="logo-whatsapp" size={30} color="#25D366" />
          </TouchableOpacity>
        </View>

        <View style={styles.iconWrapper}>
          <TouchableOpacity style={styles.icon}>
            <Icon name="call" size={30} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.iconWrapper}>
          <TouchableOpacity style={styles.icon}>
            <Icon name="chatbox" size={30} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.iconWrapper}>
          <TouchableOpacity style={styles.icon}>
            <Icon name="logo-instagram" size={30} color="#C13584" />
          </TouchableOpacity>
        </View>
      </View>
        
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
    marginTop: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  formContainer: {
    height: 300,
    marginTop: 40,
    alignItems: 'center',
    backgroundColor: '#C7C7C7',
    borderRadius: 15,
  },
  inputContainer: {
    marginTop: 30,
    
  },
  input: {
    height: 40,
    width: 280,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  messageInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    flexDirection: 'row',
    marginBottom: 20,
  },
  iconWrapper: {
    width: 30,
    marginHorizontal: 15, 
  },
  icon: {
    height: 40,
    width: 45,
    backgroundColor: '#C7C7C7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  buttonContainer: {
    marginTop: 20, 
    alignItems: 'center', 
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Contact;
