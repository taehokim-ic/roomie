import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.scrollView}>
      <View>
        <View style={[styles.card, styles.shadowProp]}>
          <View>
            <Text style={styles.heading}>
              Edward W.                                                 23
            </Text>
          </View>
          <Text>
            £1,500 - £2,300 pm
          </Text>
          <View style={styles.tag}>
            <Text>
              Student
            </Text>  
          </View>  
        </View>
  
        <View style={[styles.card, styles.shadowProp]}>
          <View>
            <Text style={styles.heading}>
              George C.                                                  21
            </Text>
          </View>
          <Text>
            £1,500 - £2,000 pm
          </Text>
          <View style={styles.tag}>
            <Text>
              Student
            </Text>  
          </View>
        </View>
  
        <View style={[styles.card, styles.shadowProp]}>
          <View>
            <Text style={styles.heading}>
              Maddie P.                                                  28
            </Text>
          </View>
          <Text>
            £1,600 - £2,200 pm
          </Text>
          <View style={styles.tag}>
            <Text>
              Student
            </Text>  
          </View>
        </View>
  
        <View style={[styles.card, styles.shadowProp]}>
          <View>
            <Text style={styles.heading}>
              Stuart G.                                                     23
            </Text>
          </View>
          <Text>
            £1,500 - £2,100 pm
          </Text>
          <View style={styles.tag}>
            <Text>
              Student
            </Text>  
          </View>
        </View>
  
        <View style={[styles.card, styles.shadowProp]}>
          <View>
            <Text style={styles.heading}>
              Stuart G.                                                     23
            </Text>
          </View>
          <Text>
            £1,500 - £2,100 pm
          </Text>
          <View style={styles.tag}>
            <Text>
              Student
            </Text>  
          </View>
        </View>
  
        <View style={[styles.card, styles.shadowProp]}>
          <View>
            <Text style={styles.heading}>
              Stuart G.                                                     23
            </Text>
          </View>
          <Text>
            £1,500 - £2,100 pm
          </Text>
          <View style={styles.tag}>
            <Text>
              Student
            </Text>  
          </View>
        </View>
  
        <View style={[styles.card, styles.shadowProp]}>
          <View>
            <Text style={styles.heading}>
              Stuart G.                                                     23
            </Text>
          </View>
          <Text>
            £1,500 - £2,100 pm
          </Text>
          <View style={styles.tag}>
            <Text>
              Student
            </Text>  
          </View>
        </View>
  
        <View style={[styles.card, styles.shadowProp]}>
          <View>
            <Text style={styles.heading}>
              Stuart G.                                                     23
            </Text>
          </View>
          <Text>
            £1,500 - £2,100 pm
          </Text>
          <View style={styles.tag}>
            <Text>
              Student
            </Text>  
          </View>
        </View>
  
        <View style={[styles.card, styles.shadowProp]}>
          <View>
            <Text style={styles.heading}>
              Stuart G.                                                     23
            </Text>
          </View>
          <Text>
            £1,500 - £2,100 pm
          </Text>
          <View style={styles.tag}>
            <Text>
              Student
            </Text>  
          </View>
        </View>
  
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 13,
  },
  card: {
    backgroundColor: '#F5F5F5',
    borderRadius: 100,
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
    backgroundColor: '#a9a9a9',
    width: 60,
    paddingHorizontal:3,
    borderRadius: 8
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 7,
  },
});
