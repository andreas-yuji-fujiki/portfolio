import './AboutCard.css'

const avaibleTypesOfCards = ['primaryCard', 'secondaryCard']
const AboutCard = ( { type, children } ) => {
    
    if(!avaibleTypesOfCards.includes(type)){
        throw new Error('Error: Invalid card type!')
    }

    return (
        <div className={`aboutCard ${type}`}>
            <div className="aboutCard-traffic-light">
                <div className="aboutCard-traffic-light-circle one"></div>
                <div className="aboutCard-traffic-light-circle two"></div>
                <div className="aboutCard-traffic-light-circle three"></div>
            </div>
            { children }
        </div>
    )
}
export default AboutCard