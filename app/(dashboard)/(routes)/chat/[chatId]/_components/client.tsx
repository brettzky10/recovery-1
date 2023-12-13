"use client";

import { useCompletion } from "ai/react";
import { FormEvent, useState } from "react";
import { Companion, CompanionMessage } from "@prisma/client";
import { useRouter } from "next/navigation";

import { ChatForm } from "@/components/pdf/chat-form";
import { ChatHeader } from "@/components/pdf/chat-header";
import { ChatMessages } from "@/components/pdf/chat-messages";
import { ChatMessageProps } from "@/components/pdf/chat-message";

interface ChatClientProps {
  companion: Companion & {
    companionMessages: CompanionMessage[];
    _count: {
      companionMessages: number;
    }
  };
};

export const ChatClient = ({
  companion,
}: ChatClientProps) => {
  const router = useRouter();
  const [companionMessages, setMessages] = useState<ChatMessageProps[]>(companion.companionMessages);
  
  const {
    input,
    isLoading,
    handleInputChange,
    handleSubmit,
    setInput,
  } = useCompletion({
    api: `/api/chat/${companion.id}`,
    onFinish(_prompt, completion) {
      const systemMessage: ChatMessageProps = {
        role: "system",
        content: completion
      };

      setMessages((current) => [...current, systemMessage]);
      setInput("");

      router.refresh();
    },
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    const userMessage: ChatMessageProps = {
      role: "user",
      content: input
    };

    setMessages((current) => [...current, userMessage]);

    handleSubmit(e);
  }

  return (
    <div className="flex flex-col h-full p-4 space-y-2">
      <ChatHeader companion={companion} />
      <ChatMessages 
        companion={companion}
        isLoading={isLoading}
        companionMessages={companionMessages}
      />
      <ChatForm 
        isLoading={isLoading} 
        input={input} 
        handleInputChange={handleInputChange} 
        onSubmit={onSubmit} 
      />
    </div>
   );
}
