import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Image,
  ScrollView,
  Alert,
  PanResponder,
  Animated,
} from "react-native";
import { Text, Card, Button } from "@rneui/themed";
import { useState, useEffect } from "react";
import axios from "axios";

const MatchProfileCard = ({ match, onNext }) => {
  const { name, profile_url, bio, requirements, additional_info } = match;

  return (
    <View>
      <Card>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text h4>{match.name}</Text>
        </View>
        <Image
          source={{ uri: match.profile_url }}
          style={{
            width: 200,
            height: 200,
            borderRadius: 200 / 2,
            alignSelf: "center",
            marginTop: 20,
            marginBottom: 20,
          }}
        />
        <Card>
          <Card.Title>Bio</Card.Title>
          <Text>{match.bio}</Text>
        </Card>
        <Card>
          <Card.Title>Who am I looking for?</Card.Title>
          <Text>{match.requirements}</Text>
        </Card>
        <Card>
          <Card.Title>Additional information</Card.Title>
          <Text>{match.additional_info}</Text>
        </Card>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Button size="sm" type="clear" onPress={{}}>
            Translate
          </Button>
          <Button size="sm" type="clear" onPress={onNext}>
            Message
          </Button>
          <Button size="sm" type="clear" onPress={onNext}>
            Skip
          </Button>
        </View>
      </Card>
    </View>
  );
};

const MatchesScreen = ({ navigation }) => {
  const pan = useState(new Animated.ValueXY())[0];

  const panResponder = useState(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (_, gesture) => {
        if (gesture.dx > 120) {
          handleSkip();
        }
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      },
    })
  )[0];

  const cardStyle = {
    transform: [
      { translateX: pan.x },
      { translateY: pan.y },
      {
        rotate: pan.x.interpolate({
          inputRange: [-200, 0, 200],
          outputRange: ["-10deg", "0deg", "10deg"],
        }),
      },
    ],
  };

  const [matchProfiles, setMatchProfiles] = useState([
    {
      name: "John Doe",
      age: 25,
      bio: "I am a software engineer passionate about React Native.",
      lookingFor: "I am looking for a flatshare in London.",
      addInfo:
        "I have a peanut allergy, so please bear that in mind. I'm also a vegetarian, but I don't mind if you eat meat. I'm also a big fan of K-pop, so if you are too, that's a bonus!",
      img: require("../../assets/users/user-8.jpg"),
    },
    {
      name: "Jane Smith",
      age: 30,
      bio: "I love traveling and exploring new places.",
      lookingFor: "Looking to share a flat with someone in their 20s.",
      addInfo:
        "I have a peanut allergy, so please bear that in mind. I'm also a vegetarian, but I don't mind if you eat meat. I'm also a big fan of K-pop, so if you are too, that's a bonus!",
      img: require("../../assets/users/user-9.png"),
    },
    {
      name: "Rieko Smith",
      age: 25,
      bio: "I am a software engineer passionate about React Native.",
      lookingFor: "I am looking for a flatshare in London.",
      addInfo:
        "I have a peanut allergy, so please bear that in mind. I'm also a vegetarian, but I don't mind if you eat meat. I'm also a big fan of K-pop, so if you are too, that's a bonus!",
      img: require("../../assets/users/user-10.png"),
    },
    {
      name: "Diana Smith",
      age: 25,
      bio: "I am a software engineer passionate about React Native.",
      lookingFor: "I am looking for a flatshare in London.",
      addInfo:
        "I have a peanut allergy, so please bear that in mind. I'm also a vegetarian, but I don't mind if you eat meat. I'm also a big fan of K-pop, so if you are too, that's a bonus!",
      img: require("../../assets/users/user-11.png"),
    },
  ]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://roomie3.herokuapp.com/api/v1/profiles/recommeneded"
      );
      setMatchProfiles(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSkip = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const currentMatch = matchProfiles[currentIndex];

  return (
      <Animated.ScrollView style={cardStyle} {...panResponder.panHandlers}>
        <MatchProfileCard match={currentMatch} onNext={handleSkip} />
      </Animated.ScrollView>
  );
};

export default MatchesScreen;
