"use client";
import React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type queryProps = {
  children: React.ReactNode;
};

const QueryProvider = ({ children }: queryProps) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
