import './SkillsCard.css'

// components
import Title from '../Title/Title'
import Span from '../Span/Span'
import List from '../List/List'
import ListItem from '../ListItem/ListItem'

// icons
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiLua } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaGit } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { FaLinux } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";

const SkillsCard = () => {
    return (
        <div className="skills-card">
            <Title type="SkillsCardTitle" content={
                <>
                    <Span content='#'/> Skills -  <span className='forDesktopSpan'>Hover</span>
                    <span className='forMobileSpan'>Click</span> on the icons!
                </>
            }/>
            <List type="unordened" direction="horizontal">
                <ListItem content={
                    <>
                        <div className="tooltip">
                            <SiStyledcomponents />
                            <span className="tooltip-text">Styled Components</span>
                        </div>
                    </>
                } />

                <ListItem content={
                    <>
                        <div className="tooltip">
                            <RiTailwindCssFill />
                            <span className="tooltip-text">Tailwind CSS</span>
                        </div>
                    </>
                } />

                <ListItem content={
                    <>
                        <div className="tooltip">
                            <FaReact />
                            <span className="tooltip-text">React.js</span>
                        </div>
                    </>
                } />

                <ListItem content={
                    <>
                        <div className="tooltip">
                            <IoLogoJavascript />
                            <span className="tooltip-text">JavaScript</span>
                        </div>
                    </>
                } />

                <ListItem content={
                    <>
                        <div className="tooltip">
                            <FaNodeJs />
                            <span className="tooltip-text">Node.js</span>
                        </div>
                    </>
                } />

                <ListItem content={
                    <>
                        <div className="tooltip">
                            <FaHtml5 />
                            <span className="tooltip-text">HTML5</span>
                        </div>
                    </>
                } />

                <ListItem content={
                    <>
                        <div className="tooltip">
                            <FaCss3Alt />
                            <span className="tooltip-text">CSS3</span>
                        </div>
                    </>
                } />

                <ListItem content={
                    <>
                        <div className="tooltip">
                            <SiLua />
                            <span className="tooltip-text">Lua</span>
                        </div>
                    </>
                } />

                <ListItem content={
                    <>
                        <div className="tooltip">
                            <FaGit />
                            <span className="tooltip-text">Git/Github</span>
                        </div>
                    </>
                } />

                <ListItem content={
                    <>
                        <div className="tooltip">
                            <VscVscode />
                            <span className="tooltip-text">VSCode</span>
                        </div>
                    </>
                } />

                <ListItem content={
                    <>
                        <div className="tooltip">
                            <FaLinux />
                            <span className="tooltip-text">Linux</span>
                        </div>
                    </>
                } />

                <ListItem content={
                    <>
                        <div className="tooltip">
                            <FaFigma />
                            <span className="tooltip-text">Figma</span>
                        </div>
                    </>
                } />
            </List>
        </div>
    )
}

export default SkillsCard
