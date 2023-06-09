import React from 'react';
import { View, FlatList, Dimensions, StyleSheet, Touchable } from 'react-native';
import { NativeBaseProvider, Box, Text, extendTheme, Image } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SearchButton from '../../components/SearchButton';
import GearIconButton from '../../components/GearIconButton';

const data = [
  {
    id: '1',
    name: 'John D',
    age: '25',
    pronouns: 'He/Him',
    institution: 'UCL',
    nationality: 'Estonian',
    image: require('../../assets/users/user-1.jpg'),
  },
  {
    id: '2',
    name: 'Finlay W.',
    age: '20',
    pronouns: 'He/Him',
    institution: 'LSE',
    nationality: 'Portugese',
    image: require('../../assets/users/user-2.jpg'),
  },
  {
    id: '3',
    name: 'Jane S.',
    age: '28',
    pronouns: 'They/Them',
    institution: 'Imperial',
    nationality: 'Latvian',
    image: require('../../assets/users/user-3.jpg'),
  },
  {
    id: '4',
    name: 'Harry S.',
    age: '22',
    pronouns: 'He/Him',
    institution: 'Imperial',
    nationality: 'Australian',
    image: require('../../assets/users/user-4.jpg'),
  },
  {
    id: '5',
    name: 'Jacob L.',
    age: '23',
    pronouns: 'He/Him',
    institution: 'UCL',
    nationality: 'French',
    image: require('../../assets/users/user-5.jpg'),
  },
  {
    id: '6',
    name: 'Leah A.',
    age: '28',
    pronouns: 'They/Them',
    institution: 'UCL',
    nationality: 'German',
    image: require('../../assets/users/user-6.jpg'),
  },
  {
    id: '7',
    name: 'Brett F.',
    age: '25',
    pronouns: 'They/Them',
    institution: 'LSE',
    nationality: 'Persian',
    image: require('../../assets/users/user-7.jpg'),
  },
];

const SearchScreen = () => {
  const windowWidth = Dimensions.get('window').width;

  const navigation = useNavigation();

  const handleCardPress = ({id}) => {
    navigation.navigate('LoadProfile');
  }

  const handleSearchButtonPress = () => {
    navigation.navigate('MainFilter');
  }

  const handleGearIconButtonPress = () => {
    navigation.navigate('SearchFilter')
  }

  const handleListScroll = () => {
    
  }

  const renderCard = ({ item }) => (
    <TouchableOpacity onPress={() => handleCardPress(item.id)}>
      <Box
        alignSelf={'center'}
        flexDirection="row"
        bg="white" 
        shadow={2}
        rounded="lg"
        p={4}
        mb={4}
        borderColor={'gray'}
        borderWidth={0.25}
        width={windowWidth * 0.92}
        height={140}
      >
        <Image
          source={item.image}
          alt="Profile Picture"
          width={120}
          height={120}
          borderRadius={8}
          alignSelf="center"
          marginRight={4}
        />
        <View flex={1}>
          <View flexDirection="row" justifyContent="space-between" marginBottom={4}>
            <Text fontSize={18} fontWeight="bold" flex={1} textAlign="left">{item.name}</Text>
            <Text flexShrink={1} textAlign="left">{item.age}</Text>
          </View>
          <Text fontSize={12} marginBottom={2} textAlign="left">{"Prounouns: " + item.pronouns}</Text>
          <Text fontSize={12} marginBottom={2} textAlign="left">{"Institution: " + item.institution}</Text>
          <Text fontSize={12} marginBottom={2} textAlign="left">{'Nationality: ' + item.nationality}</Text>
        </View>
      </Box>
    </TouchableOpacity>
  );

  return (
    <NativeBaseProvider>
      <View>
        <SearchButton onPress={handleSearchButtonPress} title="Enter institution"/>
        <GearIconButton onPress={handleGearIconButtonPress} />
      </View>
      <View style={styles.container}>
        <FlatList
          onScroll={handleListScroll}
          data={data}
          renderItem={renderCard}
          keyExtractor={(item) => item.id}
        />
      </View>
  </NativeBaseProvider>
  )
};

const styles = StyleSheet.create({
  container: {
    height: '80%',
    width: '100%',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: '25%',
    backgroundColor: '#F2F2F2'
  }
})

export default SearchScreen;