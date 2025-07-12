"use client";

import { Loader2, UploadCloud } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button, buttonVariants } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { useToast } from "~/components/ui/use-toast";
import { cn } from "~/lib/utils";
import { useUploadImage } from "../../hooks/useUploadImage";

export default function UploadMediaDialog() {
  const { toast } = useToast();

  /** local state for file. */
  const [file, setFile] = React.useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = React.useState<string | null>(null);

  const { mutate, isPending } = useUploadImage();

  /** state for add client action */
  const onOpenFile = React.useCallback(
    (files: FileList | null) => {
      const file = files?.[0];
      if (file === undefined) return;

      if (!["image/jpeg", "image/png"].includes(file.type)) {
        setFile(null);
        setPreviewUrl(null);

        toast({
          title: "File type is not valid. Please select a JPG or PNG image.",
          variant: "destructive",
        });
        return;
      }
      setFile(file);

      /** generate preview url */
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    },
    [toast],
  );

  const onUploadImage = () => {
    if (!file) {
      toast({
        title: "No File selected. Please select a file to upload.",
        variant: "destructive",
      });

      return;
    }

    mutate(file);
  };

  /** clean up preview url to prevent memory leaks. */
  React.useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
    <Dialog>
      <DialogTrigger
        className={cn(
          buttonVariants({ size: "icon", variant: "outline" }),
          "flex items-center gap-x-2",
        )}
      >
        <UploadCloud className="aspect-square w-4" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>RSVP Background Image</DialogTitle>
          <DialogDescription>
            <div className="mt-2 grid gap-4">
              <Input
                type="file"
                className="cursor-pointer"
                onChange={(e) => onOpenFile(e.target.files)}
              />

              {previewUrl && (
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    Image preview
                  </p>
                  <Image
                    src={previewUrl}
                    alt="Preview"
                    className="mt-2 h-auto max-w-full rounded"
                    width={200}
                    height={0}
                  />
                </div>
              )}

              <div className="flex gap-x-2">
                {isPending ? (
                  <Button
                    className="flex items-center gap-1"
                    variant={"secondary"}
                    disabled
                  >
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <p>Uploading ...</p>
                  </Button>
                ) : (
                  <Button
                    className="flex items-center gap-x-2"
                    onClick={onUploadImage}
                  >
                    <UploadCloud className="aspect-square w-4" />
                    Upload image
                  </Button>
                )}
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
