import { useMutation } from "@tanstack/react-query";
import { toast } from "~/components/ui/use-toast";
import ClientAPI from "../dashboard/api";

const api = new ClientAPI("http://localhost:3001");
export const useUploadImage = () => {
  const { isPending, isSuccess, isError, mutate } = useMutation({
    mutationKey: ["upload-image"],
    mutationFn: async (file: File) => {
      const formData = new FormData();
      formData.append("file", file);

      return await api.uploadImage(formData);
    },
    onSuccess: ({ data }) => {
      toast({
        title: "Upload file successful.",
        description: `The file with the id ${data} was successfully uploaded.`,
      });
    },
    onError: ({ message }) => {
      toast({
        title: `Upload file failed.`,
        description: `An error occured while uploading image. Error: ${message}.`,
        variant: "destructive",
      });
    },
  });

  return { isPending, isSuccess, isError, mutate };
};
