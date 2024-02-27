import { useMutation } from "@tanstack/react-query";
import { updateSectionText } from "../services/card";
import { toast } from "react-toastify";
import { toastConfig } from "../constant";

export default function useUpdateSectionText() {
  return useMutation({
    mutationKey: ["updateSectionText"],
    mutationFn: async (variables) => {
      const { data } = await updateSectionText(variables?.id, variables?.body);

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
