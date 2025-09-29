import express from 'express';
import bodyParser from 'body-parser';
import { MatchService } from './services/MatchService';
import { NewsService } from './services/NewsService';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

const matchService = new MatchService();
const newsService = new NewsService();

app.get('/api/matches/today', async (req, res) => {
    const matches = await matchService.getMatchesForToday();
    res.json(matches);
});

app.get('/api/matches/yesterday', async (req, res) => {
    const matches = await matchService.getMatchesForYesterday();
    res.json(matches);
});

app.post('/api/news', (req, res) => {
    const newsArticle = newsService.createNewsArticle(req.body);
    res.status(201).json(newsArticle);
});

app.listen(port, () => {
    console.log(`Football News Editor app is running at http://localhost:${port}`);
});