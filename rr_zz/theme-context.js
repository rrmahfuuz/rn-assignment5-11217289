import React, { createContext, useState } from 'react';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';

export const ThemeContext = createContext();

const MyDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'blue',
    background: 'white',
    border:'white'
  },
};

const MyDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: 'blue',
    background: 'black',
    text: 'white',
    card:'#2a2744',
    border:'#2a2744',
    header:'#2a2744',
    tabBar:'#1c1c33',
  },
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const themeData = {
    theme,
    toggleTheme,
    styles: theme === 'light' ? lightStyles : darkStyles,
    navigationTheme: theme === 'light' ? MyDefaultTheme : MyDarkTheme,
  };

  return <ThemeContext.Provider value={themeData}>{children}</ThemeContext.Provider>;
};

const lightStyles = {
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  welcomeContainer: {
    flex: 1,
    marginLeft: 10,
  },
  welcomeText: {
    fontSize: 16,
    color: '#555',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  cardContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  cardImage: {
    width: 400,
    height: 200,
    resizeMode: 'contain',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    alignItems: 'center',
  },
  circularContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
  },
  actionIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  actionText: {
    marginTop: 8,
    fontSize: 14,
  },
  transactionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  transactionsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sellAllText: {
    color: '#4070f5',
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  transactionIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  transactionDetails:{
    flex:1,
    flexDirection: 'column',
    alignItems:'left'
  },
  transactionText: {
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
    marginTop:6,
    marginBottom:-2,
  },
  transactionSubtext: {
    fontSize: 13.5,
    color: '#555',
    flex: 1,
    marginLeft: 10,
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  settingsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  settingsText: {
    fontSize: 16,
    color: '#000',
  },
};

const darkStyles = {
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#2a2744',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  welcomeContainer: {
    flex: 1,
    marginLeft: 10,
  },
  welcomeText: {
    fontSize: 16,
    color: 'white',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
      color: 'white'
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  cardContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  cardImage: {
    width: 400,
    height: 200,
    resizeMode: 'contain',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    alignItems: 'center',
  },
  circularContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5c6170',
  },
  actionIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  actionText: {
    marginTop: 8,
    fontSize: 14,
    color: 'white'
  },
  transactionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  transactionsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'white'
  },
  sellAllText: {
    color: 'blue',
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  transactionIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  transactionDetails:{
    flex:1,
    flexDirection: 'column',
    alignItems:'left'
  },
  transactionText: {
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
    color: 'white',
    marginTop:6,
    marginBottom:-2,
  },
  transactionSubtext: {
    fontSize: 13.5,
    color: '#e0e0e0',
    flex: 1,
    marginLeft: 10,
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },
  settingsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  settingsText: {
    fontSize: 16,
    color: '#fff',
  },
};
