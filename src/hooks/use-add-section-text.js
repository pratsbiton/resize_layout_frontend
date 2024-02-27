import { useMutation } from "@tanstack/react-query";
import { addSectionText } from "../services/card";
import { toast } from "react-toastify";
import { toastConfig } from "../constant";

export default function useAddSectionText() {
  return useMutation({
    mutationKey: ["addSectionText"],
    mutationFn: async (variables) => {
      const { data } = await addSectionText(variables?.body);

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
