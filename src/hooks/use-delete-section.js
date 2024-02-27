import { useMutation } from "@tanstack/react-query";
import { deleteSection } from "../services/card";
import { toast } from "react-toastify";
import { toastConfig } from "../constant";

export default function useDeleteSection() {
  return useMutation({
    mutationKey: ["deleteSection"],
    mutationFn: async (variables) => {
      const { data } = await deleteSection(variables?.body);

      return data;
    },
    onSuccess: () => {},
    onError: (error) => {
      const message =
        error?.response?.data?.message ||
        "Something went wrong! Please try again";

      toast.error(message, toastConfig);
    },
  });
}
