import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const FilterButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name="filter-outline" size={24} color="#006600" />
    </TouchableOpacity>
  );
};

const styles = {
  container: {
    position: 'absolute',
    marginTop: 61,
    marginLeft: 316,
  },
};

export default FilterButton;
