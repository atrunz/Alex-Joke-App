import React, { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [song, setSong] = useState(null)
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('pop')


  const searchTerms = [
  'pop',
  'rock',
  'indie',
  'hip hop',
  'jazz',
  'electronic',
  'alternative',
  'r&b'
]


  const fetchRandomSong = async () => {
    setLoading(true)

    try {
      const response = await fetch(`https://itunes.apple.com/search?term=${searchTerm}&entity=song&limit=35`)
      const data = await response.json()
      const results = data.results
      const randomIndex = Math.floor(Math.random() * results.length)
      const randomSong = results[randomIndex]
      setSong(randomSong)
    } catch (error) {
      console.error('Failed to fetch song:', error)
    } finally {
      setLoading(false)
    }
  }

const changePool = () => {
  const randomTerm =
    searchTerms[Math.floor(Math.random() * searchTerms.length)]

  setSearchTerm(randomTerm)
  fetchRandomSong()
}

  useEffect(() => {
    fetchRandomSong()
  }, [])

  return (
    <div className="app">
      <h1>Music App</h1>

      <div className="button-group">
        <button onClick={fetchRandomSong} disabled={loading}>
          {loading ? 'Loading...' : 'Get Song'}
        </button>

        <button onClick={changePool}>
          Change Pool
        </button>
      </div>

      {loading && <p className="loading-text">Loading song...</p>}
      {song && !loading && (
        <div className="music-card">
        <p className="track-name">{song.trackName}</p>
        <p className="artist-name">{song.artistName}</p>

        <img
          className="album-art"
          src={song.artworkUrl100}
          alt={`Album art for ${song.trackName}`}
        />

        <audio className="audio-player" controls src={song.previewUrl}>
          Your browser does not support the audio element.
        </audio>
      </div>
      )}
    </div>
  )
}

export default App

