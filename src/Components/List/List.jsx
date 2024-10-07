/* eslint-disable react/prop-types */
import './List.css'
const listTypes = ['unordened', 'ordened']
const directionTypes = ['vertical', 'horizontal']

const List = ({type, direction, children, id}) => {
    if(!listTypes.includes(type)){
        throw new Error(`Error: Invalid list type!`)
    }
    if(!directionTypes.includes(direction)){
        throw new Error(`Error: Invalid list direction!`)
    }
    
    return (
        <>
            {type === 'unordened' ? (
                <ul className={`${direction} ${type}`} id={id}>
                    {children}
                </ul>
            ) : (
                <ol className={`${direction} ${type}`} id={id}>
                    {children}
                </ol>
            )}
        </>
    );
}
export default List