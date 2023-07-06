import { useState } from "react";
import SearchWord from "./components/SearchWord";
import WordSearchedResult from "./components/WordSearchedResult";
import { WordData } from "./api/getWordData";

export default function App() {
  const [wordData, setWordData] = useState<WordData[]>([]);

  return (
    <div className="flex flex-col justify-center items-center bg-gray-200 min-h-screen w-full">
      <SearchWord setWordData={setWordData} />
      <WordSearchedResult wordData={wordData} />
    </div>
  );
}
