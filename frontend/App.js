import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Alert, Button } from 'react-native';
import axios from 'axios';

export default function App() {
  useEffect(() => {
    fetchUserProfiles();
  }, []);
  const [text, setText] = useState('');
  const [userProfiles, setUserProfiles] = useState([]);


  const handleInputChange = (inputText) => {
    setText(inputText);
  };

  const fetchUserProfiles = async () => {
    const people = await axios.get('http://roomie3.herokuapp.com/api/v1/search/');
    const data = people.data;
    setUserProfiles(data.people);
  }

  const updateUserProfiles = async () => {
    const people = await axios.get('http://roomie3.herokuapp.com/api/v1/search/?area=' + text);
    const data = people.data;
    setUserProfiles(data.people);
  }

  const handleButtonClick = () => {
    setUserProfiles([]);
    updateUserProfiles();
  };

  return (
    <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={handleInputChange}
        value={text}
        placeholder=" Search by location..." // Placeholder text
        placeholderTextColor="gray" // Placeholder text color
      />
      <Button title="Search" onPress={handleButtonClick} />
    </View>
      <View>
      {userProfiles.map((item, index) => (
        <View style={[styles.card, styles.shadowProp]} key={index}>
          <Text style={styles.heading}>{item.name}, {item.age}</Text>
          <Text>£{item.min_budget} - £{item.max_budget}</Text>
          <View style={styles.tag}>
            <Text>{item.location}</Text>
          </View>
        </View>
      ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 3,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginHorizontal: 5,
    width: '100%',
    marginVertical: 5,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  tag: {
    backgroundColor: '#03c9a9',
    alignSelf: 'flex-start',
    flexWrap: 'wrap',
    paddingHorizontal:10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:5
  },
  scrollView: {
    backgroundColor: '#eeeeee',
    marginHorizontal: 0
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: 'white'
  },
  textInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
  },
});
