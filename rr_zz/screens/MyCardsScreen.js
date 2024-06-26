import React, { useContext } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { ThemeContext } from '../theme-context';

const MyCardsScreen = () => {
  const { styles } = useContext(ThemeContext);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.transactionsHeader}>My Cards</Text>
      <View style={styles.cardContainer}>
        <Image source={require('../assets/card.png')} style={styles.cardImage} />
      </View>
    </ScrollView>
  );
};

export default MyCardsScreen;
