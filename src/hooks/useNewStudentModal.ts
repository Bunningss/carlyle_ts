import { create } from "zustand";

interface NewStudentModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useNewStudentModal = create<NewStudentModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useNewStudentModal;
