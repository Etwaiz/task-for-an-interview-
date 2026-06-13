import { useState } from 'react'
import { useRequestStore } from '@/store/useRequestStore'
import { RequestForm } from '@/features/requests/RequestForm'
import { RequestList } from '@/features/requests/RequestList'
import { Button } from '@/ui/Button'

export const UserView = () => {
    const requests = useRequestStore((s) => s.requests)
    const deleteRequest = useRequestStore((s) => s.deleteRequest)

    const [editingRequest, setEditingRequest] = useState(null)

    return (
        <div className="flex flex-col gap-6">
            <RequestForm
                key={editingRequest?.id ?? 'new'}
                editingRequest={editingRequest}
                onDone={() => setEditingRequest(null)}
            />

            <div className="flex flex-col gap-3">
                <h2 className="text-xl font-semibold">Мої заявки</h2>

                <RequestList
                    requests={requests}
                    renderActions={(req) => (
                        <>
                            {req.status === 'new' && (
                                <Button
                                    variant="neutral"
                                    onClick={() => setEditingRequest(req)}
                                >
                                    Редагувати
                                </Button>
                            )}
                            <Button
                                variant="error"
                                onClick={() => deleteRequest(req.id)}
                            >
                                Видалити
                            </Button>
                        </>
                    )}
                />
            </div>
        </div>
    )
}
