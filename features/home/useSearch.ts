// features/home/useSearch.ts
import { useState } from "react";

interface RideInfo {
  id: string;
  time: string;
  driver: string;
  rating: number;
  price: number;
}

export function useSearch() {
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<RideInfo[]>([]);

  const performSearch = async (
    searchType: "ride" | "passenger",
    fromCity: string,
    toCity: string,
    date: Date
  ) => {
    setIsSearching(true);

    // Simulate delay and dummy data
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const fakeResults: RideInfo[] = [
      {
        id: "1",
        time: "10:00",
        driver: "Veno",
        rating: 5,
        price: 5,
      },
      {
        id: "2",
        time: "12:30",
        driver: "Tomaž",
        rating: 4,
        price: 6,
      },
    ];

    setResults(fakeResults);
    setIsSearching(false);
  };

  return { isSearching, results, performSearch };
}