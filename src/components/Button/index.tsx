import './styles.scss'

interface ButtonProps extends React.ComponentProps<'button'> {
    variant?: 'default' | 'outline'
}

export function Button({ className, variant = 'default', ...props}: ButtonProps) {
    return <button className={variant === 'outline' ? 'button--outline' : 'button'} {...props} />
}