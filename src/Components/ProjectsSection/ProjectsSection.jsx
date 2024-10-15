import './ProjectsSection.css'

// components
import ProjectCard from './ProjectCard/ProjectCard'
import Title from '../Title/Title'
import Span from '../Span/Span'
import Button from '../Button/Button'

// icons
import { FaRegClock } from "react-icons/fa6";
import { FaLinux } from "react-icons/fa";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";


const ProjectsSection = () => {
    return (
        <section className='projects'>
            {/* top secret */}
            <div id='top-secret'>
                <div className='first'>
                    <FaRegClock/> <span>?</span>
                </div>
                <div className='second'>
                    <span><em>Really?</em></span>
                </div>
            </div>

            {/* projects */}
            <Title type='SectionTitle' id="projects" content={
                <>
                    <Span content='#'/> All Projects 
                </>
            }/>
            <div className="projects-container">
{/* InsightBox */}
            <ProjectCard 
                    projectTitle="💬 InsightBox"
                    projectType='freelance'

                    desktopProjectImagePath="images/project-images/insightbox.png"
                    desktopProjectImageDescription="InsightBox project illustration."

                    deployLink="https://code.com.br/p/insightbox"
                    repositoryLink="https://github.com/andreas-yuji-fujiki/insight-box"

                    usedLanguages={
                        <>
                            <li>
                                <Button type='projectCardUsedLanguage' content={<FaDatabase/>} />
                            </li>
                            <li>
                                <Button type='projectCardUsedLanguage' content={<IoLogoJavascript/>} />
                            </li>
                            <li>
                                <Button type='projectCardUsedLanguage' content={<FaCss3Alt/>} />
                            </li>
                            <li>
                                <Button type='projectCardUsedLanguage' content={<FaHtml5/>} />
                            </li>
                        </>
                    }
                />
{/* Discord bot structure */}
                <ProjectCard 
                    projectTitle="Discord bot structure"
                    projectType='freelance'

                    desktopProjectImagePath="images/project-images/discord-bot-structure.png"
                    desktopProjectImageDescription="Discord bot structure project illustration."

                    deployLink="nodeploy"
                    repositoryLink="https://github.com/andreas-yuji-fujiki/discord-bot-prototype"

                    usedLanguages={
                        <>
                            <li>
                                <Button type='projectCardUsedLanguage' content={<IoLogoJavascript/>} />
                            </li>
                            <li>
                                <Button type='projectCardUsedLanguage' content={<FaNodeJs/>} />
                            </li>
                        </>
                    }
                />

{/* Unix Gnome GTK Theme */}
                <ProjectCard 
                    projectTitle="Unix Gnome GTK Theme"
                    projectType='open-source'

                    desktopProjectImagePath="images/project-images/gnome-purple-theme.png"
                    desktopProjectImageDescription="Unix Gnome GTK Theme project image."

                    deployLink="nodeploy"
                    repositoryLink="https://github.com/andreas-yuji-fujiki/Material-GTK3-Purple-MOD-With-Borders"

                    usedLanguages={
                        <>
                            <li>
                                <Button type='projectCardUsedLanguage' content={<FaLinux/>} />
                            </li>
                            <li>
                                <Button type='projectCardUsedLanguage' content={<FaCss3Alt/>} />
                            </li>
                        </>
                    }
                />

{/* TaskForge App */}
                <ProjectCard 
                    projectTitle="TaskForge App"
                    projectType='personal-project'

                    desktopProjectImagePath="images/project-images/taskforge.png"
                    desktopProjectImageDescription="TaskForge App project image."

                    deployLink="https://andreas-yuji-fujiki.github.io/TaskForge-App/"
                    repositoryLink="https://github.com/andreas-yuji-fujiki/TaskForge-App"

                    usedLanguages={
                        <>
                            <li>
                                <Button type='projectCardUsedLanguage' content={<IoLogoJavascript/>} />
                            </li>
                            <li>
                                <Button type='projectCardUsedLanguage' content={<FaCss3Alt/>} />
                            </li>
                            <li>
                                <Button type='projectCardUsedLanguage' content={<FaHtml5/>} />
                            </li>
                        </>
                    }
                />

{/* Pizza Hut Clone */}
                <ProjectCard 
                    projectTitle="Pizza Hut Landing Page Clone"
                    projectType='pratice'

                    desktopProjectImagePath="images/project-images/pizza-hut-clone.png"
                    desktopProjectImageDescription="Pizza Hut Clone project image."

                    deployLink="https://andreas-yuji-fujiki.github.io/pizza-hut-clone/"
                    repositoryLink="https://github.com/andreas-yuji-fujiki/pizza-hut-clone"

                    usedLanguages={
                        <>
                            <li>
                                <Button type='projectCardUsedLanguage' content={<FaHtml5/>} />
                            </li>
                            <li>
                                <Button type='projectCardUsedLanguage' content={<FaCss3Alt/>} />
                            </li>
                        </>
                    }
                />

{/* Instagram Login Clone */}
                <ProjectCard 
                    projectTitle="Instagram Login Clone"
                    projectType='pratice'

                    desktopProjectImagePath="images/project-images/instagram-login-page-clone.png"
                    desktopProjectImageDescription="Instagram Login Clone project image"

                    deployLink="https://andreas-yuji-fujiki.github.io/ig-login-page-copy/"
                    repositoryLink="https://github.com/andreas-yuji-fujiki/ig-login-page-copy"

                    usedLanguages={
                        <>
                            <li>
                                <Button type='projectCardUsedLanguage' content={<IoLogoJavascript/>} />
                            </li>
                            <li>
                                <Button type='projectCardUsedLanguage' content={<FaCss3Alt/>} />
                            </li>
                            <li>
                                <Button type='projectCardUsedLanguage' content={<FaHtml5/>} />
                            </li>
                        </>
                    }
                />

{/* JS Calc */}
                <ProjectCard 
                    projectTitle="Javascript Calculator"
                    projectType='pratice'

                    desktopProjectImagePath="images/project-images/js-calc.png"
                    desktopProjectImageDescription="JS Calc project image."

                    deployLink="https://andreas-yuji-fujiki.github.io/CalcJS-History-Theme/"
                    repositoryLink="https://github.com/andreas-yuji-fujiki/CalcJS-History-Theme"

                    usedLanguages={
                        <>
                            <li>
                                <Button type='projectCardUsedLanguage' content={<IoLogoJavascript/>} />
                            </li>
                            <li>
                                <Button type='projectCardUsedLanguage' content={<FaCss3Alt/>} />
                            </li>
                            <li>
                                <Button type='projectCardUsedLanguage' content={<FaHtml5/>} />
                            </li>
                        </>
                    }
                />

{/* Renbly */}
                <ProjectCard 
                    projectTitle="Renbly - Learn Any Language!"
                    projectType='building'

                    desktopProjectImagePath="images/project-images/renbly.png"
                    desktopProjectImageDescription="Renbly project illustration."

                    deployLink="nodeploy"
                    repositoryLink="https://github.com/andreas-yuji-fujiki/renbly-landing-page"

                    usedLanguages={
                        <>
                            <li>
                                <Button type='projectCardUsedLanguage' content={<FaReact/>} />
                            </li>
                            <li>
                                <Button type='projectCardUsedLanguage' content={<RiTailwindCssFill/>} />
                            </li>
                            <li>
                                <Button type='projectCardUsedLanguage' content={<IoLogoJavascript/>} />
                            </li>
                        </>
                    }
                />

{/* CEP Lookup */}
                <ProjectCard 
                    projectTitle="CEP Lookup"
                    projectType='building'

                    desktopProjectImagePath="images/project-images/cep-lookup.png"
                    desktopProjectImageDescription="CEP Lookup project illustration."

                    deployLink="nodeploy"
                    repositoryLink="https://github.com/andreas-yuji-fujiki/cep-lookup"

                    usedLanguages={
                        <>
                            <li>
                                <Button type='projectCardUsedLanguage' content={<FaReact/>} />
                            </li>
                            <li>
                                <Button type='projectCardUsedLanguage' content={<IoLogoJavascript/>} />
                            </li>
                        </>
                    }
                />

{/* Starbucks Redesign */}
                <ProjectCard 
                    projectTitle="Starbucks Redesign"
                    projectType='building'

                    desktopProjectImagePath="images/project-images/better-starbucks.png"
                    desktopProjectImageDescription="Starbucks Redesign project image."

                    deployLink="https://andreas-yuji-fujiki.github.io/BetterStarbucks/"
                    repositoryLink="https://github.com/andreas-yuji-fujiki/BetterStarbucks"

                    usedLanguages={
                        <>
                            <li>
                                <Button type='projectCardUsedLanguage' content={<FaReact/>} />
                            </li>
                            <li>
                                <Button type='projectCardUsedLanguage' content={<RiTailwindCssFill/>} />
                            </li>
                            <li>
                                <Button type='projectCardUsedLanguage' content={<IoLogoJavascript/>} />
                            </li>
                        </>
                    }
                />
            </div>
        </section>
    )
}
export default ProjectsSection