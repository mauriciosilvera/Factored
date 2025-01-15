"use client";

import { fetchData } from "../../services/api";
import CharacterCard from "../../components/CharacterCard";
import { CharactersResponse, Character } from "../../typing";
import { useState, useEffect } from "react";

export default function Characters() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<CharactersResponse | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 6;

  useEffect(() => {
    const loadData = async () => {
      const result = await fetchData<CharactersResponse>("people");
      setData(result);
    };
    loadData();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  if (!data)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="text-3xl font-bold">Loading...</span>
      </div>
    );

  const filteredResults = data.results.filter((character: Character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredResults.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredResults.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="min-h-screen p-8 sm:p-16">
      <h1 className="text-3xl font-bold text-center mb-12">
        Star Wars Characters
      </h1>

      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 rounded bg-black text-white border border-gray-700 focus:border-yellow-400 focus:outline-none"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
        {currentItems.map((character) => (
          <CharacterCard
            key={character.uid}
            name={character.name}
            uid={character.uid}
          />
        ))}
      </div>

      {filteredResults.length > itemsPerPage && (
        <>
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50"
            >
              Previous
            </button>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
          <div className="flex justify-center mt-2">
            <span className="px-4 py-2">
              Page {currentPage} of {totalPages}
            </span>
          </div>
        </>
      )}
    </div>
  );
}
