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
    const people = await axios.get('http://127.0.0.1:8000/api/v1/search/?area=Manchester');
    const data = people.data;
    // const jsondata = people.json()
    // const people = [
    //   { name: "Edward W", minBudget: 1500, maxBudget: 2300, location: "London", age: 23},
    //   { name: "John S", minBudget: 1200, maxBudget: 2000, location: "London", age: 24},
    //   { name: "Samuel K", minBudget: 1700, maxBudget: 2050, location: "London", age: 25},
    //   { name: "Ryan G", minBudget: 1800, maxBudget: 2200, location: "Manchester", age: 26},
    //   { name: "Pete M", minBudget: 1700, maxBudget: 2100, location: "Hull", age: 27},
    //   { name: "George D", minBudget: 1200, maxBudget: 1700, location: "Southampton", age: 27},
    //   { name: "Simon A", minBudget: 1400, maxBudget: 1800, location: "London", age: 27}
    // ]
    setUserProfiles(data.people);
  }

  const updateUserProfiles = async () => {
    const people = await axios.get('http://127.0.0.1:8000/api/v1/search/?area=' + text);
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
    backgroundColor: '#F5F5F5',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 25,
    width: '100%',
    marginVertical: 10,
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
    backgroundColor: 'white',
    marginHorizontal: 7,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30
  },
  textInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
  },
});
