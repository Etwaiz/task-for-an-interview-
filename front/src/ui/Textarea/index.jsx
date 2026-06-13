/**
 * @param {{
 *   value: string
 *   onChange: (e: import('react').ChangeEvent<HTMLTextAreaElement>) => void
 *   placeholder?: string
 *   className?: string
 * }} props
 */
export const Textarea = ({ value, onChange, placeholder, className = '' }) => {
    return (
        <textarea
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`textarea textarea-bordered w-full rounded-xl ${className}`}
        />
    )
}
