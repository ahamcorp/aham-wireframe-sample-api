const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// import matches from './fillerFiles/fillerMatches.js';

const sampleProMatches = require('./fillerFiles/fillerMatches');
const sampleCounters = require('./fillerFiles/fillerCounters');
const sampleDuoList = require('./fillerFiles/fillerDuoList');
const sampleItems = require('./fillerFiles/fillerItems');
const sampleSkills = require('./fillerFiles/fillerSkills');
const sampleRunes = require('./fillerFiles/fillerRunes');
const sampleTrendsData = require('./fillerFiles/fillerTrendsData');
const sampleProfileCounter = require('./fillerFiles/fillerProfileCounter');
const sampleChampionRankings = require('./fillerFiles/fillerChampionRankings');
const sampleVideoComments = require('./fillerFiles/fillerVideoComments');
const sampleProsList = require('./fillerFiles/fillerProsList');
const sampleLoginDatabase = require('./fillerFiles/fillerLoginInfo');
const sampleOverallTabTrendsData = require('./fillerFiles/fillerOverallTabTrendsData');
const sampleUserAnalysisInfo = require('./fillerFiles/fillerUserAnalysisInfo');
const sampleUserAnalysisMatchupList = require('./fillerFiles/fillerUserAnalysisMatchupList');


app.get('/sample-pro-matches', (req, res) => {
    return res.send(sampleProMatches.matches);
});

app.get('/sample-counters', (req, res) => {
    return res.send(sampleCounters.counters);
});

app.get('/sample-duo-list', (req, res) => {
    return res.send(sampleDuoList.duoList);
});

app.get('/sample-items', (req, res) => {
    return res.send(sampleItems);
});

app.get('/sample-skills', (req, res) => {
    return res.send(sampleSkills);
});

app.get('/sample-runes', (req, res) => {
    return res.send(sampleRunes.runeList);
});

app.get('/sample-keystones', (req, res) => {
    return res.send(sampleRunes.keyStoneList);
});

app.get('/sample-trends-data', (req, res) => {
    return res.send(sampleTrendsData);
});

app.get('/sample-profile-counter', (req, res) => {
    return res.send(sampleProfileCounter);
});

app.get('/sample-champion-rankings', (req, res) => {
    return res.send(sampleChampionRankings);
});

app.get('/sample-video-comments', (req, res) => {
    return res.send(sampleVideoComments.comments);
});

app.get('/sample-pros-list', (req, res) => {
    return res.send(sampleProsList.prosList);
});

app.get('/sample-overall-tabs-trends-data', (req, res) => {
    return res.send(sampleOverallTabTrendsData);
});

app.post('/sample-login', (req, res) => {
    const {username, password} = req.body;
    for (const user of sampleLoginDatabase.users){
        if (user.username===username){
            if (user.password===password){
                return res.send({validity: true, summonername: user.summonername});
            } else {
                break;
            }
        }
    }
    return res.send({status: false});
});

app.get('/sample-user-analysis', (req, res) => {
    return res.send(sampleUserAnalysisInfo);
});

app.get('/user-analysis-matchup-list', (req, res) => {
    return res.send(sampleUserAnalysisMatchupList);
});

app.listen(3000);