import React from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const TemporaryHousing = ({ navigation }) => {

  const openTFlWebsite = ({url}) => {
    Linking.openURL(url)
      .catch((err) => console.error('An error occurred', err));
  }

  const sections = [
    {
      id: 1,
      image: require('../../assets/resources/airbnb.jpg'),
      title: 'Airbnb',
      description: 'Explore short term renatal solutions with Airbnb',
      url: 'https://www.airbnb.co.uk/s/London/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2023-07-01&monthly_length=3&price_filter_input_type=2&price_filter_num_nights=5&channel=EXPLORE&date_picker_type=calendar&query=London&place_id=ChIJdd4hrwug2EcRmSrV3Vo6llI&source=structured_search_input_header&search_type=autocomplete_click',
    },
    {
      id: 2,
      image: require('../../assets/resources/booking.jpg'),
      title: 'Booking.com',
      description: 'Global travel platform with diverse accommodations, easy booking process, and real guest reviews.',
      url: 'https://tfl.gov.uk/fares/find-fares',
    },
    {
      id: 3,
      image: require('../../assets/resources/hostelworld.jpg'),
      title: 'HostelWorld.com',
      description: 'Download the official TFL oyster and contactless app to enhance your experience',
      url: 'https://www.hostelworld.com/s?q=London,%20England&country=England&city=London&type=city&id=3&from=2023-06-17&to=2023-06-20&guests=2&page=1',
    },
  ];

  const renderSection = (section) => {
    return (
      <TouchableOpacity
        key={section.id}
        style={styles.sectionCard}
        onPress={() => openTFlWebsite({url: section.url})}
      >
        <Image source={section.image} style={styles.sectionImage} />
        <View style={styles.sectionInfo}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          <Text style={styles.sectionDescription}>{section.description}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 30, alignSelf: 'center' }}>
              Just moved and have nowhere to stay? Try these options!
            </Text>
            <View>
                {sections.map((section) => renderSection(section))}
            </View>
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  sectionCard: {
    flexDirection: 'row',
    marginBottom: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
  },
  sectionImage: {
    width: 80,
    height: 80,
    borderRadius: 4,
    marginRight: 16,
  },
  sectionInfo: {
    flex: 1,
  },
  sectionTitle: {
    marginTop: 4,
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionDescription: {
    marginTop: 5,
    fontSize: 14,
    color: '#666',
  },
  gradient: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
  },
});

export default TemporaryHousing;
