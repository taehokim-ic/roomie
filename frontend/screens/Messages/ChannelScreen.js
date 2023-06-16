import {View, Text, SafeAreaView, FlatList, TouchableOpacity, StyleSheet, Image, ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useChatContext} from '../../context/ChatContext';
import { ChannelList } from 'stream-chat-expo';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import { generateUUID } from '../../context/uuid';

const ChannelScreen = ({navigation}) => {
    const [loading, setLoading] = useState(false);
    const [requests, setRequests] = useState([]);

    const uuid = generateUUID();

    const browseMatches = () => {
        navigation.navigate('Your Connection Requests');
    }

    const fetchRequests = async () => {
        try {
          const response = await axios.get('http://roomie3.herokuapp.com/api/v1/connection_reqs?uuid=' + uuid);
          const userData = [];
          for (let i = 0; i < response.data.connection_reqs.length; i++) {
            const userRequest = await axios.get('http://roomie3.herokuapp.com/api/v1/person?uuid=' + response.data.connection_reqs[i])
            userData.push(userRequest.data);
          }
          let i = 4;
          if (userData.length < 4) {
            i = userData.length;
          }
          const res = userData.slice(0,i).map((user) => {
            return {
              uuid: user.uuid,
              userImg: {uri: user.picture_url},
            }
          });
          console.log(res);
          setRequests(res);
          setLoading(true);
        }
        catch (error) {
          console.log(error);
        }
    };
    
    useEffect(() => {
        fetchRequests();
    }, []);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            fetchRequests();
        });
        return unsubscribe;
    }, []);

    const renderHeader = () => {
        return (
            <View>
            { loading ? (
            <View style={styles.container2}>
            <View style={styles.card}>
                { requests.length > 0 ? 
                    (
                        <View style={styles.cardContent}>
                            <View>
                                <Text style={styles.text}>People who sent you connection requests</Text>
                                <FlatList
                                horizontal
                                contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
                                data={requests}
                                keyExtractor={item => item.uuid}
                                renderItem={({ item }) => (
                                    <View style={styles.circularImageContainer}>
                                    <TouchableOpacity onPress={() => navigation.navigate('Matches', {uuid : item.uuid})}>
                                        <Image source={item.userImg} style={styles.userImage} />
                                    </TouchableOpacity>
                                    </View>
                                )}
                                ListFooterComponent={() => (
                                    <TouchableOpacity
                                    style={styles.arrowContainer}>
                                    <Icon name="chevron-right" size={20} color="black" onPress={browseMatches} />
                                    </TouchableOpacity>
                                )}
                                />
                            </View>
                        </View>
                    ) : (
                        <View>
                            <Text style={styles.text}>You do not have any connection requests currently.</Text>
                        </View>
                    )
                }
            </View>
            </View> ) : (
                <View style={{height: 100, justifyContent: 'center', alignItems: 'center'}}>
                    <ActivityIndicator/>
                </View>
            )}
            </View>
          );
    };

    const {currentChannel, setCurrentChannel, chatClient} = useChatContext();

    const onSelect = (channel) => {
        setCurrentChannel(channel);
        const members = Object.keys(channel.state.members);
        const otherUUID = members.filter((member) => member !== chatClient.user.id)[0];
        console.log(otherUUID);
        navigation.navigate('Compatible', {uuid: otherUUID});
    }

    return (
            <View style={styles.container}>
              {renderHeader()}
              <ChannelList onSelect={onSelect}/>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
      },
      container2: {
        alignItems: 'center', 
      },
      card: {
        width: 700,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        paddingTop: 6,
        marginBottom: 6,
      },
      cardContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      circularImageContainer: {
        width: 60,
        height: 60,
        borderRadius: 40,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 7.5,
      },
      userImage: {
        width: 55,
        height: 55,
        borderRadius: 40,
        borderWidth: 0.01,
      },
      text: {
        marginBottom:5,
        padding: 3,
        fontSize: 15,
      },
      arrowContainer: {
        marginTop: 20,
        alignItems: 'center',
      },
      arrowText: {
        fontSize: 14,
        color: 'black',
        // fontWeight: 'bold',
      },
});

export default ChannelScreen; 