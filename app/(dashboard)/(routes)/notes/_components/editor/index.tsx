"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import { useState, useEffect, useTransition, useRef } from "react";
import { useRouter } from "next/navigation";
import { TipTapEditorExtensions } from "./extensions";
import { TipTapEditorProps } from "./props";
import { PatchDocType } from "@/app/api/documents/[publicId]/route";
import { useDebouncedCallback } from "use-debounce";

//New
import { useCompletion } from "ai/react";
import { getPrevText } from "@/lib/editor";
//import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
/*import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion" */
import { BookOpen, FilePlus2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import toast from "react-hot-toast";
//import PhotoGenerate from "../generate/generate";
//New End

export default function Editor({
  document,
  publicId,
}: {
  document: PatchDocType;
  publicId: string;
}) {


  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [saveStatus, setSaveStatus] = useState<string>("Saved");
  const [hydrated, setHydrated] = useState<boolean>(false);
  const [content, setContent] = useState<PatchDocType["document"]>();

  async function patchRequest(publicId: string, title: string, document: any) {
    const response = await fetch(`/api/documents/${publicId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        document: document,
      }),
    });

    if (!response.ok) {
      setSaveStatus("Waiting to Save.");
      throw new Error("Failed to update document");
    }

    setSaveStatus("Saved");

    startTransition(() => {
      // Force a cache invalidation.
      router.refresh();
    });
  }

  const debouncedUpdates = useDebouncedCallback(async ({ editor }) => {
    const json = editor.getJSON();
    setContent(json);
    await patchRequest(publicId, document.title, json);
    // Simulate a delay in saving.
    setTimeout(() => {
      setSaveStatus("Saved");
    }, 500);
  }, 1000);

  /*
  const editor = useEditor({
    extensions: TipTapEditorExtensions,
    editorProps: TipTapEditorProps,
    onUpdate: (e) => {
      setSaveStatus("Saving...");
      debouncedUpdates(e);
    },
    content: content,
  });*/

  //Start NEW

  const editor = useEditor({
    extensions: TipTapEditorExtensions,
    editorProps: TipTapEditorProps,
    onUpdate: (e) => {
      setSaveStatus("Unsaved");
      const selection = e.editor.state.selection;
      const lastTwo = getPrevText(e.editor, {
        chars: 2,
      });
      if (lastTwo === "++" && !isLoading) {
        e.editor.commands.deleteRange({
          from: selection.from - 2,
          to: selection.from,
        });
        complete(
          getPrevText(e.editor, {
            chars: 5000,
          }),
        );
        // complete(e.editor.storage.markdown.getMarkdown());
        // va.track("Autocomplete Shortcut Used");
      } else {
        debouncedUpdates(e);
      }
    },
    autofocus: "end",
  });

  const { complete, completion, isLoading, stop } = useCompletion({
    id: "novel",
    api: "/api/documents/auto",
    onFinish: (_prompt, completion) => {
      editor?.commands.setTextSelection({
        from: editor.state.selection.from - completion.length,
        to: editor.state.selection.from,
      });
    },
    onError: (err) => {
      toast.error("You have reached your request limit for the day.")
      /* toast({
        title: "Something went wrong.",
        description: "You have reached your request limit for the day.",
        variant: "destructive",
      }); */
      /*if (err.message === "You have reached your request limit for the day.") {
        va.track("Rate Limit Reached");
      }*/
    },
  });

  const prev = useRef("");

  // Insert chunks of the generated text
  useEffect(() => {
    const diff = completion.slice(prev.current.length);
    prev.current = completion;
    editor?.commands.insertContent(diff);
  }, [isLoading, editor, completion]);

  //See Line 89 -> 123 of novel/ui/editor/index.tsx for cancelling a auto-completion using escape or crtl+z. It's too intense to add atm.

  //End NEW

  // Hydrate the editor with the content from the database.
  useEffect(() => {
    if (editor && document && !hydrated) {
      editor.commands.setContent(document.document);
      setHydrated(true);
    }
  }, [editor, document, hydrated]);

  //Text Box limit
  const limit = 280;

  if (!editor) {
    return null
  }

  //Change to page number in prisma
  const pageNumber = 1;

  return (
    <div>
      {/* Title */}
      <div className="pl-5">
        <div className="flex my-6 justify-start items-center">
              <h1 className="mr-10 text-4xl font-bold">{document.title}</h1>
              <div className="left-8 top-8 rounded-lg bg-gray-100 px-2 py-1 text-sm text-gray-400">
                  {saveStatus}
              </div>
        </div>
        <div className="flex flex-row p-2 font-semibold text-lg justify-between">
              <div className="flex flex-row items-center">
                <Button size="sm" variant="secondary">Prev</Button>
                <div className="px-3 text-md">Page {pageNumber}</div>
                <Button size="sm" variant="secondary">Next</Button>
              </div>
              <div>
                <Button>
                  <div className="pr-2">Print to Book</div>
                  <BookOpen/>
                </Button>
              </div>
        </div>
        <Separator/>
      </div>

      {/* Image 

      <div className="p-5">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="text-purple">
                Generate an Image
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <PhotoGenerate/>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      */}

      {/* Editor */}
      <div
        onClick={() => {
          editor?.chain().focus().run();
        }}
        className="relative flex min-h-screen w-full cursor-text flex-col items-center pl-5"
      >
        <div className=" w-full max-w-screen-lg">
          <div className="p-5 mr-4 rounded-md border-2 border-gray-600">
            <EditorContent editor={editor} />
          </div>
          <div className="character-count">
            {editor.storage.characterCount.characters()}/{limit} characters
            <br />
            {editor.storage.characterCount.words()} words
          </div>
        </div>
        <div>
          <Button variant="outline" size="lg" onClick={()=>{}}>
            <FilePlus2 />
            <div className="pl-2 text-lg">Add Page</div>
          </Button>
        </div>
      </div>
    </div>
  );
}