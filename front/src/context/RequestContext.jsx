import { createContext, useContext, useState, useEffect } from 'react'

const RequestContext = createContext(null)

export function RequestProvider({ children }) {

    const [role, setRole] = useState("user")

    const [requests, setRequests] = useState(() => {
        const saved = localStorage.getItem("requests")
        return saved ? JSON.parse(saved) : []
    })

    useEffect(() => {
        localStorage.setItem("requests", JSON.stringify(requests))
    }, [requests])

    const addRequest = (title, description) => {
        const newRequest = {
            id: crypto.randomUUID(),
            title,
            description,
            status: "new",
            createdAt: Date.now(),
        }

        setRequests((prev) => [...prev, newRequest])
    }

    const updateRequest = (id, data) => {
        setRequests((prev) =>
        prev.map((req) => (req.id === id ? { ...req, ...data } : req))
        )
    }

    const deleteRequest = (id) => {
        setRequests((prev) => prev.filter((req) => req.id !== id))
    }

    const changeStatus = (id, status) => {
        setRequests((prev) =>
            prev.map((req) => (req.id === id ? { ...req, status } : req))
        )
    }

    const value = {
        role,
        setRole,
        requests,
        addRequest,
        updateRequest,
        deleteRequest,
        changeStatus
    }

    return (
        <RequestContext.Provider value={value}>
            {children}
        </RequestContext.Provider>
    )
}

export function useRequests() {
    const context = useContext(RequestContext);
    if (context === null) {
        throw new Error("useRequests must be used within RequestProvider")
    }
    return context
}