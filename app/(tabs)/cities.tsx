import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '@/components/Header';
import { hostCities } from '@/data/hostCities';
import { MapPin, ExternalLink } from 'lucide-react-native';

export default function CitiesScreen() {
  const [selectedCity, setSelectedCity] = useState(hostCities[0]);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Header title="Host Cities" showBackButton={true} />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.cityHeader}>
          <Image 
            source={{ uri: selectedCity.imageUrl }}
            style={styles.cityImage}
          />
          <LinearGradient
            colors={['transparent', 'rgba(26, 5, 5, 0.8)', '#1a0505']}
            style={styles.cityGradient}
          >
            <Text style={styles.cityName}>{selectedCity.name}</Text>
          </LinearGradient>
        </View>
        
        <View style={styles.citySelectionContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {hostCities.map((city, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.cityButton, selectedCity.name === city.name && styles.cityButtonSelected]}
                onPress={() => setSelectedCity(city)}
              >
                <Text style={[styles.cityButtonText, selectedCity.name === city.name && styles.cityButtonTextSelected]}>
                  {city.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cultural Heritage</Text>
          <Text style={styles.sectionText}>{selectedCity.culturalHeritage}</Text>
          
          <View style={styles.galleryContainer}>
            {selectedCity.gallery.slice(0, 2).map((image, index) => (
              <Image key={index} source={{ uri: image }} style={styles.galleryImage} />
            ))}
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Football History</Text>
          <Text style={styles.sectionText}>{selectedCity.footballHistory}</Text>
          
          {selectedCity.stadiums.map((stadium, index) => (
            <View key={index} style={styles.stadiumCard}>
              <Image source={{ uri: stadium.imageUrl }} style={styles.stadiumImage} />
              <View style={styles.stadiumInfo}>
                <Text style={styles.stadiumName}>{stadium.name}</Text>
                <View style={styles.stadiumDetail}>
                  <Text style={styles.stadiumCapacity}>Capacity: {stadium.capacity.toLocaleString()}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
        
        <TouchableOpacity style={styles.mapButton}>
          <MapPin size={16} color="#ffffff" style={styles.mapIcon} />
          <Text style={styles.mapButtonText}>View on Map</Text>
          <ExternalLink size={14} color="#ffffff" />
        </TouchableOpacity>
        
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
  scrollView: {
    flex: 1,
  },
  cityHeader: {
    height: 200,
    position: 'relative',
  },
  cityImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  cityGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '100%',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  cityName: {
    fontFamily: 'Cairo-Bold',
    fontSize: 32,
    color: '#ffffff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  citySelectionContainer: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#2c0d0d',
  },
  cityButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: '#3e1414',
  },
  cityButtonSelected: {
    backgroundColor: '#e74c3c',
  },
  cityButtonText: {
    fontFamily: 'Tajawal-Regular',
    color: '#ffffff',
    fontSize: 14,
  },
  cityButtonTextSelected: {
    fontFamily: 'Tajawal-Bold',
  },
  section: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontFamily: 'Cairo-Bold',
    fontSize: 20,
    color: '#ffffff',
    marginBottom: 8,
  },
  sectionText: {
    fontFamily: 'Tajawal-Regular',
    fontSize: 15,
    lineHeight: 22,
    color: '#e0e0e0',
    marginBottom: 16,
  },
  galleryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  galleryImage: {
    width: '48%',
    height: 120,
    borderRadius: 8,
  },
  stadiumCard: {
    backgroundColor: '#2c0d0d',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
  },
  stadiumImage: {
    width: '100%',
    height: 160,
  },
  stadiumInfo: {
    padding: 16,
  },
  stadiumName: {
    fontFamily: 'Cairo-Bold',
    fontSize: 18,
    color: '#ffffff',
    marginBottom: 4,
  },
  stadiumDetail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stadiumCapacity: {
    fontFamily: 'Tajawal-Regular',
    fontSize: 14,
    color: '#e0e0e0',
  },
  mapButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e74c3c',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 16,
    marginTop: 24,
  },
  mapIcon: {
    marginRight: 8,
  },
  mapButtonText: {
    fontFamily: 'Tajawal-Bold',
    fontSize: 16,
    color: '#ffffff',
    marginRight: 6,
  },
  footer: {
    height: 40,
  },
});