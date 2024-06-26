import React, { useContext } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../theme-context';

const HomeScreen = () => {
  const { styles } = useContext(ThemeContext);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require('../assets/profile.png')} style={styles.profileImage} />
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome back,</Text>
          <Text style={styles.userName}>Eric Atsu</Text>
        </View>
        <View style={styles.circularContainer}>
          <Image source={require('../assets/search.png')} style={styles.searchIcon} />
        </View>
      </View>

      <View style={styles.cardContainer}>
        <Image source={require('../assets/card.png')} style={styles.cardImage} />
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.circularContainer}>
            <Image source={require('../assets/send.png')} style={styles.actionIcon} />
          </View>
          <Text style={styles.actionText}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.circularContainer}>
            <Image source={require('../assets/receive.png')} style={styles.actionIcon} />
          </View>
          <Text style={styles.actionText}>Receive</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.circularContainer}>
            <Image source={require('../assets/loan.png')} style={styles.actionIcon} />
          </View>
          <Text style={styles.actionText}>Loan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.circularContainer}>
            <Image source={require('../assets/topUp.png')} style={styles.actionIcon} />
          </View>
          <Text style={styles.actionText}>Topup</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.transactionsContainer}>
        <Text style={styles.transactionsHeader}>Transaction</Text>
        <TouchableOpacity>
          <Text style={styles.sellAllText}>Sell All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.transactionItem}>
        <View style={styles.circularContainer}>
          <Image source={require('../assets/apple.png')} style={styles.transactionIcon} />
        </View>
        <View style={styles.transactionDetails}>
          <Text style={styles.transactionText}>Apple Store</Text>
          <Text style={styles.transactionSubtext}>Entertainment</Text>
        </View>
        <Text style={styles.transactionAmount}>- $5,99</Text>
      </View>

      <View style={styles.transactionItem}>
        <View style={styles.circularContainer}>
          <Image source={require('../assets/spotify.png')} style={styles.transactionIcon} />
        </View>
        <View style={styles.transactionDetails}>
          <Text style={styles.transactionText}>Spotify</Text>
          <Text style={styles.transactionSubtext}>Music</Text>
        </View>
        <Text style={styles.transactionAmount}>- $12,99</Text>
      </View>

      <View style={styles.transactionItem}>
        <View style={styles.circularContainer}>
          <Image source={require('../assets/moneyTransfer.png')} style={styles.transactionIcon} />
        </View>
        <View style={styles.transactionDetails}>
          <Text style={styles.transactionText}>Money Transfer</Text>
          <Text style={styles.transactionSubtext}>Transaction</Text>
        </View>
        <Text style={styles.transactionAmount}>$300</Text>
      </View>

      <View style={styles.transactionItem}>
        <View style={styles.circularContainer}>
          <Image source={require('../assets/grocery.png')} style={styles.transactionIcon} />
        </View>
        <View style={styles.transactionDetails}>
          <Text style={styles.transactionText}>Grocery</Text>
          <Text style={styles.transactionSubtext}>Food</Text>
        </View>
        <Text style={styles.transactionAmount}>- $88</Text>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
