// src/components/SearchBar.tsx
import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="mb-4">
      <input type="text" className="border p-2" placeholder="Cari MataKuliah, NamaDosen, atau Nik..." value={query} onChange={(e) => setQuery(e.target.value)} />
      <button className="bg-blue-500 text-white p-2 ml-2" onClick={handleSearch}>
        Cari
      </button>
    </div>
  );
};

export default SearchBar;
