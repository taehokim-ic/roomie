import React, {useState, useEffect} from 'react';
import { View, FlatList, TouchableOpacity, Text, Image, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import axios from 'axios';

const SearchScreen = ({navigation}) => {

  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://roomie3.herokuapp.com/api/v1/people');
      setUsers(response.data);
    }
    catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleCardPress = (id) => {
    navigation.navigate('Profile', { uuid: id });
  };

  const renderCard = ({ item }) => (
    <TouchableOpacity onPress={() => handleCardPress(item.uuid)}>
      <View style={styles.cardContainer}>
        <Image source={{uri: item.picture_url}} style={styles.profileImage} />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.subtitle}>{`${item.age} | ${item.pronouns}`}</Text>
          <Text style={styles.subtitle}>{`Institution: ${item.institution}`}</Text>
          <Text style={styles.subtitle}>{`Preferred Location: ${item.preferred_location}`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Find your flatmates</Text>
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder="Search..." placeholderTextColor="#555" />
          <TouchableOpacity style={styles.filterButton}>
            <Feather name="sliders" size={20} color="#555" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <FlatList
          data={users}
          renderItem={renderCard}
          keyExtractor={item => item.uuid.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 16,
    borderBottomColor: '#efeff0',
    borderBottomWidth: 0.5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  searchInput: {
    flex: 1,
    height: 36,
    backgroundColor: '#f1f1f1',
    paddingHorizontal: 12,
    marginRight: 8,
    color: '#333',
    borderRadius: 4,
    paddingTop: 4,
    paddingBottom: 4,
  },
  filterButton: {
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 4,
  },
  submitButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#03c9a9',
    borderRadius: 4,
    marginLeft: 8,
  },
  submitButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#888888',
  },
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    paddingHorizontal: 16,
  },
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginTop: 10,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  profileInfo: {
    flexDirection: 'column',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 12,
    marginBottom: 4,
    color: '#888888',
  },
});

export default SearchScreen;
