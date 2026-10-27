import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import { roommates } from '../../data/roommates';
import { Roommate } from '../../types';

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;

type Props = {};

const ProfileScreen: React.FC<Props> = () => {
  const route = useRoute<ProfileScreenRouteProp>();
  const navigation = useNavigation();
  const { roommateId } = route.params;

  const roommate = roommates.find(r => r.id === roommateId) as Roommate;

  if (!roommate) {
    return (
      <View style={styles.centered}>
        <Text>Roommate not found.</Text>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>
      <View style={styles.avatarPlaceholder}>
        <Text style={styles.avatarText}>{roommate.name.charAt(0)}</Text>
      </View>
      <Text style={styles.name}>{roommate.name}, {roommate.age}</Text>
      <Text style={styles.bio}>{roommate.bio}</Text>
      <Text style={styles.sectionTitle}>Interests</Text>
      <View style={styles.interestsContainer}>
        {roommate.interests.map((interest, idx) => (
          <View key={idx} style={styles.interestBadge}>
            <Text style={styles.interestText}>{interest}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.score}>Compatibility Score: {roommate.compatibilityScore}%</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  backText: {
    color: '#6c63ff',
    fontSize: 16,
  },
  avatarPlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#6c63ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  avatarText: {
    color: '#fff',
    fontSize: 48,
    fontWeight: '600',
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
  },
  bio: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  interestsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 16,
  },
  interestBadge: {
    backgroundColor: '#e0e0ff',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    margin: 4,
  },
  interestText: {
    color: '#4a4a8f',
    fontSize: 13,
  },
  score: {
    fontSize: 16,
    fontWeight: '500',
    color: '#6c63ff',
    marginTop: 12,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreen;
