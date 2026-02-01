# Programming Quiz

A programming quiz web app built with React + Vite. Features 12 questions about JavaScript, HTML, and algorithms.

## Features

- **12 questions** about programming: JavaScript, data types, algorithms, data structures, HTML...
- **Select answers** and get instant feedback (correct/incorrect)
- **Navigate** between questions: Back and Next buttons
- **Results screen** displays the number of correct answers after completion
- **Review**: Go back through answered questions (keeps your answers)
- **Restart**: Take the quiz again from the beginning (resets score and answers)

## Tech Stack

- React 19
- Vite 7
- ESLint

## Installation & Running

```bash
# Install dependencies
npm install

# Run development mode
npm run dev

# Build for production
npm run build

# Preview the build
npm run preview
```

## Project Structure

```
src/
├── App.jsx          # Main component, displays title and Quiz
├── main.jsx         # Entry point
├── index.css        # Global styles
└── components/
    ├── Quiz.jsx     # Quiz logic, questions, navigation
    └── Results.jsx  # Results screen, Review / Restart buttons
```

## Scripts

| Script            | Description                  |
|-------------------|------------------------------|
| `npm run dev`     | Run dev server (HMR)         |
| `npm run build`   | Build for production         |
| `npm run preview` | Preview the build            |
| `npm run lint`    | Run ESLint                   |
