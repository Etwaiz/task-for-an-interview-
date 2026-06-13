import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useRequestStore = create(
    persist(
        (set) => ({
            role: 'user',
            requests: [],

            setRole: (role) => set({ role }),

            addRequest: (title, description) =>
                set((state) => ({
                    requests: [
                        ...state.requests,
                        {
                            id: crypto.randomUUID(),
                            title,
                            description,
                            status: 'new',
                            createdAt: Date.now(),
                        },
                    ],
                })),

            updateRequest: (id, data) =>
                set((state) => ({
                    requests: state.requests.map((req) =>
                        req.id === id ? { ...req, ...data } : req
                    ),
                })),

            deleteRequest: (id) =>
                set((state) => ({
                    requests: state.requests.filter((req) => req.id !== id),
                })),

            changeStatus: (id, status) =>
                set((state) => ({
                    requests: state.requests.map((req) =>
                        req.id === id ? { ...req, status } : req
                    ),
                })),
        }),
        {
            name: 'request-store',
        }
    )
)
