import { View, Text, StyleSheet, Image } from 'react-native';

interface PlayerType {
  name: string;
  avatar: string;
  points: number;
}

interface LeaderboardRowProps {
  player: PlayerType;
  rank: number;
}

export default function LeaderboardRow({ player, rank }: LeaderboardRowProps) {
  return (
    <View style={styles.row}>
      <View style={styles.rankContainer}>
        <View style={[
          styles.rankBadge,
          rank === 1 ? styles.firstPlace : 
          rank === 2 ? styles.secondPlace : 
          rank === 3 ? styles.thirdPlace : 
          styles.otherPlace
        ]}>
          <Text style={styles.rankText}>{rank}</Text>
        </View>
      </View>
      
      <View style={styles.playerContainer}>
        <Image source={{ uri: player.avatar }} style={styles.avatar} />
        <Text style={styles.playerName}>{player.name}</Text>
      </View>
      
      <View style={styles.pointsContainer}>
        <Text style={styles.points}>{player.points}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#3e1414',
  },
  rankContainer: {
    width: 60,
    alignItems: 'center',
  },
  rankBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstPlace: {
    backgroundColor: '#FFD700',
  },
  secondPlace: {
    backgroundColor: '#C0C0C0',
  },
  thirdPlace: {
    backgroundColor: '#CD7F32',
  },
  otherPlace: {
    backgroundColor: '#3e1414',
  },
  rankText: {
    fontFamily: 'Cairo-Bold',
    fontSize: 14,
    color: rank => rank <= 3 ? '#000000' : '#ffffff',
  },
  playerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 12,
  },
  playerName: {
    fontFamily: 'Cairo-Regular',
    fontSize: 16,
    color: '#ffffff',
  },
  pointsContainer: {
    width: 60,
    alignItems: 'flex-end',
  },
  points: {
    fontFamily: 'Cairo-Bold',
    fontSize: 16,
    color: '#e74c3c',
  },
});