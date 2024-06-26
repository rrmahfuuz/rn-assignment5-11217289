import React, { useContext } from 'react';
import {View, Text, Image, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../theme-context';

const StatisticsScreen = () => {
  const { styles } = useContext(ThemeContext);

  const transactions = [
    { id: 1, date: '2024-06-26', amount: -5.99, description: 'Apple Store' },
    { id: 2, date: '2024-06-25', amount: -12.99, description: 'Spotify' },
    { id: 3, date: '2024-06-24', amount: 300, description: 'Money Transfer' },
    { id: 4, date: '2024-06-23', amount: -88, description: 'Grocery' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.transactionsHeader}>Transaction Statistics</Text>
      <View style={styles.transactionListContainer}>
        {transactions.map(transaction => (
          <View key={transaction.id} style={styles.transactionItem}>
            <Text style={styles.transactionText}>{transaction.date}</Text>
            <Text style={styles.transactionText}>${transaction.amount.toFixed(2)}</Text>
            <Text style={styles.transactionText}>{transaction.description}</Text>
          </View>
        ))}
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
        <Text style={styles.transactionText}>Apple Store</Text>
        <Text style={styles.transactionAmount}>- $5,99</Text>
      </View>

      <View style={styles.transactionItem}>
        <View style={styles.circularContainer}>
          <Image source={require('../assets/spotify.png')} style={styles.transactionIcon} />
        </View>
        <Text style={styles.transactionText}>Spotify</Text>
        <Text style={styles.transactionAmount}>- $12,99</Text>
      </View>

      <View style={styles.transactionItem}>
        <View style={styles.circularContainer}>
          <Image source={require('../assets/moneyTransfer.png')} style={styles.transactionIcon} />
        </View>
        <Text style={styles.transactionText}>Money Transfer</Text>
        <Text style={styles.transactionAmount}>$300</Text>
      </View>

      <View style={styles.transactionItem}>
        <View style={styles.circularContainer}>
          <Image source={require('../assets/grocery.png')} style={styles.transactionIcon} />
        </View>
        <Text style={styles.transactionText}>Grocery</Text>
        <Text style={styles.transactionAmount}>- $88</Text>
      </View>
    </View>
  );
};

export default StatisticsScreen;



