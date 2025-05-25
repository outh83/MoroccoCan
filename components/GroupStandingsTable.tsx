import { View, Text, StyleSheet } from 'react-native';
import CountryFlag from 'react-native-country-flag';

interface TeamStandingType {
  name: string;
  code: string;
  matchesPlayed: number;
  points: number;
  goalsScored: number;
  goalsConceded: number;
}

interface GroupStandingsTableProps {
  data: TeamStandingType[];
}

export default function GroupStandingsTable({ data }: GroupStandingsTableProps) {
  return (
    <View style={styles.container}>
      <View style={styles.tableHeader}>
        <Text style={[styles.headerText, styles.teamHeader]}>Team</Text>
        <Text style={[styles.headerText, styles.statHeader]}>MP</Text>
        <Text style={[styles.headerText, styles.statHeader]}>GF</Text>
        <Text style={[styles.headerText, styles.statHeader]}>GA</Text>
        <Text style={[styles.headerText, styles.statHeader]}>Pts</Text>
      </View>
      
      {data.map((team, index) => (
        <View 
          key={index} 
          style={[
            styles.tableRow, 
            index === data.length - 1 ? styles.lastRow : null
          ]}
        >
          <View style={styles.teamCell}>
            <Text style={styles.rankNumber}>{index + 1}</Text>
            <CountryFlag isoCode={team.code} size={18} style={styles.flag} />
            <Text style={styles.teamName}>{team.name}</Text>
          </View>
          <Text style={styles.statCell}>{team.matchesPlayed}</Text>
          <Text style={styles.statCell}>{team.goalsScored}</Text>
          <Text style={styles.statCell}>{team.goalsConceded}</Text>
          <Text style={[styles.statCell, styles.pointsCell]}>{team.points}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2c0d0d',
    borderRadius: 12,
    overflow: 'hidden',
  },
  tableHeader: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#3e1414',
  },
  headerText: {
    fontFamily: 'Cairo-Bold',
    fontSize: 14,
    color: '#ffffff',
  },
  teamHeader: {
    flex: 2,
    textAlign: 'left',
  },
  statHeader: {
    flex: 1,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#3e1414',
  },
  lastRow: {
    borderBottomWidth: 0,
  },
  teamCell: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rankNumber: {
    fontFamily: 'Cairo-Regular',
    fontSize: 14,
    color: '#e0e0e0',
    width: 24,
  },
  flag: {
    marginRight: 8,
    borderRadius: 2,
  },
  teamName: {
    fontFamily: 'Cairo-Regular',
    fontSize: 14,
    color: '#ffffff',
  },
  statCell: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Tajawal-Regular',
    fontSize: 14,
    color: '#ffffff',
  },
  pointsCell: {
    fontFamily: 'Tajawal-Bold',
    color: '#e74c3c',
  },
});