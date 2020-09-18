import express from 'express';
import fetch  from 'node-fetch';
import 'dotenv/config';

import cors from 'cors';

const SECRET_API = process.env.NY_TIMES_API_KEY;
const PORT = process.env.PORT || 3333;

const app = express();

let data: Array<Object>= [];

const hostname = 'https://api.nytimes.com/svc/topstories/v2/';
const path1 = `technology.json?api-key=${SECRET_API}`;
const path2 = `science.json?api-key=${SECRET_API}`;

interface StoryProps {
  byline: string;
  abstract: string;
  section: string;
  short_url: string;
  title: string;
  published_date: string;
  multimedia:[{
     url: string
   }]
}

const loadContent = async () => {
    try {
      const response1 = await fetch(`${hostname}${path1}`);
      const json1 = await response1.json();


      json1.results.forEach((row: StoryProps) => {

        data.push({
          byline: row.byline,
          abstract: row.abstract,
          section: row.section,
          short_url: row.short_url,
          title: row.title,
          published_date: row.published_date,
          multimedia: row.multimedia && row.multimedia[0].url
        })
      
      });

    
      const response2 = await fetch(`${hostname}${path2}`);
      const json2 = await response2.json();

      json2.results.forEach((row: StoryProps) => {

        data.push({
          byline: row.byline,
          abstract: row.abstract,
          section: row.section,
          short_url: row.short_url,
          title: row.title,
          published_date: row.published_date,
          multimedia: row.multimedia && row.multimedia[0].url
        })
      
      });

    } catch (error) {
      console.log(error);
    }
  };
  
  loadContent();

app.use(cors())

app.get('/stories', (request, response) => {
    return response.json({ stories: data })
})

app.listen(PORT, () => {
    console.log(`🚀 Server started on port ${PORT}`)
});
