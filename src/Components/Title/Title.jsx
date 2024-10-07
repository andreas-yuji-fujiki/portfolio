import './Title.css';

const titlesList = [
        'HeaderTitle', 
        'MainTitle', 
        'SkillsCardTitle',
        'SectionTitle', 
        'typeWriter', 
        'ProjectTitle', 
        'SecondaryTitle',
        'highlited'
    ]

const MainTitle = ( { content, type, id } ) => {
    if(!titlesList.includes(type)){
        throw new Error(`Error: invalid title type!
`)
    }
    return (
        <h3 className={type} id={id}>
            {content} <span className='title-decoration-span'></span>
        </h3>
    );
}
export default MainTitle;
