import { useRequests } from "../context/RequestContext"

function RoleSwitcher() {
    const { role, setRole } = useRequests()

    return (
        <div className="role-switcher">
            <span>Роль:</span>
            <button
                className={role === "user" ? "active" : ""}
                onClick={() => setRole("user")}
            >
                User
            </button>
            <button
                className={role === "manager" ? "active" : ""}
                onClick={() => setRole("manager")}
            >
                Manager
            </button>
        </div>
    )
}

export default RoleSwitcher