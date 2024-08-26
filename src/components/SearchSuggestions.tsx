import React, { useState, useEffect, KeyboardEvent } from "react";
import { College } from "../types";

interface SearchSuggestionsProps {
  suggestions: College[];
  onSuggestionClick: (college: College) => void;
  searchTerm: string;
}

const SearchSuggestions: React.FC<SearchSuggestionsProps> = ({
  suggestions,
  onSuggestionClick,
  searchTerm,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  useEffect(() => {
    setSelectedIndex(-1);
  }, [suggestions]);

  const handleKeyDown = (e: KeyboardEvent<HTMLUListElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prevIndex) =>
        prevIndex < suggestions.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : -1));
    } else if (e.key === "Enter" && selectedIndex !== -1) {
      onSuggestionClick(suggestions[selectedIndex]);
    }
  };

  return (
    <ul
      className="search-suggestions-dropdown"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {suggestions.length === 0 ? (
        <li className="search-suggestion-item">
          No results found matching "{searchTerm}"
        </li>
      ) : (
        suggestions.map((college, index) => (
          <li
            key={college.id}
            className={`search-suggestion-item ${
              index === selectedIndex ? "selected" : ""
            }`}
            onClick={() => onSuggestionClick(college)}
            onMouseEnter={() => setSelectedIndex(index)}
          >
            <img
              src={college.imageUrl}
              alt={college.name}
              className="suggestion-icon"
            />
            {college.name}
          </li>
        ))
      )}
    </ul>
  );
};

export default SearchSuggestions;
