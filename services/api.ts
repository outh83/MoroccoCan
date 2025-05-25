import { EXPO_PUBLIC_LIVESCORE_API_KEY, EXPO_PUBLIC_LIVESCORE_API_SECRET } from '@env';

const BASE_URL = 'https://livescore-api.com/api-client';

interface ApiResponse<T> {
  success: boolean;
  data: T;
}

const createApiUrl = (endpoint: string, params: Record<string, string | number> = {}) => {
  const searchParams = new URLSearchParams({
    key: EXPO_PUBLIC_LIVESCORE_API_KEY || 'demo_key',
    secret: EXPO_PUBLIC_LIVESCORE_API_SECRET || 'demo_secret',
    competition_id: '227',
    ...params,
  });
  
  return `${BASE_URL}/${endpoint}?${searchParams.toString()}`;
};

export const fetchParticipants = async () => {
  const response = await fetch(createApiUrl('competitions/participants.json', { season: '2025' }));
  return response.json() as Promise<ApiResponse<{ teams: Array<{ name: string, id: number }> }>>;
};

export const fetchGroupStandings = async (group: string) => {
  const response = await fetch(createApiUrl('leagues/table.json', { group }));
  return response.json() as Promise<ApiResponse<{
    table: Array<{
      rank: number;
      name: string;
      matches: number;
      won: number;
      drawn: number;
      lost: number;
      goals_scored: number;
      goals_conceded: number;
      points: number;
    }>;
  }>>;
};

export const fetchGroupFixtures = async (groupId: string) => {
  const response = await fetch(createApiUrl('fixtures/matches.json', { group_id: groupId }));
  return response.json() as Promise<ApiResponse<{
    fixtures: Array<{
      id: number;
      date: string;
      time: string;
      home_name: string;
      away_name: string;
      score: string;
      status: string;
    }>;
  }>>;
};

export const fetchTeamFixtures = async (teamId: number) => {
  const response = await fetch(createApiUrl('fixtures/matches.json', { team: teamId }));
  return response.json() as Promise<ApiResponse<{
    fixtures: Array<{
      id: number;
      date: string;
      time: string;
      home_name: string;
      away_name: string;
      score: string;
      status: string;
    }>;
  }>>;
};