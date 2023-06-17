import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const StatusBar = ({ status }) => {
  let icon, statusText, statusColor;

  switch (status) {
    case 'agree':
      icon = 'check';
      statusText = 'Agreed';
      statusColor = '#16a085';
      break;
    case 'disagree':
      icon = 'times';
      statusText = 'Disagreed';
      statusColor = '#f03434';
      break;
    default:
      icon = 'question';
      statusText = 'Pending';
      statusColor = '#f27935';
      break;
  }

  return (
    <View style={[styles.container, { backgroundColor: statusColor }]}>
      <Icon name={icon} style={styles.icon} />
      <Text style={styles.text}>{statusText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 27,
    width: 110,
    marginRight: 50,
    borderRadius: 8,
    borderColor: 'white',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: 'white',
    fontSize: 16,
    marginRight: 5,
  },
  text: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default StatusBar;