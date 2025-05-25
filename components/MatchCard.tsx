import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CountryFlag from 'react-native-country-flag';
import { MapPin, CalendarDays } from 'lucide-react-native';

interface StadiumType {
  name: string;
  city: string;
}

interface TeamType {
  name: string;
  code: string;
}

interface MatchType {
  group: string;
  homeTeam: TeamType;
  awayTeam: TeamType;
  date: string;
  time: string;
  stadium: StadiumType;
}

interface MatchCardProps {
  match: MatchType;
}

export default function MatchCard({ match }: MatchCardProps) {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.group}>{match.group}</Text>
      </View>
      
      <View style={styles.teamsContainer}>
        <View style={styles.teamContainer}>
          <CountryFlag isoCode={match.homeTeam.code} size={32} style={styles.flag} />
          <Text style={styles.teamName}>{match.homeTeam.name}</Text>
        </View>
        
        <View style={styles.vsContainer}>
          <Text style={styles.vsText}>vs.</Text>
        </View>
        
        <View style={styles.teamContainer}>
          <CountryFlag isoCode={match.awayTeam.code} size={32} style={styles.flag} />
          <Text style={styles.teamName}>{match.awayTeam.name}</Text>
        </View>
      </View>
      
      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <CalendarDays size={16} color="#e0e0e0" />
          <Text style={styles.detailText}>{match.date} | {match.time}</Text>
        </View>
        
        <View style={styles.detailItem}>
          <MapPin size={16} color="#e0e0e0" />
          <Text style={styles.detailText}>{match.stadium.name} | {match.stadium.city}</Text>
        </View>
      </View>
      
      <TouchableOpacity style={styles.ticketButton}>
        <Text style={styles.ticketButtonText}>Buy Tickets</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#2c0d0d',
    borderRadius: 12,
    marginBottom: 16,
    padding: 16,
  },
  header: {
    marginBottom: 12,
  },
  group: {
    fontFamily: 'Tajawal-Bold',
    fontSize: 14,
    color: '#e0e0e0',
  },
  teamsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  teamContainer: {
    flex: 2,
    alignItems: 'center',
  },
  flag: {
    marginBottom: 8,
    borderRadius: 4,
  },
  teamName: {
    fontFamily: 'Cairo-Bold',
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
  },
  vsContainer: {
    flex: 1,
    alignItems: 'center',
  },
  vsText: {
    fontFamily: 'Cairo-Regular',
    fontSize: 16,
    color: '#e0e0e0',
  },
  detailsContainer: {
    marginBottom: 16,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailText: {
    fontFamily: 'Tajawal-Regular',
    fontSize: 14,
    color: '#e0e0e0',
    marginLeft: 8,
  },
  ticketButton: {
    backgroundColor: '#e74c3c',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
  },
  ticketButtonText: {
    fontFamily: 'Cairo-Bold',
    fontSize: 14,
    color: '#ffffff',
  },
});