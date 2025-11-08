import { ChatBot } from "@/components/ChatBot";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MessageSquareText } from "lucide-react";

const Chat = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <div className="flex items-center justify-center gap-2 mb-8">
          <MessageSquareText className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold text-center">AI Assistant</h1>
        </div>
        <ChatBot />
      </main>
      <Footer />
    </div>
  );
};

export default Chat;