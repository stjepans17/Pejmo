import { apiClient } from "./apiClient";

// ===== USER =====
export interface RegisterUserDTO {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface ReviewGetDTO {
  fromFirstName: string;
  fromLastName: string;
  rating: number;
  content: string;
}

export interface UserGetDTO {
  firstName: string;
  lastName: string;
  username: string;
  averageRating: number;
  reviews: ReviewGetDTO[];
  kycStatus: string;
}

export const registerUser = async (dto: RegisterUserDTO): Promise<void> => {
  try {
    await apiClient.post("/register", dto);
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

export const getUserByUsername = async (username: string): Promise<UserGetDTO> => {
  try {
    const response = await apiClient.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user "${username}":`, error);
    throw error;
  }
};

// ===== PASSENGERS =====
export interface RideOfferDTO {
  id: number;
  firstName: string;
  secondName: string;
  username: string;
  offerStatus: "PENDING" | "ACCEPTED" | "REJECTED";
}

export interface PassengerGetDTO {
  id: number;
  from: string;
  to: string;
  firstName: string;
  lastName: string;
  username: string;
  averageRating: number;
  price: number;
  startTime: string;
  driverOffers: RideOfferDTO[] | null;
}

export interface PassengerCreateDTO {
  username: string;
  fromLocation: string;
  toLocation: string;
  startTime: string;
  price: number;
  seatsNeeded: number;
}

export const getAllPassengers = async (
  fromLocation = "",
  toLocation = "",
  startTime: string
): Promise<PassengerGetDTO[]> => {
  console.log(`data: ${fromLocation} | ${toLocation} | ${startTime}`);
  try {
    const response = await apiClient.get("/passengers", {
      params: { fromLocation, toLocation, startTime },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching passengers:", error);
    throw error;
  }
};

export const getPassengerByUsername = async (username: string): Promise<PassengerGetDTO> => {
  try {
    const response = await apiClient.get(`/passengers/${username}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching passenger for "${username}":`, error);
    throw error;
  }
};

export const createPassenger = async (dto: PassengerCreateDTO): Promise<void> => {
  try {
    await apiClient.post("/passengers", dto);
  } catch (error) {
    console.error("Error creating passenger listing:", error);
    throw error;
  }
};

export const offerRide = async (username: string, passengerId: number): Promise<void> => {
  try {
    await apiClient.post(`/passengers/${username}/offer/${passengerId}`);
  } catch (error) {
    console.error(`Error offering ride to ${username}:`, error);
    throw error;
  }
};

export const acceptOfferedRide = async (username: string, offerId: number): Promise<void> => {
  try {
    await apiClient.post(`/passengers/${username}/offer/${offerId}/accept`);
  } catch (error) {
    console.error(`Error accepting offer ${offerId}:`, error);
    throw error;
  }
};

export const getAcceptedOffersByDriver = async (username: string): Promise<RideOfferDTO[]> => {
  try {
    const response = await apiClient.get(`/passengers/offers/${username}/accepted`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching accepted offers for driver ${username}:`, error);
    throw error;
  }
};

// ===== RIDES =====
export interface RideGetDTO {
    id: number;
    startTime: string; 
    fromLocation: string;
    toLocation: string;
    price: number;
    allSeats: number;
    takenSeats: number;
    pickUpPoints: any[];
    driver: {
      username: string;
      firstName: string;
      lastName: string;
      averageRating: number;
    };
  }
  

export const getAllRides = async (
  fromLocation = "",
  toLocation = "",
  startTime: string
): Promise<RideGetDTO[]> => {
  try {
    console.log(`${fromLocation} ${toLocation} ${startTime}`)
    const response = await apiClient.get("/rides", {
      params: { fromLocation, toLocation, startTime },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching rides:", error);
    throw error;
  }
};
