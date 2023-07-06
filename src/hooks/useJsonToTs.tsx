import JsonToTS from "json-to-ts";

const useJsonToTs = (obj: unknown, rootName: string) => {
  const interfaces: unknown[] = [];

  JsonToTS(obj, { rootName }).forEach((tsInterface) => {
    interfaces.push(tsInterface);
  });

  console.log(interfaces.join("\n\n"));
};

export default useJsonToTs;
