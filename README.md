🎵 Spotify UI Recreation
Original Website/App Chosen

Spotify
https://open.spotify.com/

Scope of Recreation

For this project, I recreated the core layout and user interface of Spotify using React. I focused on rebuilding the homepage structure, sidebar navigation, and playlist-style content layout. The goal was to replicate the visual design and navigation flow while keeping the project front-end focused (no real music streaming functionality).

Features Implemented

Sidebar navigation menu

Multiple routed pages

Playlist-style content layout

Reusable card components

Interactive navigation using React Router

Responsive design for different screen sizes

Clean and consistent Spotify-inspired styling

Technical Implementation
State Management

I used useState to manage UI interactions such as active navigation states and dynamically rendered content cards. State allows components to update and re-render efficiently based on user interaction.

Routing Structure

The application uses React Router for navigation:

BrowserRouter wraps the application

Routes and Route define the page structure

Navigation links update the URL dynamically

The Vite base configuration ensures proper routing on GitHub Pages

Routing allows users to move between pages without refreshing the browser.

Hooks Used

useState – Managing component state

useEffect – Handling side effects (if applicable)

useCallback / useMemo – Performance optimization (if applicable)

Live Site URL

https://dylang61-pic.github.io/spotify-dg/

Repository URL

https://github.com/DylanG61-PIC/spotify-dg

Future Improvements

Integrate Spotify API for real music data

Add search functionality

Improve mobile responsiveness

Add animations and transitions

Implement user authentication
