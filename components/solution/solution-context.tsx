"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

interface SolutionContextType {
  isModalOpen: boolean;
  modalSource: string;
  openEnquiryModal: (sourceTitle: string) => void;
  closeEnquiryModal: () => void;
}

const SolutionContext = createContext<SolutionContextType | null>(null);

export function SolutionProvider({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState("");

  const openEnquiryModal = useCallback((sourceTitle: string) => {
    setModalSource(sourceTitle);
    setIsModalOpen(true);
  }, []);

  const closeEnquiryModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <SolutionContext.Provider
      value={{
        isModalOpen,
        modalSource,
        openEnquiryModal,
        closeEnquiryModal,
      }}
    >
      {children}
    </SolutionContext.Provider>
  );
}

export function useSolutionEnquiry() {
  const context = useContext(SolutionContext);
  if (!context) {
    throw new Error("useSolutionEnquiry must be used within a SolutionProvider");
  }
  return context;
}
