import React, { useContext } from 'react';
import { View, Text, Switch } from 'react-native';
import { ThemeContext } from '../theme-context';

const SettingsScreen = () => {
  const { theme, toggleTheme, styles } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <View style={styles.settingsItem}>
        <Text style={styles.settingsText}>Language</Text>
      </View>
      <View style={styles.settingsItem}>
        <Text style={styles.settingsText}>My Profile</Text>
      </View>
      <View style={styles.settingsItem}>
        <Text style={styles.settingsText}>Contact Us</Text>
      </View>
      <View style={styles.settingsItem}>
        <Text style={styles.settingsText}>Change Password</Text>
      </View>
      <View style={styles.settingsItem}>
        <Text style={styles.settingsText}>Privacy Policy</Text>
      </View>
      <View style={styles.settingsItem}>
        <Text style={styles.settingsText}>Theme</Text>
        <Switch value={theme === 'dark'} onValueChange={toggleTheme} />
      </View>
    </View>
  );
};

export default SettingsScreen;
