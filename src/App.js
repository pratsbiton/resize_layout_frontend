import React, { useContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import {
  QueryClient,
  QueryClientProvider,
  useIsFetching,
  useIsMutating,
} from "@tanstack/react-query";
import "/node_modules/react-resizable/css/styles.css";
import "react-toastify/dist/ReactToastify.css";
import Home from "./container/home";
import FullScreenLoader from "./components/FullScreenLoader";
import { LoaderContext } from "./context/loader-context";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const AppInner = () => {
  const { loading, setLoading } = useContext(LoaderContext);

  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  useEffect(() => {
    if (isFetching > 0 || isMutating > 0) {
      setLoading(true);
    } else {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Disabled
  }, [isFetching, isMutating]);

  return (
    <>
      <Home />
      {loading ? <FullScreenLoader /> : null}
    </>
  );
};

const App = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <LoaderContext.Provider value={{ loading, setLoading }}>
          <AppInner />
          <ToastContainer />
        </LoaderContext.Provider>
      </QueryClientProvider>
    </>
  );
};

export default App;
