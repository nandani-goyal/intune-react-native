import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import RoommateCard from '../components/RoommateCard';
import { roommates } from '../data/roommates';
import { Roommate } from '../../types';

type Props = {
  onSelectRoommate: (id: string) => void;
};

const DiscoverScreen: React.FC<Props> = ({ onSelectRoommate }) => {
  const renderItem = ({ item }: { item: Roommate }) => (
    <RoommateCard roommate={item} onPress={onSelectRoommate} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Discover Roommates</Text>
      <FlatList
        data={roommates}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  list: {
    paddingBottom: 16,
  },
});

export default DiscoverScreen;
