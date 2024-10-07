import './App.css'

// components:
import Header from './Components/Header/Header'
import Section from './Components/Section/Section'
import SkillsCard from './Components/SkillsCard/SkillsCard'
import AboutSection from './Components/AboutSection/AboutSection'
import ProjectsSection from './Components/ProjectsSection/ProjectsSection'
import Footer from './Components/Footer/Footer'

import Span from './Components/Span/Span'
import Button from './Components/Button/Button'
import ButtonLink from './Components/ButtonLink/ButtonLink'
import List from './Components/List/List'



// icons
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";

const App = () => {
  return(
    <>
      {/* Main Header*/}
      < Header />

      {/* Welcome Section */}
      < Section 
        id="welcome-section"

        imageOrder="imageFirst"

        imagePath="images/spaceship.png"

        imageDescription="A pixel art of a spaceship with a purple background!" 

        titleType="typeWriter"

        titleId="skills"
        
        titleContent="I'm Andreas Yuji." 

        secondTitleType="highlited"

        secondTitleContent={
          <>
            17 years old <Span content="Frontend React" /> developer!
          </>
        }

        content={
          <>
            <div className='social-links-container'>
                <List type="unordened" direction="horizontal">
                  <li>
                    < ButtonLink  
                      type='iconPrimary'
                      link='https://www.linkedin.com/in/andreas-yuji-fujiki-a08633321/'
                      target='_blank'
                      content={
                        < FaLinkedin />
                      }
                    />
                  </li>
                  <li>
                    < ButtonLink  
                        type='iconPrimary'
                        link='https://github.com/andreas-yuji-fujiki'
                        target='_blank'
                        content={
                          < FaGithub />
                        }
                      />
                  </li>
                  <li>
                    <a href="download/resume.pdf" download="resume.pdf">
                      <Button
                          type='iconPrimary'
                          content={
                            <>
                                <div className="tooltip">
                                  <FaFileDownload/>
                                  <span className="tooltip-text">download resume</span>
                                </div>
                            </>
                          }
                        />
                    </a>
                  </li>
                </List>
            </div>
          </>
        }
      />

      < SkillsCard />
      < AboutSection />
      < ProjectsSection />
      < Footer />
    </>
  )
}
export default App