import { useRequestStore } from '@/store/useRequestStore'

const roles = [
    { value: 'user', label: 'User' },
    { value: 'manager', label: 'Manager' },
]

export const RoleSwitcher = () => {
    const role = useRequestStore((s) => s.role)
    const setRole = useRequestStore((s) => s.setRole)

    return (
        <div className="join">
            {roles.map((r) => (
                <button
                    key={r.value}
                    onClick={() => setRole(r.value)}
                    className={`join-item btn ${
                        role === r.value ? 'btn-primary text-primary-content' : 'btn-ghost'
                    }`}
                >
                    {r.label}
                </button>
            ))}
        </div>
    )
}
