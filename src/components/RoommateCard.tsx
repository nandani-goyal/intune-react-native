import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Roommate } from '../../types';

type Props = {
  roommate: Roommate;
  onPress: (id: string) => void;
};

const RoommateCard: React.FC<Props> = ({ roommate, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(roommate.id)}>
      <View style={styles.avatarPlaceholder}>
        {/* Placeholder for avatar */}
        <Text style={styles.avatarText}>{roommate.name.charAt(0)}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>{roommate.name}, {roommate.age}</Text>
        <Text style={styles.bio} numberOfLines={2}>{roommate.bio}</Text>
        <Text style={styles.score}>Compatibility: {roommate.compatibilityScore}%</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  avatarPlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#6c63ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  bio: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  score: {
    marginTop: 4,
    fontSize: 13,
    color: '#6c63ff',
    fontWeight: '500',
  },
});

export default RoommateCard;
