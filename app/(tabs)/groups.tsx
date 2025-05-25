import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/Header';
import GroupStandingsTable from '@/components/GroupStandingsTable';
import { groupStandings } from '@/data/groupStandings';

export default function GroupsScreen() {
  const [activeTab, setActiveTab] = useState('Groups');
  const [selectedGroup, setSelectedGroup] = useState('Group A');
  
  const groups = Object.keys(groupStandings);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Header title="Groups" showBackButton={true} />
      
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Groups' && styles.activeTabButton]}
          onPress={() => setActiveTab('Groups')}
        >
          <Text style={[styles.tabButtonText, activeTab === 'Groups' && styles.activeTabButtonText]}>
            Groups
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Knockout' && styles.activeTabButton]}
          onPress={() => setActiveTab('Knockout')}
        >
          <Text style={[styles.tabButtonText, activeTab === 'Knockout' && styles.activeTabButtonText]}>
            Knockout
          </Text>
        </TouchableOpacity>
      </View>
      
      {activeTab === 'Groups' ? (
        <>
          <View style={styles.groupSelector}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {groups.map((group) => (
                <TouchableOpacity
                  key={group}
                  style={[styles.groupButton, selectedGroup === group && styles.selectedGroupButton]}
                  onPress={() => setSelectedGroup(group)}
                >
                  <Text style={[styles.groupButtonText, selectedGroup === group && styles.selectedGroupButtonText]}>
                    {group}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          
          <ScrollView style={styles.contentContainer} showsVerticalScrollIndicator={false}>
            <Text style={styles.groupTitle}>{selectedGroup}</Text>
            <GroupStandingsTable data={groupStandings[selectedGroup] || []} />
            <View style={styles.footer} />
          </ScrollView>
        </>
      ) : (
        <ScrollView style={styles.contentContainer} contentContainerStyle={styles.knockoutContainer} showsVerticalScrollIndicator={false}>
          <Text style={styles.knockoutText}>Knockout stage will be available after the group stage is completed.</Text>
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
  groupSelector: {
    paddingVertical: 12,
    paddingLeft: 16,
    backgroundColor: '#230909',
  },
  groupButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: '#3e1414',
  },
  selectedGroupButton: {
    backgroundColor: '#e74c3c',
  },
  groupButtonText: {
    fontFamily: 'Tajawal-Regular',
    color: '#ffffff',
    fontSize: 14,
  },
  selectedGroupButtonText: {
    fontFamily: 'Tajawal-Bold',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  groupTitle: {
    fontFamily: 'Cairo-Bold',
    fontSize: 22,
    color: '#ffffff',
    marginBottom: 16,
  },
  knockoutContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  knockoutText: {
    fontFamily: 'Tajawal-Regular',
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
  footer: {
    height: 40,
  },
});