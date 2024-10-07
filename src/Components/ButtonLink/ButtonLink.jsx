import Button from '../Button/Button'

const ButtonLink = ( {content, type, link, target, onClick, classname} ) => {
    return (
        <>
            <a href={link} target={target} onClick={onClick}>
                <Button type={type} content={content} classname={classname}/>
            </a>
        </>
    )
}

export default ButtonLink