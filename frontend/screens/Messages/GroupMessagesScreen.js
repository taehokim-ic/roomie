import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import axios from 'axios';
import { generateUUID } from '../../context/uuid';
import { useChatContext } from '../../context/ChatContext';

const GroupMessagesScreen = ({navigation}) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data from API
    fetchUsers();
  }, []);

  const uuid = generateUUID();
  const {startGroupChat} = useChatContext();

  navigation.setOptions({
    headerRight: () => <ConfirmButton />,
    });

    const ConfirmButton = () => {
        return (
        <TouchableOpacity style={styles.button} onPress={createGroup}>
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>
        );
    }

  const createGroup = () => {
    const selectedUsers = users.filter((user) => user.isSelected);
    if (selectedUsers.length < 2) {
        alert('Please select at least 2 users to start a group chat');
        return;
    }
    if (selectedUsers.length > 4) {
        alert('Please select at most 4 users to start a group chat');
        return;
    }
    userIds = selectedUsers.map((user) => user.uuid);
    
    startGroupChat(userIds);
  }

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://roomie3.herokuapp.com/api/v1/matches?uuid=' + uuid);
      for (let i = 0; i < response.data.matches.length; i++) {
            let temp = response.data.matches[i];
            console.log(temp);
            const userData = await axios.get('http://roomie3.herokuapp.com/api/v1/person?uuid=' + temp.toString());
            console.log(userData.data);
            setUsers((users) => [...users, userData.data]);
        }

    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleCardPress = (userId) => {
    // Handle card press and change background color
    const updatedUsers = users.map((user) => {
      if (user.uuid === userId) {
        return { ...user, isSelected: !user.isSelected };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  const renderUserCard = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleCardPress(item.uuid)}>
        <View style={[styles.cardContainer, { backgroundColor: item.isSelected ? '#e3e3e3' : 'white' }]}>
          <Image source={{ uri: item.picture_url }} style={styles.profileImage} />
          <View style={styles.profileInfo}>
            <View style={styles.header}>
              <Text style={styles.name}>{truncateName(item.name)}</Text>
              {item.verified && (
                <View style={styles.badgeContainer}>
                  <Feather name="check" size={11} color="#ffffff" style={styles.checkIcon} />
                  <Text style={styles.verifiedText}>Verified</Text>
                </View>
              )}
            </View>
            <Text style={styles.subtitle}>{`${item.age} | ${item.pronouns}`}</Text>
            <Text style={styles.subtitle}>{`Institution: ${item.institution}`}</Text>
            <Text style={styles.subtitle}>{`Budget: £${item.min_budget} - £${item.max_budget}`}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.uuid.toString()}
        renderItem={renderUserCard}
        contentContainerStyle={styles.listContainer}
      />
    </View>
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
    paddingHorizontal: 10,
    marginRight: 8,
    color: '#333',
    borderRadius: 4,
    paddingTop: 4,
    paddingBottom: 4,
  },
  filterButton: {
    padding: 8,
    backgroundColor: '#f1f1f1',
    borderRadius: 4,
  },
  submitButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#027148',
    borderRadius: 4,
    marginLeft: 8,
  },
  submitButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonText: {
    color: '#1980e7',
    fontSize: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#888888',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  cardContainer: {
    backgroundColor: '#f7f5f5',
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#038aff',
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 4,
    position: 'absolute',
    left: 145
  },
  checkIcon: {
    color: '#ffffff',
    marginRight: 5,
  },
  verifiedText: {
    fontSize: 11,
    color: '#ffffff',
    fontWeight: 'bold',
    paddingRight: 2,
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
  noResults: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 100,
  },
});

export default GroupMessagesScreen;

