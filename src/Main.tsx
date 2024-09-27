import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProfileCard from './components/profileCard';

const Main = () => {
  return (
    <View style={styles.container}>
      <ProfileCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
});

export default Main;
