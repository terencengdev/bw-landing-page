"use client";
import { useState, useEffect } from "react";

interface User {
  firstName: string;
  email: string;
  password:string;
}

export function useUser() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const updateUser = (newUser: User) => {
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser)); 
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); 
  };

  return { user, updateUser, logout };
}

