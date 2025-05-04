// LeafEyeMainMenu.jsx
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  ScrollView, 
  SafeAreaView, 
  StatusBar,
  Image,
  StyleSheet,
  Platform
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// SVG icons as XML strings
const iconLeaf = `
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M11 20A7 7 0 0 1 4 13C4 9.25 7 6 11 7h1a8 8 0 0 0 8 8c0 4.75-3.25 7.75-7 7.75h-2z"/>
  <path d="M6.59 11.41a4.07 4.07 0 0 0 0 5.66 4.07 4.07 0 0 0 5.66 0"/>
  <path d="M5 10c4.58-3.25 6.25-3.17 15-5"/>
</svg>
`;

const iconSearch = `
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="11" cy="11" r="8"/>
  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
</svg>
`;

const iconCamera = `
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
  <circle cx="12" cy="13" r="3"/>
</svg>
`;

const iconMessage = `
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
</svg>
`;

const iconBook = `
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
</svg>
`;

const iconUser = `
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
  <circle cx="12" cy="7" r="4"/>
</svg>
`;

const iconBell = `
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
  <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
</svg>
`;

const LeafEyeMainMenu = () => {
  const [notificationCount, setNotificationCount] = useState(3);
  const insets = useSafeAreaInsets();
  
  const menuItems = [
    {
      title: 'My Plants',
      icon: iconLeaf,
      iconColor: '#4CAF50',
      description: 'Track and manage your plant collection'
    },
    {
      title: 'Identify Disease',
      icon: iconCamera,
      iconColor: '#FF5722',
      description: 'Scan and detect plant diseases'
    },
    {
      title: 'Plant Doctor',
      icon: iconMessage,
      iconColor: '#2196F3',
      description: 'Chat with our AI plant expert'
    },
    {
      title: 'Plant Library',
      icon: iconBook,
      iconColor: '#9C27B0',
      description: 'Browse plant care guides'
    }
  ];

  const recentPlants = [
    { name: 'Monstera Deliciosa', status: 'Healthy', lastWatered: '2 days ago' },
    { name: 'Fiddle Leaf Fig', status: 'Needs water', lastWatered: '7 days ago' },
    { name: 'Snake Plant', status: 'Healthy', lastWatered: '12 days ago' }
  ];

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar barStyle="light-content" backgroundColor="#43A047" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.appTitle}>Leaf Eye</Text>
            <Text style={styles.greeting}>Good afternoon, Gardener!</Text>
          </View>
          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.notificationButton}>
              <SvgXml xml={iconBell} width={28} height={28} color="#FFFFFF" />
              {notificationCount > 0 && (
                <View style={styles.notificationBadge}>
                  <Text style={styles.notificationText}>{notificationCount}</Text>
                </View>
              )}
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileButton}>
              <SvgXml xml={iconUser} width={26} height={26} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Search bar */}
        <TouchableOpacity style={styles.searchBar}>
          <SvgXml xml={iconSearch} width={20} height={20} color="#4CAF50" />
          <Text style={styles.searchText}>Search plants or symptoms...</Text>
        </TouchableOpacity>
      </View>

      {/* Quick Actions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <ScrollView 
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.quickActionsScrollContent}
        >
          {menuItems.map((item, index) => (
            <TouchableOpacity 
              key={index}
              style={styles.quickActionItem}
            >
              <SvgXml xml={item.icon} width={32} height={32} color={item.iconColor} />
              <Text style={styles.quickActionText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Recent Plants */}
      <View style={styles.recentPlantsSection}>
        <Text style={styles.sectionTitle}>Recent Plants</Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.recentPlantsContent}
        >
          {recentPlants.map((plant, index) => (
            <TouchableOpacity 
              key={index}
              style={styles.plantCard}
            >
              <View style={styles.plantIconContainer}>
                <SvgXml xml={iconLeaf} width={32} height={32} color="#4CAF50" />
              </View>
              <View style={styles.plantInfo}>
                <Text style={styles.plantName}>{plant.name}</Text>
                <View style={styles.plantStatusRow}>
                  <Text style={[
                    styles.plantStatus,
                    plant.status === 'Healthy' ? styles.statusHealthy : styles.statusWarning
                  ]}>
                    {plant.status}
                  </Text>
                  <Text style={styles.plantWatered}>Watered {plant.lastWatered}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Tab Navigation */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <SvgXml xml={iconLeaf} width={24} height={24} color="#9E9E9E" />
          <Text style={styles.tabText}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.tabItem}>
          <SvgXml xml={iconMessage} width={24} height={24} color="#9E9E9E" />
          <Text style={styles.tabText}>AI Chat</Text>
        </TouchableOpacity>
        
        {/* Placeholder for the center button */}
        <View style={styles.tabItemCenter} />
        
        <TouchableOpacity style={styles.tabItem}>
          <SvgXml xml={iconBook} width={24} height={24} color="#9E9E9E" />
          <Text style={styles.tabText}>Library</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.tabItem}>
          <SvgXml xml={iconUser} width={24} height={24} color="#9E9E9E" />
          <Text style={styles.tabText}>Profile</Text>
        </TouchableOpacity>
      </View>
      
      {/* Floating identify button */}
      <TouchableOpacity style={styles.identifyButton}>
        <SvgXml xml={iconCamera} width={28} height={28} color="#FFFFFF" />
      </TouchableOpacity>
      <Text style={styles.identifyText}>Identify</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    paddingBottom: Platform.OS === 'ios' ? 0 : 0,
  },
  header: {
    backgroundColor: '#43A047',
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  greeting: {
    fontSize: 16,
    color: '#E8F5E9',
    marginTop: 2,
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationButton: {
    position: 'relative',
    marginRight: 12,
  },
  notificationBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#F44336',
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  profileButton: {
    backgroundColor: '#2E7D32',
    borderRadius: 20,
    padding: (4),
  },
  searchBar: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginTop: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  searchText: {
    marginLeft: 8,
    color: '#9E9E9E',
    fontSize: 16,
  },
  section: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#424242',
    marginBottom: 12,
  },
  quickActionsScrollContent: {
    paddingBottom: 8,
  },
  quickActionItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
    width: 120,
    height: 120,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  quickActionText: {
    marginTop: 8,
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 14,
  },
  recentPlantsSection: {
    paddingHorizontal: 16,
    paddingTop: 24,
    flex: 1,
  },
  recentPlantsContent: {
    paddingBottom: 100, // Extra padding to account for tab bar
  },
  plantCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  plantIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#E8F5E9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plantInfo: {
    marginLeft: 16,
    flex: 1,
  },
  plantName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 4,
  },
  plantStatusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  plantStatus: {
    fontSize: 14,
  },
  statusHealthy: {
    color: '#4CAF50',
  },
  statusWarning: {
    color: '#FF9800',
  },
  plantWatered: {
    fontSize: 14,
    color: '#757575',
  },
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: Platform.OS === 'ios' ? 30 : 10, // Adjust for bottom insets
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  tabItemCenter: {
    width: 60,
  },
  tabText: {
    fontSize: 12,
    marginTop: 4,
    color: '#757575',
  },
  identifyButton: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 50 : 30, // Adjusted for iOS bottom insets
    alignSelf: 'center',
    backgroundColor: '#43A047',
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  identifyText: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 30 : 10, // Adjusted for iOS bottom insets
    alignSelf: 'center',
    fontSize: 12,
    fontWeight: '500',
    color: '#43A047',
  }
});

// Wrap component with SafeAreaProvider in your app entry
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// <SafeAreaProvider><LeafEyeMainMenu /></SafeAreaProvider>

export default LeafEyeMainMenu;