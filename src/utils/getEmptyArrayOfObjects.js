import { v4 as uuid } from "uuid";

export const getEmptyArrayOfObjects = (arrayLength, data) => {
    console.log(data);
    return new Array(arrayLength).fill(data).map((_) => ({ _id: uuid() }));
  };
