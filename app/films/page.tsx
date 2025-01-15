"use client";

import { fetchData } from "../../services/api";
import { FilmsResponse } from "../../typing";
import { useState, useEffect } from "react";
import FilmCard from "../../components/FilmCard";

export default function Films() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<FilmsResponse | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 6;

  useEffect(() => {
    const loadData = async () => {
      const result = await fetchData<FilmsResponse>("films");
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

  const filteredResults = data.result.filter((film) =>
    film.properties.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredResults.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredResults.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="min-h-screen p-8 sm:p-16">
      <h1 className="text-3xl font-bold text-center mb-12">Star Wars Films</h1>

      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 rounded bg-black text-white border border-gray-700 focus:border-yellow-400 focus:outline-none"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {currentItems.map((film) => (
          <FilmCard
            key={film.uid}
            title={film.properties.title}
            episodeId={film.properties.episode_id}
            director={film.properties.director}
            releaseDate={film.properties.release_date}
          />
        ))}
      </div>

      {filteredResults.length > itemsPerPage && (
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-black text-white rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="px-4 py-2">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-black text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
