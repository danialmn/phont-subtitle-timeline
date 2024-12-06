# PHONT Subtitle Timeline

An interactive React-based subtitle timeline component with dynamic playback and animation features.

## 🌟 Features

- Interactive timeline with click-to-seek functionality
- Dynamic subtitle display with animations
- Play/Pause controls
- Animation toggle
- Real-time time tracking
- Modern, responsive design
- Export capability

## 🚀 Tech Stack

- React
- JavaScript (ES6+)
- CSS
- Custom React Hooks
- Functional Components

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx         # Page header with title and export button
│   ├── Controls.jsx       # Playback and animation controls
│   ├── SubtitleDisplay.jsx# Subtitle rendering component
│   ├── Timeline.jsx       # Interactive timeline component
│   └── SubtitleTimeline.jsx# Main component
├── hooks/
│   └── useTimeControl.js  # Custom hook for time management
├── data/
│   └── subtitle.json      # Subtitle data
├── App.css               # Styles
└── App.jsx              # Root component
```

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/phont-subtitle-timeline.git
   cd phont-subtitle-timeline
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## 💻 Usage

1. The timeline shows the progress of subtitle playback
2. Click anywhere on the timeline to jump to that position
3. Use the Play/Pause button to control playback
4. Toggle the animation switch to enable/disable subtitle animations
5. Current time is displayed in the controls section
6. Export button available for future functionality

## 📝 License

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.

## 👥 Authors

- Initial work - Danial Mosayebnejad

