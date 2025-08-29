import './button.style.scss'

const buttonTypeClasses = {
    'base': 'btn--base',
    'google': 'btn--google',
    'inverted': 'btn--inverted',
}

const Button =  ({change, buttonType, ...otherTypes}) => {
    return <button className={`button-container ${buttonTypeClasses[buttonType]}`} {...otherTypes}>{change}</button>;
}

export default Button;