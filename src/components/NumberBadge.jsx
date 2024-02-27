import React, { useEffect } from "react";
import "../NumberBadge.css"; // Import CSS file for styling
import useGetTotalAPICount from "../hooks/use-get-total-api-count";
import { useIsFetching, useIsMutating } from "@tanstack/react-query";

const NumberBadge = () => {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();
  const { data, refetch } = useGetTotalAPICount();

  useEffect(() => {
    if (isFetching || isMutating) {
      refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- D
  }, [isFetching, isMutating]);

  return <div className="number-badge">{data?.totalCount || 0}</div>;
};

export default NumberBadge;
