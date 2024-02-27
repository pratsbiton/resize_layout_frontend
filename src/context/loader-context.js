import { createContext } from "react";

const LoaderContext = createContext({
  loading: false,
  setLoading: (loading) => {},
});

export { LoaderContext };
