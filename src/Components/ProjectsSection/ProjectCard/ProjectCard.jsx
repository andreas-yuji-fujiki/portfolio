import './ProjectCard.css'

// components
import Title from '../../Title/Title'
import List from '../../List/List'
import ButtonLink from '../../ButtonLink/ButtonLink';

// icons:
import { CgMouse } from "react-icons/cg";
import { GiClick } from "react-icons/gi";

import { FaEye } from "react-icons/fa";
import { FaCode } from "react-icons/fa";


const validProjectTypes = ['open-source', 'pratice', 'freelance', 'personal-project', 'building']
const ProjectCard = ({ 
        projectTitle, projectType,
        usedLanguages,
        desktopProjectImagePath, desktopProjectImageDescription,
        deployLink, repositoryLink
    }) => {

    if(!validProjectTypes.includes(projectType)){
        throw new Error('Invalid project type!')
    }
    return (
        <div className={`projectCard ${projectType}`}>
            {/* project header */}
            <header className="projectHeader">
                <div className="projectTitleContainer">
                    <Title type="ProjectTitle" content={
                        <>
                            { projectTitle }
                        </>
                    }/>
                    <span className='forMobileSpan'><GiClick/></span>
                    <span className='forDesktopSpan'><CgMouse/></span>
                </div>
                <div className={`projectType ${projectType}`}>
                    <p>
                        { projectType }
                    </p>
                </div>
            </header>

            {/* project image */}
            <div className="projectImageContainer">
                {/* used languages icons */}
                <div className="projectUsedLanguagesContainer">
                    <List type='unordened' direction='horizontal' children={ usedLanguages } />
                </div>

                {/* desktop project image */}
                <div className="desktopProjectImage">
                    <img src={ desktopProjectImagePath } alt={ desktopProjectImageDescription } />
                </div>
            </div>

            {/* project links (deploy, github) */}
            <div className="projectLinksContainer">
                <List type='unordened' direction='horizontal' children={
                    <>
                        <ButtonLink 
                            classname={deployLink} 
                            link={deployLink} 
                            target='_blank' 
                            type='iconSecondary' 
                            content={ <FaEye/> } 
                            />
                        <ButtonLink 
                            link={repositoryLink} 
                            target='_blank' 
                            type='iconSecondary' 
                            content={ <FaCode/> }
                            />
                    </>
                }/>
            </div>
        </div>
    )
}
export default ProjectCard