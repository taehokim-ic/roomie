import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";

const SupportScreen = () => {
    const supportGroups = [
        {
          id: 1,
          name: "International Student Association",
          location: "London",
          description: "Connect with fellow international students and participate in cultural events.",
        },
        {
          id: 2,
          name: "Global Friendship Network",
          location: "Manchester",
          description: "Build friendships with students from around the world through social activities.",
        },
        {
          id: 3,
          name: "United Students Society",
          location: "Birmingham",
          description: "Join a supportive community of international and local students.",
        },
        {
          id: 4,
          name: "InterCultural Exchange Club",
          location: "Edinburgh",
          description: "Experience diverse cultures through interactive events and workshops.",
        },
        {
          id: 5,
          name: "International Women's Group",
          location: "Glasgow",
          description: "Empowering and supporting female international students in their journey.",
        },
        {
          id: 6,
          name: "Study Abroad Peer Mentors",
          location: "Leeds",
          description: "Receive guidance and mentorship from experienced study abroad students.",
        },
        {
          id: 7,
          name: "Global Career Development Society",
          location: "Oxford",
          description: "Get career guidance and opportunities for international students.",
        },
        {
          id: 8,
          name: "Cultural Awareness Society",
          location: "Cambridge",
          description: "Promote cultural understanding and appreciation through events and workshops.",
        },
      ];
      

    const renderSupportGroup = (group) => {
        return (
            <View key={group.id} style={styles.card}>
                <Text style={styles.groupName}>{group.name}</Text>
                <Text style={styles.groupLocation}>{group.location}</Text>
                <Text style={styles.groupDescription}>{group.description}</Text>
            </View>
        );
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Support Network Groups</Text>
            {supportGroups.map((group) => renderSupportGroup(group))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 16,
    },
    card: {
        backgroundColor: "#f5f5f5",
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
    },
    groupName: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
    groupLocation: {
        fontSize: 14,
        color: "#666",
    },
    groupDescription: {
        fontSize: 14,
        marginTop: 8,
        color: "#333",
    },
});

export default SupportScreen;
