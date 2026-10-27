export interface Roommate {
  id: string;
  name: string;
  age: number;
  bio: string;
  interests: string[];
  compatibilityScore: number; // 0-100
}
