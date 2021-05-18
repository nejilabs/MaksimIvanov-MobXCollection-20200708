import React from "react";
import { NotesStore } from "./NotesStore";

type RootStateContextValue = {
  notesStore: NotesStore;
};

const RootStateContext = React.createContext<RootStateContextValue>(
  {} as RootStateContextValue
);

// Initialise Store
const notesStore = new NotesStore();

// Export Provider
export const RootStateProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <RootStateContext.Provider value={{ notesStore }}>
      {children}
    </RootStateContext.Provider>
  );
};

export const useRootStore = () => React.useContext(RootStateContext);
