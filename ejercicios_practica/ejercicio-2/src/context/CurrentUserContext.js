import { createContext } from "react";

const defaultValue = {
  name: ""
}

export const CurrentUserContext = createContext(defaultValue);
