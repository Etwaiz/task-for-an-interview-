import { useEffect } from 'react'
import { useRequestStore } from '@/store/useRequestStore'
import { RoleSwitcher } from '@/components/RoleSwitcher'
import { ThemeToggle } from '@/ui/ThemeToggle/index.jsx'
import { useThemeStore } from '@/store/useThemeStore'
import { UserView } from '@/pages/UserView'
import { ManagerView } from '@/pages/ManagerView'

function App() {
    const role = useRequestStore((s) => s.role)
    const theme = useThemeStore((s) => s.theme)

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    return (
        <div className="min-h-screen">
            <header className="bg-base-100 border-b border-base-300">
                <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img
                            src="/favicon.svg"
                            alt="Логотип"
                            className="w-8 h-8"
                        />
                        <h1 className="text-xl font-bold">Mini Request System</h1>
                    </div>

                    <div className="flex items-center gap-4">
                        <RoleSwitcher />
                        <ThemeToggle />
                    </div>
                </div>
            </header>

            <main className="max-w-3xl mx-auto px-4 py-6">
                {role === 'user' ? <UserView /> : <ManagerView />}
            </main>
        </div>
    )
}

export default App