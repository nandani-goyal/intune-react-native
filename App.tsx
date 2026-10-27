import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import DiscoverScreen from './src/screens/DiscoverScreen';
import ProfileScreen from './src/screens/ProfileScreen';

export type Screen = 'Login' | 'Discover' | 'Profile';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('Login');
  const [selectedRoommateId, setSelectedRoommateId] = useState<string | null>(null);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Login':
        return <LoginScreen onLoginSuccess={() => setCurrentScreen('Discover')} />;
      case 'Discover':
        return (
          <DiscoverScreen
            onSelectRoommate={id => {
              setSelectedRoommateId(id);
              setCurrentScreen('Profile');
            }}
          />
        );
      case 'Profile':
        return (
          <ProfileScreen
            roommateId={selectedRoommateId!}
            onBack={() => setCurrentScreen('Discover')}
          />
        );
      default:
        return null;
    }
  };

  return <SafeAreaView style={styles.container}>{renderScreen()}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default App;
