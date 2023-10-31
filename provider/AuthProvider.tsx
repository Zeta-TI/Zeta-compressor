"use client"

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import React from "react";

interface ProviderProps {
  children: ReactNode;
  session: any;
}
export const AuthProvider = ({ children }: ProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};