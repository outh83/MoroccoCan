import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Calendar, Map, Trophy, User, Clock, ChartBar as BarChart3 } from 'lucide-react-native';
import Header from '@/components/Header';
import LiveScoreCard from '@/components/LiveScoreCard';
import { LiveScores } from '@/data/liveScores';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Header title="AFCON 2025" showBackButton={false} />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.heroSection}>
          <Image 
            source={{ uri: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
            style={styles.heroImage}
          />
          <LinearGradient
            colors={['transparent', 'rgba(26, 5, 5, 0.8)', '#1a0505']}
            style={styles.heroGradient}
          >
            <View style={styles.heroContent}>
              <Text style={styles.heroTitle}>Welcome to Morocco 2025</Text>
              <Text style={styles.heroSubtitle}>From the Land of Lions, Let Legends Rise</Text>
            </View>
          </LinearGradient>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Live Scores</Text>
          <View style={styles.liveScoresContainer}>
            {LiveScores.map((match, index) => (
              <LiveScoreCard key={index} match={match} />
            ))}
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Access</Text>
          <View style={styles.quickAccessGrid}>
            <TouchableOpacity style={styles.quickAccessItem}>
              <View style={styles.quickAccessIconContainer}>
                <Trophy size={24} color="#e74c3c" />
              </View>
              <Text style={styles.quickAccessText}>Groups</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.quickAccessItem}>
              <View style={styles.quickAccessIconContainer}>
                <Calendar size={24} color="#e74c3c" />
              </View>
              <Text style={styles.quickAccessText}>Matches</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.quickAccessItem}>
              <View style={styles.quickAccessIconContainer}>
                <User size={24} color="#e74c3c" />
              </View>
              <Text style={styles.quickAccessText}>Predictions</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.quickAccessItem}>
              <View style={styles.quickAccessIconContainer}>
                <BarChart3 size={24} color="#e74c3c" />
              </View>
              <Text style={styles.quickAccessText}>Stadiums</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.quickAccessItem}>
              <View style={styles.quickAccessIconContainer}>
                <Map size={24} color="#e74c3c" />
              </View>
              <Text style={styles.quickAccessText}>Cities</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.quickAccessItem}>
              <View style={styles.quickAccessIconContainer}>
                <Clock size={24} color="#e74c3c" />
              </View>
              <Text style={styles.quickAccessText}>Upcoming</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tournament Highlights</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.highlightsScroll}>
            <TouchableOpacity style={styles.highlightCard}>
              <Image 
                source={{ uri: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
                style={styles.highlightImage}
              />
              <View style={styles.highlightOverlay}>
                <Text style={styles.highlightTitle}>Opening Ceremony</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.highlightCard}>
              <Image 
                source={{ uri: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
                style={styles.highlightImage}
              />
              <View style={styles.highlightOverlay}>
                <Text style={styles.highlightTitle}>Top Stadiums</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.highlightCard}>
              <Image 
                source={{ uri: 'https://images.pexels.com/photos/3155665/pexels-photo-3155665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
                style={styles.highlightImage}
              />
              <View style={styles.highlightOverlay}>
                <Text style={styles.highlightTitle}>Players to Watch</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
        
        <View style={styles.footer}>
          <Text style={styles.footerText}>AFCON Morocco 2025</Text>
          <Text style={styles.footerCopyright}>© 2025 All Rights Reserved</Text>
        </View>
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
  heroSection: {
    height: 250,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  heroGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '100%',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  heroContent: {
    marginBottom: 10,
  },
  heroTitle: {
    fontFamily: 'Cairo-Bold',
    fontSize: 28,
    color: '#ffffff',
    marginBottom: 4,
  },
  heroSubtitle: {
    fontFamily: 'Tajawal-Regular',
    fontSize: 16,
    color: '#e0e0e0',
  },
  section: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontFamily: 'Cairo-Bold',
    fontSize: 20,
    color: '#ffffff',
    marginBottom: 12,
  },
  liveScoresContainer: {
    marginBottom: 8,
  },
  quickAccessGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  quickAccessItem: {
    width: '30%',
    backgroundColor: '#2c0d0d',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  quickAccessIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(231, 76, 60, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  quickAccessText: {
    fontFamily: 'Tajawal-Regular',
    color: '#ffffff',
    fontSize: 14,
  },
  highlightsScroll: {
    marginVertical: 8,
  },
  highlightCard: {
    width: 200,
    height: 120,
    marginRight: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  highlightImage: {
    width: '100%',
    height: '100%',
  },
  highlightOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'flex-end',
    padding: 12,
  },
  highlightTitle: {
    fontFamily: 'Cairo-Bold',
    color: '#ffffff',
    fontSize: 16,
  },
  footer: {
    marginTop: 40,
    marginBottom: 20,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  footerText: {
    fontFamily: 'Cairo-Regular',
    color: '#ffffff',
    fontSize: 14,
  },
  footerCopyright: {
    fontFamily: 'Tajawal-Regular',
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 12,
    marginTop: 4,
  },
});