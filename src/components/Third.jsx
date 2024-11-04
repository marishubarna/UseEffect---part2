import React from "react";
import { useState, useEffect } from "react";
const Third = () => {
  const [search, setSearchList] = useState("");
  const [result, setResult] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handelChanges = (e) => {
    setSearchList(e.target.value);
  };

  useEffect(() => {
    if (search === "") {
      setResult([]);
      return;
    }

    setIsSearching(true);

    const timeoutId = setTimeout(() => {
      const searchResults = mockSearch(search);
      setResult(searchResults);
      setIsSearching(false);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [search]);

  const mockSearch = (searchTerm) => {
    const sampleData = ["JavaScript", "Html", "Css", "C++", "Bootstrap"];
    return sampleData.filter((items) =>
      items.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handelChanges}
      />
      {isSearching && <p>Пошук...</p>}
      <ul>
        {result.length > 0 ? (
          result.map((result, index) => <li key={index}> {result} </li>)
        ) : (
          <p>Збіги не знайдені</p>
        )}
      </ul>
    </div>
  );
};

export default Third;
