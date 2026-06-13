const styles = {
    new: 'badge-neutral',
    'in progress': 'badge-warning',
    done: 'badge-success',
}

export const Badge = ({ status }) => {
    return (
        <span className={`badge ${styles[status]} rounded-lg`}>{status}</span>
    )
}
