import { apiClient } from "./apiClient";

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

export interface SimpleUserDTO {
  firstName: string;
  lastName: string;
  username: string;
  averageRating: number;
}

export interface LocationPointDTO {
  latitude: number;
  longitude: number;
  name: string;
}

export interface RideOutputDTO {
  id: number;
  driver: SimpleUserDTO;
  fromLocation: string;
  toLocation: string;
  startTime: string;
  price: number;
  allSeats: number;
  takenSeats: number;
  pickUpPoints: LocationPointDTO[];
}

export interface RideInputDTO {
  username: string;
  fromLocation: string;
  toLocation: string;
  startTime: string;
  price: number;
  allSeats: number;
}

export interface PassengerRequestDTO {
  id: number;
  passenger: SimpleUserDTO;
  rideListingId: number;
  requestStatus: string;
}

export const registerUser = async (dto: RegisterUserDTO): Promise<void> => {
  try {
    await apiClient.post("/register", dto);
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

export const getUserByUsername = async (
  username: string
): Promise<UserGetDTO> => {
  try {
    const response = await apiClient.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user "${username}":`, error);
    throw error;
  }
};

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
  try {
    const params = { fromLocation, toLocation, startTime };
    const queryString = new URLSearchParams(params).toString();
    const fullUrl = `${apiClient.defaults.baseURL}/passengers?${queryString}`;

    console.log("Requesting URL:", fullUrl);

    const response = await apiClient.get("/passengers", { params });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching passengers:", error);
    throw error;
  }
};

export const getPassengerByUsername = async (
  username: string
): Promise<PassengerGetDTO> => {
  try {
    const response = await apiClient.get(`/passengers/${username}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching passenger for "${username}":`, error);
    throw error;
  }
};

export const createPassenger = async (
  dto: PassengerCreateDTO
): Promise<void> => {
  try {
    await apiClient.post("/passengers", dto);
  } catch (error) {
    console.error("Error creating passenger listing:", error);
    throw error;
  }
};

// Offer a ride to a passenger
// Ta username je uni ki ponudi drive
export const offerRide = async (
  username: string,
  passengerId: number
): Promise<void> => {
  try {
    await apiClient.post(`/passengers/${username}/offer/${passengerId}`);
  } catch (error) {
    console.error(`Error offering ride to ${username}:`, error);
    throw error;
  }
};

// Accept a ride offer as a passenger
export const acceptOfferedRide = async (
  username: string,
  offerId: number
): Promise<void> => {
  try {
    await apiClient.post(`/passengers/${username}/offer/${offerId}/accept`);
  } catch (error) {
    console.error(`Error accepting offer ${offerId}:`, error);
    throw error;
  }
};

// Get all accepted ride offers by a driver
// Vse acceptane od username user
export const getAcceptedOffersByDriver = async (
  username: string
): Promise<RideOfferDTO[]> => {
  try {
    const response = await apiClient.get(
      `/passengers/offers/${username}/accepted`
    );
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching accepted offers for driver ${username}:`,
      error
    );
    throw error;
  }
};

// get all available rides
// filters: fromLocation, toLocation, startTime
export const getAllRides = async (
  fromLocation = "",
  toLocation = "",
  startTime: string
): Promise<RideOutputDTO[]> => {
  try {
    const params = { fromLocation, toLocation, startTime };
    const queryString = new URLSearchParams(params).toString();
    const fullUrl = `${apiClient.defaults.baseURL}/rides?${queryString}`;

    console.log("Requesting URL:", fullUrl);

    const response = await apiClient.get("/rides", {
      params,
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching rides:", error);
    throw error;
  }
};

// get one ride by id
export const getRideById = async (rideId: number): Promise<RideOutputDTO> => {
  try {
    const response = await apiClient.get(`/rides/${rideId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ride with ID ${rideId}:`, error);
    throw error;
  }
}

// create a new ride
export const createRide = async (dto: RideInputDTO): Promise<RideOutputDTO> => {
  try {
    const response = await apiClient.post("/rides", dto);
    return response.data;
  } catch (error) {
    console.error("Error creating ride:", error);
    throw error;
  }
};

// user requests to be passenger in a ride
export const requestRide = async (
  username: string,
  rideId: number
): Promise<PassengerRequestDTO> => {
  try {
    const response = await apiClient.post(
      `/rides/${username}/request/${rideId}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error requesting ride with ID ${rideId}:`, error);
    throw error;
  }
}

// get all requests for a ride
export const getRideRequests = async (
  rideId: number
): Promise<PassengerRequestDTO[]> => {
  try {
    const response = await apiClient.get(`/rides/${rideId}/requests`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ride requests for ID ${rideId}:`, error);
    throw error;
  }
}

// accept a ride request from a passenger
export const acceptRideRequest = async (
  requestId: number
): Promise<PassengerRequestDTO> => {
  try {
    const response = await apiClient.put(
      `/rides/accept/${requestId}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error accepting ride request with ID ${requestId}:`, error);
    throw error;
  }
}

// get all accepted passengers
export const getPassengers = async (
  rideId: number
): Promise<SimpleUserDTO[]> => {
  try {
    const response = await apiClient.get(`/rides/${rideId}/passengers`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching passengers for ride ID ${rideId}:`, error);
    throw error;
  }
}

// add a pickup point to a ride
export const addPickUpPoint = async (
  rideId: number,
  dto: LocationPointDTO
): Promise<RideOutputDTO> => {
  try {
    const response = await apiClient.put(
      `/rides/${rideId}/pickUpPoint`,
      dto
    );
    return response.data;
  } catch (error) {
    console.error(`Error adding pickup point for ride ID ${rideId}:`, error);
    throw error;
  }
}