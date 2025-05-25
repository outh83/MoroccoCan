import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import CountryFlag from 'react-native-country-flag';
import { CalendarDays } from 'lucide-react-native';

interface TeamType {
  name: string;
  code: string;
}

interface MatchType {
  homeTeam: TeamType;
  awayTeam: TeamType;
  date: string;
  time: string;
}

interface PredictionCardProps {
  match: MatchType;
}

export default function PredictionCard({ match }: PredictionCardProps) {
  const [homeScore, setHomeScore] = useState('');
  const [awayScore, setAwayScore] = useState('');
  const [predicted, setPredicted] = useState(false);
  
  const handleSubmit = () => {
    // Validate inputs
    if (homeScore.trim() !== '' && awayScore.trim() !== '') {
      // In a real app, this would send the prediction to a backend
      setPredicted(true);
    }
  };
  
  return (
    <View style={styles.card}>
      <View style={styles.dateContainer}>
        <CalendarDays size={16} color="#e0e0e0" />
        <Text style={styles.dateText}>{match.date} | {match.time}</Text>
      </View>
      
      <View style={styles.matchContainer}>
        <View style={styles.teamContainer}>
          <CountryFlag isoCode={match.homeTeam.code} size={32} style={styles.flag} />
          <Text style={styles.teamName}>{match.homeTeam.name}</Text>
        </View>
        
        {!predicted ? (
          <View style={styles.scoreInputContainer}>
            <TextInput
              style={styles.scoreInput}
              keyboardType="number-pad"
              maxLength={2}
              value={homeScore}
              onChangeText={setHomeScore}
              placeholder="0"
              placeholderTextColor="#666"
            />
            <Text style={styles.scoreSeparator}>-</Text>
            <TextInput
              style={styles.scoreInput}
              keyboardType="number-pad"
              maxLength={2}
              value={awayScore}
              onChangeText={setAwayScore}
              placeholder="0"
              placeholderTextColor="#666"
            />
          </View>
        ) : (
          <View style={styles.predictionResultContainer}>
            <Text style={styles.predictionResult}>{homeScore}</Text>
            <Text style={styles.predictionSeparator}>-</Text>
            <Text style={styles.predictionResult}>{awayScore}</Text>
          </View>
        )}
        
        <View style={styles.teamContainer}>
          <CountryFlag isoCode={match.awayTeam.code} size={32} style={styles.flag} />
          <Text style={styles.teamName}>{match.awayTeam.name}</Text>
        </View>
      </View>
      
      {!predicted ? (
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit Prediction</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.predictedContainer}>
          <Text style={styles.predictedText}>Prediction Submitted</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#2c0d0d',
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  dateText: {
    fontFamily: 'Tajawal-Regular',
    fontSize: 14,
    color: '#e0e0e0',
    marginLeft: 8,
  },
  matchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    fontFamily: 'Cairo-Regular',
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
  },
  scoreInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreInput: {
    width: 40,
    height: 40,
    backgroundColor: '#3e1414',
    borderRadius: 8,
    textAlign: 'center',
    fontFamily: 'Cairo-Bold',
    fontSize: 18,
    color: '#ffffff',
  },
  scoreSeparator: {
    fontFamily: 'Cairo-Regular',
    fontSize: 18,
    color: '#e0e0e0',
    marginHorizontal: 8,
  },
  predictionResultContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  predictionResult: {
    fontFamily: 'Cairo-Bold',
    fontSize: 20,
    color: '#e74c3c',
  },
  predictionSeparator: {
    fontFamily: 'Cairo-Regular',
    fontSize: 20,
    color: '#e0e0e0',
    marginHorizontal: 8,
  },
  submitButton: {
    backgroundColor: '#e74c3c',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
  },
  submitButtonText: {
    fontFamily: 'Cairo-Bold',
    fontSize: 14,
    color: '#ffffff',
  },
  predictedContainer: {
    backgroundColor: 'rgba(46, 204, 113, 0.2)',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
  },
  predictedText: {
    fontFamily: 'Cairo-Bold',
    fontSize: 14,
    color: '#2ecc71',
  },
});