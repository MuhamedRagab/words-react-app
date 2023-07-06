import { WordData } from "../api/getWordData";

const WordSearchedResult = ({ wordData }: { wordData: WordData[] }) => {
  if (wordData.length === 0) return null;

  return (
    // create a component that will display the word searched like interfaces
    <div className="flex justify-center items-center w-full">
      <div className="bg-white rounded-lg shadow-2xl p-8 m-4 w-full text-center">
        <h1 className="text-3xl font-bold mb-4">Word Searched Result</h1>
        <div className="flex flex-col justify-center items-center w-full">
          <div className="border border-gray-400 w-full p-3 rounded-lg mb-4">
            <h1 className="text-3xl font-bold mb-4">{wordData[0].word}</h1>
            <h3 className="text-2xl font-bold mb-4">
              {wordData[0].meanings[0].partOfSpeech}
            </h3>
            <h4 className="text-2xl font-bold mb-4">
              {wordData[0].meanings[0].definitions[0].definition}
            </h4>
            {wordData[0].meanings[0].definitions[0].example && (
              <div>
                <h5 className="text-2xl font-bold mb-4 text-gray-500">
                  Example:
                </h5>
                <h5 className="text-2xl font-bold mb-4">
                  {wordData[0].meanings[0].definitions[0].example}
                </h5>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordSearchedResult;
