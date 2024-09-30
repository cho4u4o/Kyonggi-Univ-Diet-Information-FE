import create from 'zustand'

interface ExpandedCardStore {
  expandedCard: string | null
  setExpandedCard: (title: string | null) => void
  closeExpandedCard: () => void
}

export const useExpandedCardStore = create<ExpandedCardStore>((set) => ({
  expandedCard: null,
  setExpandedCard: (title) => set(() => ({ expandedCard: title })),
  closeExpandedCard: () => set(() => ({ expandedCard: null })),
}))
