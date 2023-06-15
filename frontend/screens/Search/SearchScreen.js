import React, {useState, useEffect} from 'react';
import { View, FlatList, TouchableOpacity, Text, Image, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import axios from 'axios';
import { Dropdown } from 'react-native-element-dropdown';
import { FontAwesome } from '@expo/vector-icons';

const SearchScreen = ({navigation}) => {

  const [users, setUsers] = useState([]);
  const [showFilterCard, setShowFilterCard] = useState(false);
  const [language, setLanguage] = useState('');
  const [institution, setInstitution] = useState('');
  const [location, setLocation] = useState('');
  const [smoker, setSmoker] = useState('');
  const [searchInput, setSearchInput] = useState('');

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://roomie3.herokuapp.com/api/v1/people?current_user_uuid=05b3bbd1-4e75-4ad3-9d71-4c4c8d08717d');
      setUsers(response.data);
      console.log("Fetched users");
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
    setSearchInput('');
  };

  const handleSearchButtonPress = async () => {
    setShowFilterCard(false);
    let url = 'http://roomie3.herokuapp.com/api/v1/people?current_user_uuid=05b3bbd1-4e75-4ad3-9d71-4c4c8d08717d&institution=' + searchInput
    const response = await axios.get(url);
    setUsers(response.data);
  };

  const handleCardPress = (id) => {
    navigation.navigate('Profile', { uuid: id });
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

  const handleTextBoxChange = (text) => {
    setSearchInput(text);
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
      url += `&location=${location}`;
    }
    if (smoker) {
      url += `&smoker=${smoker}`;
    }
    const response = await axios.get(url);
    setShowFilterCard(false);
    setUsers(response.data);
  };

  const languages = [
    { label: 'Mandarin', value: 'Mandarin' },
    { label: 'Korean', value: 'Korean' },
    { label: 'Japanese', value: 'Japanese' },
    { label: 'French', value: 'French' },
    { label: 'Spanish', value: 'Spanish' },
  ];

  const institutions = [
    { label: 'EF London', value: 'EF London' },
    { label: 'Berlitz London', value: 'Berlitz London' },
    { label: 'International House London', value: 'International House London' },
    { label: 'British Study Centres London', value: 'British Study Centres London' },
    { label: 'St Giles London Central', value: 'St Giles London Central' },
    { label: 'The Language Gallery - London', value: 'The Language Gallery - London' },
    { label: 'LSI London Central', value: 'LSI London Central' },
    { label: 'Regent London', value: 'Regent London' },
    { label: 'Stafford House London', value: 'Stafford House London' },
    { label: 'King\'s English School London', value: 'King\s English School London' },
  ];

  // const locations = [
  //   { label: 'London', value: 'London' },
  //   { label: 'EF London', value: 'EF London' },
  //   { label: 'Stafford House London', value: 'Stafford House London' },
  //   { label: 'English', value: 'English' },
  //   { label: 'French', value: 'French' },
  //   { label: 'German', value: 'German' },
  //   { label: 'Cantonese', value: 'Cantonese' },
  //   { label: 'Arabic', value: 'Arabic' },
  // ];

  const smokers = [
    { label: 'Yes', value: true },
    { label: 'No', value: false },
  ];

  const renderFilterCard = () => {
    if (!showFilterCard) return null;

    return (
      <View style={styles.filterCard}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Filters</Text>
            <Text style={styles.filter}>Language:</Text>
            <View style={styles.container}>
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              iconStyle={styles.iconStyle}
              data={languages}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={'Please select...'}
              value={language}
              onChange={(item) => setLanguage(item.value)}
            />
            </View>

            <Text style={styles.filter}>Institution:</Text>
            <View style={styles.container}>
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              iconStyle={styles.iconStyle}
              data={institutions}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={'Please select...'}
              value={institution}
              onChange={(item) => setInstitution(item.value)}
            />
            </View>

            {/* <Text style={styles.filter}>Location</Text>
            <View style={styles.container}>
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              iconStyle={styles.iconStyle}
              data={locations}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={'Please select...'}
              value={location}
              onChange={(item) => setLocation(item.value)}
            />
            </View> */}

            <Text style={styles.filter}>Smoker?</Text>
            <View style={styles.container}>
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              iconStyle={styles.iconStyle}
              data={smokers}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={'Please select...'}
              value={smoker}
              onChange={(item) => setSmoker(item.value)}
            />
            </View>

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
          <TextInput style={styles.searchInput} value={searchInput} onChangeText={handleTextBoxChange} placeholder="Search for your institution..." placeholderTextColor="#555" />
          <TouchableOpacity style={styles.filterButton} onPress={handleFilterButtonPress}>
            <Feather name="sliders" size={20} color="#555" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.submitButton} onPress={handleSearchButtonPress}>
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
    backgroundColor: '#027148',
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
    paddingHorizontal: 16,
    backgroundColor: '#f2f2f2',
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
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
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
    backgroundColor: '#027148',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginTop: 30,
    marginBottom: 5,
    width: 310,
  },
  applyButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  cancelButton: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginTop: 4,
    width: 310,
    borderColor: '#000000',
    borderWidth: 0.5,
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
  },
  filter: {
    fontSize: 16,
    paddingTop: 15,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'black',
  },
  dropdown: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 4,
    marginTop: 4,
    marginLeft: -20,
  },
  dropdownSelected: {
    backgroundColor: '#00FF00', // Green color when selected
  },
});

export default SearchScreen;
