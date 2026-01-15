# Ops AI - Intelligent Conversational Assistant

<div align="center">

![React](https://img.shields.io/badge/React-19.2.0-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite)
![Google Gemini](https://img.shields.io/badge/Google%20Gemini-AI%20Powered-4285F4?style=for-the-badge&logo=google)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A modern, real-time AI chatbot interface powered by Google Gemini API**

[Features](#features) • [Getting Started](#getting-started) • [Architecture](#architecture) • [API Reference](#api-reference)

</div>

---

## 🎯 What is Ops AI?

**Ops AI** is a cutting-edge web application that brings intelligent conversational capabilities to your fingertips. Built with React and powered by Google's advanced Gemini AI model, Ops AI provides seamless, real-time conversations with an intelligent assistant.

Whether you need quick answers, assistance with tasks, or intelligent conversation - Ops AI delivers professional-grade AI interactions through an intuitive, modern interface.

### Key Highlights
- ⚡ **Lightning-Fast Responses** - Real-time AI conversations with minimal latency
- 🎨 **Modern UI/UX** - Clean, responsive design with smooth animations
- 🔄 **Persistent Chat History** - View entire conversation threads with context awareness
- 🤖 **Powered by Google Gemini** - State-of-the-art AI model for intelligent responses
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices

---

## ✨ Features

### Core Functionality
- **Real-Time Chat Interface** - Send messages and receive intelligent responses instantly
- **Message History Management** - Track complete conversation threads with role-based message display
- **Auto-Scrolling** - Chat body automatically scrolls to the latest message
- **Thinking State** - Visual feedback with "Thinking..." indicator while AI processes requests
- **Word Wrapping** - Long messages gracefully wrap without overflow

### User Experience
- **Intuitive Input Form** - Easy message submission with text input and send button
- **Visual Message Differentiation** - Distinct styling for user vs. bot messages
- **Icon Integration** - Custom chatbot icon displays for AI responses
- **Empty State Handling** - Prevents submission of empty messages
- **Material Design Icons** - Professional icon system using Google Material Symbols

### Technical Excellence
- **Component-Based Architecture** - Modular, reusable React components
- **State Management** - React Hooks (useState, useRef, useEffect) for efficient state handling
- **API Integration** - Seamless integration with Google Gemini API
- **Error Handling** - Robust error catching and user feedback
- **Markdown Processing** - Automatic removal of markdown formatting from API responses

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **yarn** package manager
- **Google Gemini API Key** (Get it from [Google AI Studio](https://aistudio.google.com/))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ops-ai.git
   cd ops-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_API_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=YOUR_API_KEY_HERE
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:5173` (or the URL shown in terminal)

### Building for Production

```bash
npm run build
```

The optimized build will be created in the `dist/` directory.

---

## 🏗️ Project Architecture

### Component Structure

```
ops-ai/
├── src/
│   ├── App.jsx                 # Main application component & chat logic
│   ├── main.jsx                # React root entry point
│   ├── index.css               # Global styling & component styles
│   └── Components/
│       ├── ChatForm.jsx        # Message input form component
│       ├── ChatMessage.jsx     # Individual message display component
│       └── ChatbotIcon.jsx     # Chatbot visual icon component
├── index.html                  # HTML entry point
├── vite.config.js              # Vite configuration
├── package.json                # Project dependencies
└── .env                        # Environment variables (API key)
```

### Data Flow

```
User Input
    ↓
ChatForm (handles submission)
    ↓
App.jsx (updates chat history)
    ↓
generateBotResponse (calls Gemini API)
    ↓
API Response Processing (remove markdown)
    ↓
ChatMessage Component (renders messages)
    ↓
Display in Chat UI
```

---

## 🔌 API Reference

### Google Gemini API Integration

**Endpoint:** `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent`

**Request Format:**
```json
{
  "contents": [
    {
      "role": "user|model",
      "parts": [{ "text": "message content" }]
    }
  ]
}
```

**Response Format:**
```json
{
  "candidates": [
    {
      "content": {
        "parts": [
          { "text": "AI response text" }
        ]
      }
    }
  ]
}
```

---

## 📋 Component Details

### `App.jsx` - Main Application Logic
- **State Management**: Maintains chat history and manages component references
- **generateBotResponse()**: Handles API calls to Gemini, formats history, and updates UI
- **Auto-scroll**: Uses useEffect to keep chat scrolled to the latest message
- **Error Handling**: Catches and logs API errors gracefully

### `ChatForm.jsx` - User Input Handler
- **Message Submission**: Processes form submission and validates input
- **Chat History Update**: Adds user message to conversation history
- **Delayed Bot Response**: Shows "Thinking..." state before API response
- **Input Clearing**: Clears input field after message submission

### `ChatMessage.jsx` - Message Renderer
- **Conditional Rendering**: Displays bot icon only for AI messages
- **Dynamic Styling**: Applies different styles based on message role (user/model)
- **Message Display**: Renders text content with proper formatting

### `ChatbotIcon.jsx` - Visual Component
- **SVG Icon**: Custom bot icon displayed next to AI messages
- **Fixed Sizing**: Maintains consistent 28x28px dimension

---

## 🎨 Styling & UI

### Color Scheme
- **Bot Message Background**: `#f3f1ff` (Light Purple)
- **Bot Message Text**: `#333` (Dark Gray)
- **User Message Background**: `#6f63c6` (Purple)
- **User Message Text**: `white`
- **Icon Color**: `#6f63c6` (Purple)
- **Background**: Neutral tone with chatbot popup container

### Responsive Features
- **Max Message Width**: 75% of container
- **Flexible Layout**: Flexbox for responsive message arrangement
- **Word Wrapping**: Prevents message overflow on narrow screens
- **Touch-Friendly**: Adequate button sizing for mobile interaction

---

## 🛠️ Technologies Used

| Technology | Purpose | Version |
|-----------|---------|---------|
| **React** | UI Library | 19.2.0 |
| **Vite** | Build Tool & Dev Server | 7.2.4 |
| **Google Gemini API** | AI Backend | v1beta |
| **CSS3** | Styling | Latest |
| **ES6+ JavaScript** | Programming Language | Latest |

---

## 📦 Dependencies

### Runtime
- `react@^19.2.0` - UI library
- `react-dom@^19.2.0` - React DOM rendering

### Development
- `vite@^7.2.4` - Build tool
- `@vitejs/plugin-react@^5.1.1` - React plugin for Vite
- `eslint@^9.39.1` - Code quality
- Additional ESLint plugins for React

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
# Google Gemini API Configuration
VITE_API_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=YOUR_API_KEY
```

⚠️ **Never commit your `.env` file to version control!** Add it to `.gitignore`.

---

## 🚦 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint for code quality
npm lint
```

---

## 📊 Project Statistics

- **Total Components**: 4 main components
- **Lines of Code**: ~250 (excluding styling)
- **External API Calls**: Google Gemini API
- **State Management**: React Hooks
- **Build Tool**: Vite (Ultra-fast development experience)

---

## 🐛 Troubleshooting

### Issue: "API Key Error" or "401 Unauthorized"
**Solution**: Verify your API key is valid and correctly set in the `.env` file.

### Issue: Messages not displaying
**Solution**: 
- Check browser console for errors
- Ensure chatbot icon and message components are properly imported
- Verify API response structure matches expected format

### Issue: App not responding to input
**Solution**:
- Verify input ref is properly connected to the input element
- Check that ChatForm component receives required props
- Clear browser cache and restart dev server

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🙌 Acknowledgments

- **Google Gemini API** - Powering the intelligent responses
- **React Team** - For the amazing UI library
- **Vite Team** - For the blazing-fast build tool
- **Material Design** - For beautiful icon system

---

## 📞 Support

For issues, questions, or suggestions:
- 📧 Email: support@opsai.dev
- 🐛 [Report Issues](https://github.com/yourusername/ops-ai/issues)
- 💬 [Discussions](https://github.com/yourusername/ops-ai/discussions)

---

<div align="center">

**Made with ❤️ using React & Google Gemini AI**

⭐ If you find this project helpful, please consider giving it a star!

</div>
