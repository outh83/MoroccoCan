import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/Header';
import MatchCard from '@/components/MatchCard';
import { ChevronDown } from 'lucide-react-native';
import { matches } from '@/data/matches';

const filterOptions = {
  groups: ['All Groups', 'Group A', 'Group B', 'Group C', 'Group D', 'Group E', 'Group F', 'Knockout'],
  dates: ['All Dates', 'Today', 'Tomorrow', 'This Week'],
  cities: ['All Cities', 'Marrakech', 'Rabat', 'Tangier', 'Casablanca', 'Fez', 'Agadir'],
};

export default function MatchesScreen() {
  const [selectedGroup, setSelectedGroup] = useState('All Groups');
  const [selectedDate, setSelectedDate] = useState('All Dates');
  const [selectedCity, setSelectedCity] = useState('All Cities');
  const [showGroupDropdown, setShowGroupDropdown] = useState(false);
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [showCityDropdown, setShowCityDropdown] = useState(false);

  const filteredMatches = matches.filter(match => {
    let passesGroupFilter = selectedGroup === 'All Groups' || match.group === selectedGroup;
    let passesDateFilter = true; // Simplified for this demo
    let passesCityFilter = selectedCity === 'All Cities' || match.stadium.city === selectedCity;
    
    return passesGroupFilter && passesDateFilter && passesCityFilter;
  });

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Header title="Match Calendar" showBackButton={true} />
      
      <View style={styles.filtersContainer}>
        <View style={styles.filterItem}>
          <TouchableOpacity 
            style={styles.filterButton}
            onPress={() => {
              setShowGroupDropdown(!showGroupDropdown);
              setShowDateDropdown(false);
              setShowCityDropdown(false);
            }}
          >
            <Text style={styles.filterButtonText}>{selectedGroup}</Text>
            <ChevronDown size={16} color="#ffffff" />
          </TouchableOpacity>
          
          {showGroupDropdown && (
            <View style={styles.dropdown}>
              {filterOptions.groups.map((group, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.dropdownItem}
                  onPress={() => {
                    setSelectedGroup(group);
                    setShowGroupDropdown(false);
                  }}
                >
                  <Text style={[
                    styles.dropdownItemText,
                    selectedGroup === group && styles.dropdownItemTextSelected
                  ]}>
                    {group}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
        
        <View style={styles.filterItem}>
          <TouchableOpacity 
            style={styles.filterButton}
            onPress={() => {
              setShowDateDropdown(!showDateDropdown);
              setShowGroupDropdown(false);
              setShowCityDropdown(false);
            }}
          >
            <Text style={styles.filterButtonText}>{selectedDate}</Text>
            <ChevronDown size={16} color="#ffffff" />
          </TouchableOpacity>
          
          {showDateDropdown && (
            <View style={styles.dropdown}>
              {filterOptions.dates.map((date, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.dropdownItem}
                  onPress={() => {
                    setSelectedDate(date);
                    setShowDateDropdown(false);
                  }}
                >
                  <Text style={[
                    styles.dropdownItemText,
                    selectedDate === date && styles.dropdownItemTextSelected
                  ]}>
                    {date}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
        
        <View style={styles.filterItem}>
          <TouchableOpacity 
            style={styles.filterButton}
            onPress={() => {
              setShowCityDropdown(!showCityDropdown);
              setShowGroupDropdown(false);
              setShowDateDropdown(false);
            }}
          >
            <Text style={styles.filterButtonText}>{selectedCity}</Text>
            <ChevronDown size={16} color="#ffffff" />
          </TouchableOpacity>
          
          {showCityDropdown && (
            <View style={styles.dropdown}>
              {filterOptions.cities.map((city, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.dropdownItem}
                  onPress={() => {
                    setSelectedCity(city);
                    setShowCityDropdown(false);
                  }}
                >
                  <Text style={[
                    styles.dropdownItemText,
                    selectedCity === city && styles.dropdownItemTextSelected
                  ]}>
                    {city}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      </View>
      
      <ScrollView style={styles.matchesContainer} showsVerticalScrollIndicator={false}>
        {filteredMatches.map((match, index) => (
          <MatchCard key={index} match={match} />
        ))}
        
        <View style={styles.footer} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a0505',
  },
  filtersContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#2c0d0d',
  },
  filterItem: {
    flex: 1,
    marginHorizontal: 4,
    position: 'relative',
    zIndex: 1,
  },
  filterButton: {
    backgroundColor: '#3e1414',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  filterButtonText: {
    fontFamily: 'Tajawal-Regular',
    color: '#ffffff',
    fontSize: 13,
  },
  dropdown: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: '#3e1414',
    borderRadius: 8,
    marginTop: 4,
    paddingVertical: 8,
    zIndex: 10,
    elevation: 5,
  },
  dropdownItem: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  dropdownItemText: {
    fontFamily: 'Tajawal-Regular',
    color: '#ffffff',
    fontSize: 13,
  },
  dropdownItemTextSelected: {
    color: '#e74c3c',
    fontFamily: 'Tajawal-Bold',
  },
  matchesContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  footer: {
    height: 40,
  },
});