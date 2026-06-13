export const Select = ({ value, onChange, options = [], className = '' }) => {
    return (
        <select
            value={value}
            onChange={onChange}
            className={`select select-bordered rounded-xl ${className}`}
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    )
}