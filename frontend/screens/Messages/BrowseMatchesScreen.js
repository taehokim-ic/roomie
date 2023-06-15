import React, {useState, useEffect} from 'react';
import { View, FlatList, TouchableOpacity, Text, Image, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import axios from 'axios';

const BrowseMatchesScreen = ({navigation}) => {

  const [users, setUsers] = useState([]);
  const [showFilterCard, setShowFilterCard] = useState(false);
  const [language, setLanguage] = useState('');
  const [institution, setInstitution] = useState('');
  const [location, setLocation] = useState('');
  const [smoker, setSmoker] = useState('');

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://roomie3.herokuapp.com/api/v1/people?current_user_uuid=05b3bbd1-4e75-4ad3-9d71-4c4c8d08717d');
      setUsers(response.data);
    }
    catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleFilterButtonPress = () => {
    setShowFilterCard(!showFilterCard);
  };

  const handleCardPress = (id) => {
    
  };

  const clearFilter = async () => {
    setLanguage('');
    setInstitution('');
    setLocation('');
    setSmoker('');
    let url = 'http://roomie3.herokuapp.com/api/v1/people?current_user_uuid=05b3bbd1-4e75-4ad3-9d71-4c4c8d08717d';
    const response = await axios.get(url);
    setShowFilterCard(false);
    setUsers(response.data);
  };

  const applyFilter = async () => {
    let url = 'http://roomie3.herokuapp.com/api/v1/people?current_user_uuid=05b3bbd1-4e75-4ad3-9d71-4c4c8d08717d';
    if (language) {
      url += `&language=${language}`;
    }
    if (institution) {
      url += `&institution=${institution}`;
    }
    if (location) {
      url += '&location=${location}';
    }
    if (smoker) {
      url += '&smoker=${smoker}';
    }
    console.log(url);
    const response = await axios.get(url);
    setShowFilterCard(false);
    setUsers(response.data);
  }

  const renderFilterCard = () => {
    if (!showFilterCard) return null;

    return (
      <View style={styles.filterCard}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Filter</Text>
            <TextInput
              style={styles.input}
              placeholder="Language"
              value={language}
              onChangeText={setLanguage}
            />
            <TextInput
              style={styles.input}
              placeholder="Institution"
              value={institution}
              onChangeText={setInstitution}
            />
            <TextInput
              style={styles.input}
              placeholder="Location"
              value={location}
              onChangeText={setLocation}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Smoker"
              value={smoker}
              onChangeText={setSmoker}
            />
            <TouchableOpacity style={styles.applyButton} onPress={applyFilter}>
              <Text style={styles.applyButtonText}>Apply</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={clearFilter}>
            <Text style={styles.cancelButtonText}>Clear Filters</Text>
          </TouchableOpacity>
          </View>
      </View>
    );
  };

  const renderCard = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Matches', {uuid : item.uuid})}>
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
      <View style={styles.container}>
        <FlatList
          data={users}
          renderItem={renderCard}
          keyExtractor={item => item.uuid.toString()}
        />
      </View>
      {renderFilterCard()}
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
    fontSize: 20,
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
  filterCard: {
    backgroundColor: 'white',
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: '#95a5a6',
    padding: 16,
    marginTop: 16,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    elevation: 4,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  filterCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  filterSection: {
    marginBottom: 16,
  },
  filterSectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  applyFilterButton: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  applyFilterButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '100%',
    alignContent: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  applyButton: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  applyButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  cancelButton: {
    backgroundColor: '#dc3545',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginTop: 4,
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

export default BrowseMatchesScreen;
