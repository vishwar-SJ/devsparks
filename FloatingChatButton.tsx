import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function FloatingChatButton() {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate("/chat")}
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 p-0 bg-primary"
      size="icon"
      aria-label="Open Chat"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
}