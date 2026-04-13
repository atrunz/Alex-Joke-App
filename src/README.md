# Random Music Preview App
## Description
This is a React application that fetches a random song using a public API and displays its title, artist, and album artwork. Users can click a button to load a new random song and listen to a short preview directly in the browser. The app demonstrates asynchronous data fetching, state management, and conditional rendering in React.
## API Used
iTunes Search API
https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/index.html
## How to Run Locally
Clone the repository:
git clone https://github.com/yourusername/your-repo-name.git
Navigate into the project directory:
cd your-repo-name
Install dependencies:
npm install
Start the development server:
npm run dev
Open your browser and go to:
http://localhost:5173
## Technical Challenge
One challenge I encountered was adapting my app from using a simple API (jokes) to a more complex API structure. The iTunes API returns an array of results instead of a single object, so I had to learn how to select a random item from the results array before updating state.
Another issue was identifying the correct fields to use from the API response (such as trackName, artistName, artworkUrl100, and previewUrl). I resolved this by reviewing the API documentation and inspecting the response in the browser console to understand its structure.