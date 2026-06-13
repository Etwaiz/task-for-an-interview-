export const sortRequests = (requests, order = 'newest') => {
    return [...requests].sort((a, b) =>
        order === 'newest'
            ? b.createdAt - a.createdAt
            : a.createdAt - b.createdAt
    )
}