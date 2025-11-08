import { useQuery } from "@tanstack/react-query";
import { RecommendationCard } from "./RecommendationCard";
import { Loader2, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface Recommendation {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  location?: string;
}

interface RecommendationsResponse {
  greeting: string;
  recommendations: Recommendation[];
}

async function fetchRecommendations(): Promise<RecommendationsResponse> {
  const response = await fetch("http://localhost:3000/recommendations");
  if (!response.ok) {
    throw new Error("Failed to fetch recommendations");
  }
  return response.json();
}

export function RecommendationsSection() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["recommendations"],
    queryFn: fetchRecommendations,
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return (
      <section className="mb-8">
        <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100 mb-4">
          Loading recommendations...
        </h2>
        <div className="flex items-center justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="mb-8">
        <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100 mb-4">
          Recommendations
        </h2>
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Unable to load recommendations. Please try again later.
          </AlertDescription>
        </Alert>
      </section>
    );
  }

  if (!data || !data.recommendations || data.recommendations.length === 0) {
    return null;
  }

  return (
    <section className="mb-8">
      <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100 my-4">
        {data.greeting}
      </h2>

      <div className="relative">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 snap-x snap-mandatory">
          {data.recommendations.map((rec) => (
            <div
              key={rec.id}
              className="flex-shrink-0 w-[280px] sm:w-[320px] snap-start"
            >
              <RecommendationCard
                title={rec.title}
                description={rec.description}
                category={rec.category}
                imageUrl={rec.imageUrl}
                location={rec.location}
              />
            </div>
          ))}
        </div>

        {/* Fade effect on right edge for scroll indication */}
        <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-white dark:from-gray-950 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
