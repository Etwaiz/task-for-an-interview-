import { RequestCard } from '@/features/requests/RequestCard'

export const RequestList = ({ requests, showId, renderActions }) => {
    if (requests.length === 0) {
        return <p className="text-neutral text-center py-8">Заявок поки немає</p>
    }

    return (
        <div className="grid gap-3 sm:grid-cols-2">
            {requests.map((req) => (
                <RequestCard key={req.id} request={req} showId={showId}>
                    {renderActions?.(req)}
                </RequestCard>
            ))}
        </div>
    )
}
