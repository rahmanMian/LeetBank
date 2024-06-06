
const express = require('express');
const fetch = require('node-fetch');

const app = express();



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

// Endpoint to fetch data
app.get('/graphql', async (req, res) => {
  try {
    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({query}),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});


app.listen(5000, () => console.log('Server Running'));



