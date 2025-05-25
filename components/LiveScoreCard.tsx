import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CountryFlag from 'react-native-country-flag';
import { Clock } from 'lucide-react-native';

interface MatchType {
  group: string;
  homeTeam: {
    name: string;
    code: string;
    score: number;
  };
  awayTeam: {
    name: string;
    code: string;
    score: number;
  };
  time: string;
  status: 'live' | 'completed' | 'upcoming';
}

interface LiveScoreCardProps {
  match: MatchType;
}

export default function LiveScoreCard({ match }: LiveScoreCardProps) {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.group}>{match.group}</Text>
        {match.status === 'live' && (
          <View style={styles.liveContainer}>
            <View style={styles.liveDot} />
            <Text style={styles.liveText}>LIVE</Text>
          </View>
        )}
      </View>
      
      <View style={styles.content}>
        <View style={styles.teamContainer}>
          <CountryFlag isoCode={match.homeTeam.code} size={24} style={styles.flag} />
          <Text style={styles.teamName}>{match.homeTeam.name}</Text>
        </View>
        
        <View style={styles.scoreContainer}>
          <Text style={styles.score}>{match.homeTeam.score}</Text>
          <Text style={styles.scoreSeparator}>-</Text>
          <Text style={styles.score}>{match.awayTeam.score}</Text>
        </View>
        
        <View style={styles.teamContainer}>
          <CountryFlag isoCode={match.awayTeam.code} size={24} style={styles.flag} />
          <Text style={styles.teamName}>{match.awayTeam.name}</Text>
        </View>
      </View>
      
      <View style={styles.footer}>
        <Clock size={14} color="#e0e0e0" />
        <Text style={styles.time}>{match.time}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#2c0d0d',
    borderRadius: 12,
    marginBottom: 12,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  group: {
    fontFamily: 'Tajawal-Regular',
    fontSize: 14,
    color: '#e0e0e0',
  },
  liveContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  liveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#e74c3c',
    marginRight: 6,
  },
  liveText: {
    fontFamily: 'Cairo-Bold',
    fontSize: 12,
    color: '#e74c3c',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  teamContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  flag: {
    marginRight: 8,
    borderRadius: 4,
  },
  teamName: {
    fontFamily: 'Cairo-Regular',
    fontSize: 16,
    color: '#ffffff',
  },
  scoreContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  score: {
    fontFamily: 'Cairo-Bold',
    fontSize: 20,
    color: '#ffffff',
    paddingHorizontal: 6,
  },
  scoreSeparator: {
    fontFamily: 'Cairo-Regular',
    fontSize: 20,
    color: '#e0e0e0',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    fontFamily: 'Tajawal-Regular',
    fontSize: 14,
    color: '#e0e0e0',
    marginLeft: 6,
  },
});