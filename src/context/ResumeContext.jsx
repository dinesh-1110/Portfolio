import React, { createContext, useContext, useState, useCallback } from "react";

const ResumeContext = createContext({
  isResumeOpen: false,
  openResumeModal: () => {},
  closeResumeModal: () => {},
});

export function ResumeProvider({ children }) {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const openResumeModal = useCallback(() => {
    setIsResumeOpen(true);
  }, []);

  const closeResumeModal = useCallback(() => {
    setIsResumeOpen(false);
  }, []);

  return (
    <ResumeContext.Provider
      value={{
        isResumeOpen,
        openResumeModal,
        closeResumeModal,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
}

export function useResumeModal() {
  return useContext(ResumeContext);
}
