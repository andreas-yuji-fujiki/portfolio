import './Button.css'

const buttonTypes = ['primary', 'secondary', 'iconPrimary', 'iconSecondary', 'projectCardUsedLanguage', 'contactButton']
const Button = ( { content, type, onClick, classname } ) => {
    if( !buttonTypes.includes(type) ) {
        throw new Error('Error: Invalid button type!')
    }
    
    return (
        <button className={`${type} ${classname}`} onClick={onClick}>
            { content }
        </button>
    )
}

export default Button
