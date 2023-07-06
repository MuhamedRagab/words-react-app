import React from "react";
import { GetWordData, WordData } from "../api/getWordData";

const SearchWord = ({
  setWordData,
}: {
  setWordData: React.Dispatch<React.SetStateAction<WordData[]>>;
}) => {
  const { mutate } = GetWordData(setWordData);

  const searchWord = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const word = formData.get("word") as string;
    if (word.trim().length === 0) return alert("Please enter a word");
    mutate(word);
  };

  return (
    <div className="flex justify-center items-center w-full sm:w-1/2">
      <div className="bg-white rounded-lg shadow-2xl p-8 m-4 w-full text-center">
        <h1 className="text-3xl font-bold mb-4">Search Word</h1>
        <form
          onSubmit={searchWord}
          className="flex flex-col justify-center items-center w-full"
        >
          <input
            name="word"
            type="text"
            placeholder="Search Word"
            className="border border-gray-400 w-full p-3 rounded-lg mb-4"
            minLength={1}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold p-2 rounded-lg w-full"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchWord;
