import './Section.css'
import Title from '../Title/Title'
import Paragraph from '../Paragraph/Paragraph'

const imageDisplays = ['imageFirst', 'imageAfter']

const Section = ( {
            id, content, 
            imagePath, imageOrder, imageType, imageDescription, 
            titleType, titleContent, titleId,
            secondTitleContent, secondTitleType
        } ) => {

    if(!imageDisplays.includes(imageOrder)){
        throw new Error('Error: Invalid image order!')
    }

    return (
        <section className={imageOrder} id={id}>
            <div className="container">
            <aside>
                <img 
                    src={imagePath} 
                    alt={imageDescription} 
                    className={imageType}
                />
            </aside>

            <article>
                <Title 
                type={titleType}
                content={titleContent}
                id={titleId}/>

                <Title 
                    content={secondTitleContent}
                    type={secondTitleType}
                />
                {content}
            </article>
            </div>
        </section>
    )
}
export default Section