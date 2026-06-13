import { useRequests } from "./context/RequestContext"
import RoleSwitcher from "./components/RoleSwitcher"
import UserView from "./components/UserView"
import ManagerView from "./components/ManagerView"

function App() {
    const { role } = useRequests();

    return (
        <div className="app">
            <header className="app-header">
                <h1>Mini Request System</h1>
                <RoleSwitcher />
            </header>

            <main className="app-main">
                {role === "user" ? <UserView /> : <ManagerView />}
            </main>
        </div>
    )
}

export default App