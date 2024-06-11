import express from "express";
import logger from "morgan";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createProxyMiddleware } from 'http-proxy-middleware';
import fetch from 'node-fetch';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 5000;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Proxy to React app
app.use(
  '/api',
  createProxyMiddleware({
    target: 'http://localhost:3000',
    changeOrigin: true,
    ws: true,
  })
);

// LeetCode GraphQL endpoint
const GRAPHQL_ENDPOINT = 'https://leetcode.com/graphql';

// GraphQL query with dynamic filters
const query = `
  query($filters: QuestionListFilterInput) {
    problemsetQuestionList: questionList(
      categorySlug: "",
      filters: $filters
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
 * @param {Object} filters - The filter object for the GraphQL query.
 * @returns {Promise<Object>} The JSON response from the GraphQL API.
 * @throws {Error} If the fetch operation fails.
 */
const fetchGraphQLData = async (filters) => {
  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: { filters }, // Pass filters here
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export default fetchGraphQLData;
/**
 * Endpoint to fetch data from the LeetCode GraphQL API based on filters.
 * 
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
app.post('/graphql', async (req, res) => {
  const { searchKeywords } = req.body;

  // Validate input
  if (!searchKeywords || typeof searchKeywords !== 'string') {
    return res.status(400).json({ error: 'Invalid searchKeywords parameter' });
  }

  const filters = {
    searchKeywords,
  };

  try {
    const data = await fetchGraphQLData(filters);
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// Start the server
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
