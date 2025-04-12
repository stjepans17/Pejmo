// import React, { createContext, useState, useContext, ReactNode } from "react";

// // Define the shape of the context data
// interface SignupData {
//   email: string;
//   password: string;
//   name?: string;
//   height?: number;
//   weight?: number;
//   gender?: string;
// }

// interface SignupContextType {
//   signupData: SignupData;
//   setSignupData: (data: Partial<SignupData>) => void;
// }

// // Create context
// const SignupContext = createContext<SignupContextType | undefined>(undefined);

// // Provider component
// export const SignupProvider = ({ children }: { children: ReactNode }) => {
//   const [signupData, setSignupDataState] = useState<SignupData>({
//     email: "",
//     password: "",
//   });

//   // Function to update signup data
//   const setSignupData = (data: Partial<SignupData>) => {
//     setSignupDataState((prevData) => ({ ...prevData, ...data }));
//   };

//   return (
//     <SignupContext.Provider value={{ signupData, setSignupData }}>
//       {children}
//     </SignupContext.Provider>
//   );
// };

// // Hook to use context
// export const useSignup = () => {
//   const context = useContext(SignupContext);
//   if (!context) {
//     throw new Error("useSignup must be used within a SignupProvider");
//   }
//   return context;
// };

// // import React, { createContext, useState, useContext, ReactNode } from "react";

// // // Define the shape of the signup data
// // interface SignupData {
// //   email: string;
// //   password: string;
// //   name?: string;
// //   height?: number;
// //   weight?: number;
// //   gender?: string;
// // }

// // // Define the shape of the context
// // interface SignupContextType {
// //   signupData: SignupData;
// //   setSignupData: (data: Partial<SignupData>) => void;
// //   isLoggedIn: boolean;
// //   login: () => void;
// //   logout: () => void;
// // }

// // // Create context
// // const SignupContext = createContext<SignupContextType | undefined>(undefined);

// // // Provider component
// // export const SignupProvider = ({ children }: { children: ReactNode }) => {
// //   const [signupData, setSignupDataState] = useState<SignupData>({
// //     email: "",
// //     password: "",
// //   });

// //   const [isLoggedIn, setIsLoggedIn] = useState(false); // Track authentication state

// //   // Function to update signup data
// //   const setSignupData = (data: Partial<SignupData>) => {
// //     setSignupDataState((prevData) => ({ ...prevData, ...data }));
// //   };

// //   // Function to log in
// //   const login = () => {
// //     setIsLoggedIn(true);
// //   };

// //   // Function to log out
// //   const logout = () => {
// //     setIsLoggedIn(false);
// //     setSignupDataState({ email: "", password: "" }); // Optionally reset signup data
// //   };

// //   return (
// //     <SignupContext.Provider value={{ signupData, setSignupData, isLoggedIn, login, logout }}>
// //       {children}
// //     </SignupContext.Provider>
// //   );
// // };

// // // Hook to use context
// // export const useSignup = () => {
// //   const context = useContext(SignupContext);
// //   if (!context) {
// //     throw new Error("useSignup must be used within a SignupProvider");
// //   }
// //   return context;
// // };

import React, { createContext, useState, useContext, ReactNode } from "react";

// Define the shape of the signup data
interface SignupData {
  email: string;
  password: string;
}

// Define the shape of the context
interface SignupContextType {
  signupData: SignupData;
  setSignupData: (data: Partial<SignupData>) => void;
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

// Create context
const SignupContext = createContext<SignupContextType | undefined>(undefined);

// Provider component
export const SignupProvider = ({ children }: { children: ReactNode }) => {
  const [signupData, setSignupDataState] = useState<SignupData>({
    email: "",
    password: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const setSignupData = (data: Partial<SignupData>) => {
    setSignupDataState((prevData) => ({ ...prevData, ...data }));
  };

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setSignupDataState({ email: "", password: "" });
  };

  return (
    <SignupContext.Provider value={{ signupData, setSignupData, isLoggedIn, login, logout }}>
      {children}
    </SignupContext.Provider>
  );
};

// Hook to use context
export const useSignup = () => {
  const context = useContext(SignupContext);
  if (!context) {
    throw new Error("useSignup must be used within a SignupProvider");
  }
  return context;
};

