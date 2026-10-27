export interface Roommate {
  id: string;
  name: string;
  age: number;
  bio: string;
  interests: string[];
  compatibilityScore: number; // 0-100
}

export const roommates: Roommate[] = [
  {
    id: '1',
    name: 'Aisha Patel',
    age: 24,
    bio: 'Foodie, loves cooking Indian dishes and weekend hikes.',
    interests: ['cooking', 'hiking', 'music festivals'],
    compatibilityScore: 88,
  },
  {
    id: '2',
    name: 'Liam Nguyen',
    age: 27,
    bio: 'Tech enthusiast, enjoys gaming and coffee shop work sessions.',
    interests: ['tech', 'gaming', 'coffee'],
    compatibilityScore: 75,
  },
  {
    id: '3',
    name: 'Sofia Garcia',
    age: 22,
    bio: 'Art student who paints murals and practices yoga.',
    interests: ['art', 'yoga', 'travel'],
    compatibilityScore: 92,
  },
  {
    id: '4',
    name: 'Ethan Kim',
    age: 29,
    bio: 'Fitness coach, early riser, loves hiking and podcasts.',
    interests: ['fitness', 'podcasts', 'hiking'],
    compatibilityScore: 81,
  },
  {
    id: '5',
    name: 'Maya Liu',
    age: 25,
    bio: 'Bookworm, coffee lover, enjoys board games on Friday nights.',
    interests: ['reading', 'board games', 'coffee'],
    compatibilityScore: 79,
  },
];
