import './AboutSection.css'

// components
import Title from '../Title/Title'
import Span from '../Span/Span'
import AboutCard from './AboutCard/AboutCard'
import List from '../List/List'

const AboutSection = () => {
    return (
        <div className='AboutSectionContainer'>
            <Title type='SectionTitle' id="about" content={
                <>
                    <Span content='#'/> About
                </>
            }/>
            <section className='AboutSection' id='about'>
                <AboutCard type="secondaryCard">
                    <List type="unordened" direction="vertical">
                        <li>
                            🇧🇷 I live in Brazil! <br/>
                            specifically in São Paulo.
                        </li>
                        <li>
                            🍜 I was born in Japan! <br/>
                            specifically in Iwata.
                        </li>
                        <li>
                            🇺🇸 I have an intermediate <br/>
                            level of English!
                        </li>
                    </List>
                </AboutCard>

                <AboutCard type="primaryCard">
                    <List type="unordened" direction="vertical">
                    <li>
                        🎓 I am in my last year <br/>
                        of high school.
                    </li>
                    <li>
                        🛠️ I work primarily with React, <br/>
                        React Native, and JavaScript.
                    </li>
                    <li>
                        🚀 I am currently taking more <br/>
                        programming courses.
                    </li>
                    </List>
                </AboutCard>

                <AboutCard type="secondaryCard">
                    <List type="unordened" direction="vertical">
                        <li>
                            🎮 I have been creating
                            Discord dev communities
                            since 2018.
                        </li>
                        <li>
                            ⚙️ I have worked on several
                            game server projects.
                        </li>
                        <li>
                            🧩 I also have nice
                            problem-solving abilities.
                        </li>
                    </List>
                </AboutCard>

                <AboutCard type="primaryCard">
                    <List type="unordened" direction="vertical">
                        <li>
                            👩‍🏫 I Mentored newcomers in
                            programming communities.
                        </li>
                        <li>
                            🌐 I aim to build more complex
                            applications and contribute to
                            impactful projects.
                        </li>
                        <li>
                            📖 I enjoy reading books
                            about technology, strategy,
                            and philosophy.
                        </li>
                    </List>
                </AboutCard>
            </section>
        </div>
    )
}
export default AboutSection
