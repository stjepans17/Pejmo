export interface RideItem {
    id: string;
    user: string;
    rating: number;
    from: string;
    to: string;
    dateTime: string;
    seats: number;
    price: number;
    status: "pending" | "accepted";
  }