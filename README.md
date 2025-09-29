# Football News Editor

## Overview
The Football News Editor is a simple web application designed for editing football match news. It allows users to select matches from today and yesterday, providing a template for reporting scores, goal scorers, and match details.

## Features
- View and select matches from today and yesterday.
- Edit match news, including scores and goal scorers.
- Display detailed information about selected matches.

## Project Structure
```
football-news-editor
├── src
│   ├── components
│   │   ├── MatchCard.ts
│   │   ├── MatchList.ts
│   │   ├── ScoreEditor.ts
│   │   └── MatchDetails.ts
│   ├── models
│   │   ├── Match.ts
│   │   ├── Player.ts
│   │   └── Team.ts
│   ├── services
│   │   ├── MatchService.ts
│   │   └── NewsService.ts
│   ├── utils
│   │   ├── dateUtils.ts
│   │   └── formatters.ts
│   └── app.ts
├── public
│   ├── styles
│   │   └── main.css
│   └── index.html
├── package.json
├── tsconfig.json
└── README.md
```

## Installation
1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install the dependencies.

## Usage
- Start the application using `npm start`.
- Open your browser and navigate to `http://localhost:3000` to access the application.

## License
This project is licensed under the MIT License.