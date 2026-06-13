/**
 * @typedef {'new' | 'in progress' | 'done'} RequestStatus
 */

// Колір бейджа залежить від статусу заявки.
const styles = {
    new: 'badge-neutral',
    'in progress': 'badge-warning',
    done: 'badge-success',
}

/**
 * @param {{ status: RequestStatus }} props
 */
export const Badge = ({ status }) => {
    return (
        <span className={`badge ${styles[status]} rounded-lg`}>{status}</span>
    )
}
