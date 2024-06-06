import logger from "morgan";
import express from "express";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 5000;
const fetch = require('node-fetch');

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', express.static(join(__dirname, '../client.front-main')));




// LeetCode GraphQL endpoint
const GRAPHQL_ENDPOINT = 'https://leetcode.com/graphql';

// GraphQL query
const query = `
{
  problemsetQuestionList: questionList(
    categorySlug: "",
    limit:  4000,
    filters: {}
  ) {
    total: totalNum
    questions: data {
      title
      titleSlug
      topicTags {
        name
        slug
      }
    }
  }
}
`;

/**
 * Fetches data from the LeetCode GraphQL endpoint.
 * 
 * @async
 * @function fetchGraphQLData
 * @returns {Promise<Object>} The JSON response from the GraphQL API.
 * @throws {Error} If the fetch operation fails.
 */
const fetchGraphQLData = async () => {
  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

/**
 * Endpoint to fetch data from the LeetCode GraphQL API.
 * 
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
app.get('/graphql', async (req, res) => {
  try {
    const data = await fetchGraphQLData();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// Start the server
app.listen(port, () => console.log('Server Running'));
