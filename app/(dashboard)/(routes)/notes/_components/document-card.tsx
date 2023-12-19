"use client";

import { buttonVariants } from "@/components/ui/button";
import { DocumentType } from "./sidebar";
import { cn } from "@/lib/utils";
import { FileText } from "lucide-react";
import { usePathname } from "next/navigation";
import DocumentOperations from "./document-operations";
import Link from "next/link";

export default function DocumentCard({ document }: { document: DocumentType }) {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        buttonVariants({ variant: "outline" }),
        "h-8 w-full justify-between rounded-none hover:bg-gray-500",
        pathname === `/notes/${document.publicId}` && "bg-secondary"
      )}
    >
      <Link
        className="flex w-full items-center"
        href={`/notes/${document.publicId}`}
      >
        <FileText className="mr-2 h-4 w-4" />
        <div className="w-52 overflow-hidden truncate text-ellipsis whitespace-nowrap">
          {document.title}
        </div>
      </Link>
      <div className="">
      <DocumentOperations publicId={document.publicId} title={document.title} />
      </div>
      
    </div>
  );
}