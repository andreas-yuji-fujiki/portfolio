const ListItem = ( {content, type} ) => {
    return (
        <li className={type}>
            {content}
        </li>
    )
}

export default ListItem