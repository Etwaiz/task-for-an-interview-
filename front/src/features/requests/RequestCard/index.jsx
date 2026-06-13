import { Badge } from '@/ui/Badge'

export const RequestCard = ({ request, showId, children }) => {
    const date = new Date(request.createdAt).toLocaleString()

    return (
        <div className="bg-base-100 p-4 rounded-2xl shadow-sm flex flex-col gap-2">
            <div className="flex items-start justify-between gap-2">
                <h4 className="font-semibold">{request.title}</h4>
                <Badge status={request.status} />
            </div>

            <p className="text-sm text-neutral">{request.description}</p>

            <div className="flex items-center justify-between text-xs text-neutral">
                <span>{date}</span>
                {showId && <span>ID: {request.id.slice(0, 8)}</span>}
            </div>

            {children && <div className="flex gap-2 mt-1">{children}</div>}
        </div>
    )
}
