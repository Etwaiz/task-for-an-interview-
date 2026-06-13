export const Input = ({ value, onChange, placeholder, className = '' }) => {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`input input-bordered w-full rounded-xl ${className}`}
        />
    )
}
