import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/Header';
import PredictionCard from '@/components/PredictionCard';
import LeaderboardRow from '@/components/LeaderboardRow';
import { upcomingMatches } from '@/data/upcomingMatches';
import { leaderboard } from '@/data/leaderboard';

export default function PredictionsScreen() {
  const [activeTab, setActiveTab] = useState('Upcoming');
  const [leaderboardTab, setLeaderboardTab] = useState('All');
  
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Header title="Predictions" showBackButton={true} />
      
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Upcoming' && styles.activeTabButton]}
          onPress={() => setActiveTab('Upcoming')}
        >
          <Text style={[styles.tabButtonText, activeTab === 'Upcoming' && styles.activeTabButtonText]}>
            Upcoming
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Leaderboard' && styles.activeTabButton]}
          onPress={() => setActiveTab('Leaderboard')}
        >
          <Text style={[styles.tabButtonText, activeTab === 'Leaderboard' && styles.activeTabButtonText]}>
            Leaderboard
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'History' && styles.activeTabButton]}
          onPress={() => setActiveTab('History')}
        >
          <Text style={[styles.tabButtonText, activeTab === 'History' && styles.activeTabButtonText]}>
            History
          </Text>
        </TouchableOpacity>
      </View>
      
      {activeTab === 'Upcoming' && (
        <ScrollView style={styles.contentContainer} showsVerticalScrollIndicator={false}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Today</Text>
          </View>
          
          {upcomingMatches.map((match, index) => (
            <PredictionCard key={index} match={match} />
          ))}
          
          <View style={styles.footer} />
        </ScrollView>
      )}
      
      {activeTab === 'Leaderboard' && (
        <ScrollView style={styles.contentContainer} showsVerticalScrollIndicator={false}>
          <View style={styles.leaderboardTabs}>
            <TouchableOpacity
              style={[styles.leaderboardTabButton, leaderboardTab === 'All' && styles.leaderboardTabButtonActive]}
              onPress={() => setLeaderboardTab('All')}
            >
              <Text style={[styles.leaderboardTabText, leaderboardTab === 'All' && styles.leaderboardTabTextActive]}>All</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[styles.leaderboardTabButton, leaderboardTab === 'Friends' && styles.leaderboardTabButtonActive]}
              onPress={() => setLeaderboardTab('Friends')}
            >
              <Text style={[styles.leaderboardTabText, leaderboardTab === 'Friends' && styles.leaderboardTabTextActive]}>Friends</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.leaderboardHeader}>
            <Text style={styles.rankHeaderText}>Rank</Text>
            <Text style={styles.playerHeaderText}>Player</Text>
            <Text style={styles.pointsHeaderText}>Points</Text>
          </View>
          
          {leaderboard.map((player, index) => (
            <LeaderboardRow key={index} player={player} rank={index + 1} />
          ))}
          
          <View style={styles.footer} />
        </ScrollView>
      )}
      
      {activeTab === 'History' && (
        <ScrollView style={styles.contentContainer} contentContainerStyle={styles.emptyContainer} showsVerticalScrollIndicator={false}>
          <Image 
            source={{ uri: 'https://images.pexels.com/photos/6956800/pexels-photo-6956800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
            style={styles.emptyImage}
          />
          <Text style={styles.emptyTitle}>No Prediction History</Text>
          <Text style={styles.emptyText}>Your prediction history will appear here once you make your first prediction.</Text>
          <TouchableOpacity style={styles.emptyButton} onPress={() => setActiveTab('Upcoming')}>
            <Text style={styles.emptyButtonText}>Make Predictions</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a0505',
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#2c0d0d',
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: '#e74c3c',
  },
  tabButtonText: {
    fontFamily: 'Cairo-Regular',
    color: '#ffffff',
    fontSize: 16,
  },
  activeTabButtonText: {
    fontFamily: 'Cairo-Bold',
    color: '#e74c3c',
  },
  contentContainer: {
    flex: 1,
  },
  sectionHeader: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#230909',
  },
  sectionTitle: {
    fontFamily: 'Cairo-Bold',
    fontSize: 18,
    color: '#ffffff',
  },
  leaderboardTabs: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#230909',
  },
  leaderboardTabButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: '#3e1414',
  },
  leaderboardTabButtonActive: {
    backgroundColor: '#e74c3c',
  },
  leaderboardTabText: {
    fontFamily: 'Tajawal-Regular',
    color: '#ffffff',
    fontSize: 14,
  },
  leaderboardTabTextActive: {
    fontFamily: 'Tajawal-Bold',
  },
  leaderboardHeader: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#3e1414',
  },
  rankHeaderText: {
    width: 60,
    fontFamily: 'Cairo-Bold',
    fontSize: 14,
    color: '#e0e0e0',
  },
  playerHeaderText: {
    flex: 1,
    fontFamily: 'Cairo-Bold',
    fontSize: 14,
    color: '#e0e0e0',
  },
  pointsHeaderText: {
    width: 60,
    textAlign: 'right',
    fontFamily: 'Cairo-Bold',
    fontSize: 14,
    color: '#e0e0e0',
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  emptyImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  emptyTitle: {
    fontFamily: 'Cairo-Bold',
    fontSize: 20,
    color: '#ffffff',
    marginBottom: 8,
  },
  emptyText: {
    fontFamily: 'Tajawal-Regular',
    fontSize: 16,
    color: '#e0e0e0',
    textAlign: 'center',
    marginBottom: 24,
  },
  emptyButton: {
    backgroundColor: '#e74c3c',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  emptyButtonText: {
    fontFamily: 'Tajawal-Bold',
    color: '#ffffff',
    fontSize: 16,
  },
  footer: {
    height: 40,
  },
});