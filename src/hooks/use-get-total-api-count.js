import { useQuery } from "@tanstack/react-query";
import { getTotalAPICount } from "../services/card";

export default function useGetTotalAPICount() {
  return useQuery({
    queryKey: ["getTotalAPICount"],
    queryFn: async () => {
      const { data } = await getTotalAPICount();

      return data;
    },
  });
}
