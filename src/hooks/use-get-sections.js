import { useQuery } from "@tanstack/react-query";
import { getSections } from "../services/card";

export default function useGetSections() {
  return useQuery({
    queryKey: ["getSections"],
    queryFn: async () => {
      const { data } = await getSections();

      return data;
    },
  });
}
