import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const VisaScreen = () => {
  const visaGuides = [
    {
      id: 1,
      subtitle: 'Duration',
      info: 'The Short-term Study Visa allows you to stay in the UK for a maximum period of 6 months for most courses. However, if you are studying an English language course, you can stay for up to 11 months.',
    },
    {
      id: 2,
      subtitle: 'Permitted Activities',
      info: 'Undertake a short course or study program, attend lectures or seminars as part of your course, take part in a research project, as long as it\'s not for more than 30 days, participate in an exchange program or educational visit, and take an English language course.',
    },
    {
      id: 3,
      subtitle: 'Restrictions',
      info: 'Work (including part-time or full-time employment), extend your stay beyond the visa duration, and switch to another type of visa from within the UK.',
    },
    {
      id: 4,
      subtitle: 'Health Insurance',
      info: ' It is advisable to have adequate health insurance coverage during your stay in the UK, as access to the National Health Service (NHS) may be limited for short-term students.',
    },
  ];

  const renderVisaGuideCard = ({ id, subtitle, info }) => {
    return (
      <View key={id} style={styles.card}>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text style={styles.info}>{info}</Text>
      </View>
    );
  };

  return (
    <ScrollView>
        <View style={styles.container}>
        {visaGuides.map(renderVisaGuideCard)}
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    height: 700,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  info: {
    fontSize: 14,
    color: '#666',
  },
});

export default VisaScreen;
