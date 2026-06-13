/**
 * @typedef {'primary' | 'neutral' | 'error' | 'ghost'} ButtonVariant
 */

const styles = {
    primary: 'btn-primary text-primary-content',
    neutral: 'btn-neutral',
    error: 'btn-error text-error-content',
    ghost: 'btn-ghost',
}

/**
 * @param {{
 *   children: import('react').ReactNode
 *   variant?: ButtonVariant
 *   type?: 'button' | 'submit'
 *   onClick?: () => void
 *   disabled?: boolean
 *   className?: string
 * }} props
 */
export const Button = ({
    children,
    variant = 'primary',
    type = 'button',
    onClick,
    disabled,
    className = '',
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`btn rounded-xl ${styles[variant]} ${className}`}
        >
            {children}
        </button>
    )
}
