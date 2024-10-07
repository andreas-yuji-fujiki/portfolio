import './Paragraph.css'

const avaibleParagraphTypes = ['highlited', 'lowOpacity']
const Paragraph = ( {content, type} ) => {

    if(!avaibleParagraphTypes.includes(type)){
        throw new Error('Error: Invalid paragraph type!')
    }

    return (
        <p className={type}>
            {content}
        </p>
    )
}
export default Paragraph