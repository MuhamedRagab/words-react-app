import { axiosInstance } from "../axios.instance";
import { useMutation } from "react-query";
import React from "react";

export interface TWordDataApi {
  data: WordData[];
}
export interface WordData {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  license: License;
  sourceUrls: string[];
}
[];
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
  setWordData: React.Dispatch<React.SetStateAction<TWordDataApi>>
) => {
  const { mutate } = useMutation<TWordDataApi, unknown, string>({
    mutationKey: "word",
    mutationFn: async (word: string) => {
      const { data } = await axiosInstance.get<TWordDataApi>(word);
      return data;
    },
    onSuccess: (data) => {
      setWordData(data);
    },
    onError: (error: unknown) => {
      console.error(error);
      alert("Word not found");
    },
  });

  return { mutate };
};
