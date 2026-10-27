# InTune Mobile

A lightweight **React Native** prototype built with **Expo** and **TypeScript** that showcases a simple roommate‑matching flow.

## 📱 Features
- **Login screen** – fake client‑side validation (no backend). 
- **Discover screen** – swipe‑free list of roommate cards built from static mock data.
- **Profile screen** – detailed view with interests, bio and compatibility score.
- **Reusable `RoommateCard` component** with modern styling (soft shadows, vibrant accent colour).
- Simple navigation using React Navigation (stack navigator).
- All data lives locally in `src/data/roommates.ts` – no external APIs.

## 🎨 Design Highlights
- Clean, modern UI with consistent spacing, typography and a calming purple accent (`#6c63ff`).
- Components styled with `StyleSheet` for speed and native look‑and‑feel.
- Uses a SafeArea view to respect device notches.

## 📂 Project Structure
```
intune-mobile/
│   App.tsx                  # Entry point with navigation
│   README.md
│
└───src/
    │   types/
    │       index.ts        # TypeScript types (Roommate)
    │
    │   data/
    │       roommates.ts    # Mock roommate profiles
    │
    │   components/
    │       RoommateCard.tsx
    │
    │   screens/
    │       LoginScreen.tsx
    │       DiscoverScreen.tsx
    │       ProfileScreen.tsx
```

## 🚀 Getting Started
1. **Clone the repository** (once you push it to GitHub):
   ```bash
   git clone <repo-url>
   cd intune-mobile
   ```
2. **Install dependencies** (run locally on your machine, not by the assistant):
   ```bash
   npm install
   npx expo install react-native-safe-area-context @react-navigation/native @react-navigation/stack
   ```
3. **Start the development server**:
   ```bash
   npx expo start
   ```
4. Scan the QR code with the Expo Go app (iOS/Android) or run on a simulator.

## ⚠️ Current Limitations
- No real authentication – the login screen only checks that fields are non‑empty.
- No persistence; data resets on each app launch.
- No backend or network calls – everything is static mock data.
- Navigation is basic stack; no tab bar or deep linking.

## 📦 Future Improvements (optional)
- Hook up a real auth provider (Firebase, Auth0, etc.).
- Add swipe‑based card deck (e.g., `react-native-deck-swiper`).
- Persist liked/disliked roommates locally.
- Implement a back‑end for dynamic roommate data and matching algorithm.

---

*This prototype is intentionally minimal and intended for learning or quick demos.*
