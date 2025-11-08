import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Volume2, Copy, Heart, Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Phrase {
  id: string;
  english: string;
  japanese: string;
  romaji: string;
  category: string;
}

const Phrases = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [activeCategory, setActiveCategory] = useState<string>("essential");

  const phrases: Phrase[] = [
    {
      id: "1",
      english: "Hello",
      japanese: "こんにちは",
      romaji: "Konnichiwa",
      category: "essential"
    },
    {
      id: "2",
      english: "Thank you",
      japanese: "ありがとうございます",
      romaji: "Arigatou gozaimasu",
      category: "essential"
    },
    {
      id: "3",
      english: "Excuse me",
      japanese: "すみません",
      romaji: "Sumimasen",
      category: "essential"
    },
    {
      id: "4",
      english: "How much is this?",
      japanese: "これはいくらですか？",
      romaji: "Kore wa ikura desu ka?",
      category: "shopping"
    },
    {
      id: "5",
      english: "Where is the bathroom?",
      japanese: "トイレはどこですか？",
      romaji: "Toire wa doko desu ka?",
      category: "essential"
    },
    {
      id: "6",
      english: "I'd like to order this",
      japanese: "これをお願いします",
      romaji: "Kore wo onegaishimasu",
      category: "dining"
    },
    {
      id: "7",
      english: "Delicious!",
      japanese: "おいしい！",
      romaji: "Oishii!",
      category: "dining"
    },
    {
      id: "8",
      english: "Do you speak English?",
      japanese: "英語を話せますか？",
      romaji: "Eigo wo hanasemasu ka?",
      category: "essential"
    }
  ];

  const categories = [
    { id: "essential", label: "Essential" },
    { id: "dining", label: "Dining" },
    { id: "shopping", label: "Shopping" },
    { id: "transport", label: "Transport" }
  ];

  const filteredPhrases = phrases.filter(phrase => phrase.category === activeCategory);

  const toggleFavorite = (id: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Phrase copied to clipboard",
    });
  };

  const playAudio = (phrase: string) => {
    toast({
      title: "Audio playback",
      description: "Playing pronunciation...",
    });
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-card border-b border-border">
        <div className="flex h-14 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-base font-semibold">Essential Phrases</h1>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Category Filters */}
      <section className="p-4">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category.id)}
              className="flex-shrink-0"
            >
              {category.label}
            </Button>
          ))}
        </div>
      </section>

      {/* Phrases List */}
      <section className="px-4 space-y-3">
        {filteredPhrases.map((phrase) => (
          <Card key={phrase.id} className="p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <p className="text-sm font-medium mb-1">{phrase.english}</p>
                <p className="text-lg font-semibold mb-1">{phrase.japanese}</p>
                <p className="text-sm text-muted-foreground">{phrase.romaji}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => toggleFavorite(phrase.id)}
              >
                <Heart
                  className={`h-4 w-4 ${
                    favorites.has(phrase.id)
                      ? "fill-destructive text-destructive"
                      : "text-muted-foreground"
                  }`}
                />
              </Button>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={() => playAudio(phrase.japanese)}
              >
                <Volume2 className="h-3.5 w-3.5 mr-2" />
                Listen
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={() => copyToClipboard(phrase.japanese)}
              >
                <Copy className="h-3.5 w-3.5 mr-2" />
                Copy
              </Button>
            </div>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default Phrases;
