import { axiosInstance } from "../axios.instance";
import { useMutation } from "react-query";
import React from "react";

interface TWordDataApi {
  WordData: WordData[];
}

export interface WordData {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  license: License;
  sourceUrls: string[];
}

interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
}

interface Definition {
  definition: string;
  synonyms: string[];
  antonyms: string[];
  example?: string;
}

interface Phonetic {
  text: string;
  audio: string;
  sourceUrl: string;
  license: License;
}

interface License {
  name: string;
  url: string;
}

export const GetWordData = (
  setWordData: React.Dispatch<React.SetStateAction<WordData[]>>
) => {
  const { mutate } = useMutation<TWordDataApi>({
    mutationKey: "word",
    mutationFn: async (word: string) =>
      await axiosInstance.get<TWordDataApi>(word),
    onSuccess: ({ data }: { data: WordData[] }) => {
      setWordData(data);
    },
    onError: (error: unknown) => {
      console.log(error);
      alert("Bad Word, Try Again");
    },
  });

  return { mutate };
};
