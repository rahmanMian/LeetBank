import React, { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import "./searchBar.css";
import Axios from "axios";
import debounce from "lodash.debounce"; // Import debounce function

export function SearchBar({ setResults, input, setInput, setSearchBarClicked }) {

  const handleClick = () => {
    setSearchBarClicked(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setSearchBarClicked(false);
    }, 300); // Adjust delay as needed
  };

  // Debounced handleChange function
  const debouncedFetchData = debounce(async (value) => {
    setInput(value);

    if (value === "") {
      setResults([]);
      return;
    }

    try {
      const response = await Axios.post("http://localhost:5001/graphql", { searchKeywords: value });
      const questionArray = response.data.data.problemsetQuestionList.questions;
      const lowercaseValue = value.toLowerCase();

      const results = questionArray.filter((question) => {
        const lowercaseTitle = question.title.toLowerCase();
        return lowercaseTitle.includes(lowercaseValue) || lowercaseValue.includes(lowercaseTitle);
      });

      setResults(results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, 500); // Debounce delay of 500ms (adjust as needed)

  // Handle change with debounced function
  const handleChange = (e) => {
    const { value } = e.target;
    debouncedFetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Add a Question.."
        id="questionInput"
        value={input}
        onClick={handleClick}
        onBlur={handleBlur}
        onChange={handleChange}
      />
    </div>
  );
}
