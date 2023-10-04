import React, { useState } from "react";
import '../styles/Tabs.css';
import AboutTab from "./TabComponent/AboutTab";
import EducationTab from "./TabComponent/EducationTab";
import ExperienceTab from "./TabComponent/ExperienceTab";
import ProjectsTab from "./TabComponent/ProjectsTab";

const aboutMe = [
    {
        title: "Aaron Christopher Ramirez",
        header: "",
        description: "I'm a Data Analyst currently working at Benefitfocus. I have a passion for software development."
    }
];
const experience = [
    {
        title: "Data Analyst",
        company: "Benefitfocus",
        startDate: "2021",
        endDate: "Present",
        description: ["Perform triage, conduct root cause analysis, and implement corrections for data issues identified during the validation process.", "Ensured the accuracy of file transmission schedules, maintain file delivery logs, and reporting discrepancies tomanagement.","Enhanced data collection procedures and implemented improvements across various internal departments and for our customers, resulting in optimized processes.", "Learned advanced functions in Microsoft Excel to effectively create pivot tables and generate comprehensive pivot reports"]
    }
];

const education = [
    {
        school: "California State University, Long Beach",
        degree: "Bachelor of Science - BS",
        fieldOfStudy: "Computer Science",
        startDate: "August 2019",
        endDate: "May 2021"
    },
    {
        school: "College of the Canyons",
        degree: "Associate of Science - AS",
        fieldOfStudy: "Computer Science",
        startDate: "August 2015",
        endDate: "May 2019"
    }
];

const projects = [
    {
        projectName: "BeachCS",
        description: ["Architecture and implemented a full-stack web application that acts as a student’s education guide containing all information regarding all Computer Engineering Computer Science for students at CSULB.", "Integrated the application with AWS EC2 to establish the back-end infrastructure, utilizing AWS RDS for executing queries.","Collaborated with a team by following Agile methodologies and scheduled daily meetings to discuss progress, user stories andissues."],
        skills: "",
        title: "View In Github",
        link: "https://github.com/ShujoyI/CSULB_CECS_Wiki"
    },
    {
        projectName: "WaterQualityNetwork",
        description: ["Architecture and implemented a full-stack web application architecture that performs data analysis on a Network of Wireless Sensors.", "Integrated the application with a GCP virtual machine, utilizing the Compute Engine API as the back-end server. This setup allows for querying data from the front-end framework.", "Integrate with TCP server-client architecture, enabling the retrieval of data measurements from sensors and transmitting them to the back-end server."],
        skills: "",
        title: "View In Github",
        link: "https://github.com/aram249/WaterQualityNetwork"
    }
];

const tabContent = [
    {
        title:"About",
        content:<AboutTab props = {aboutMe}/>
    },
    {
        title: "Experience",
        content: <ExperienceTab props = {experience}/>
    },
    {
        title: "Education",
        content: <EducationTab props = {education}/>
    },
    {
        title: "Portfolio",
        content: <ProjectsTab props = {projects}/>
    }
]; 

const TabComponent = () => {
    // State to keep track of the currently active tab
    const [activeTab, setActiveTab] = useState(0);
    
return(
    <div className="tab--section">
        <div className="tab--section--container">
            {tabContent.map((value, index) => (
                <li key={index}
                onClick={() => setActiveTab(index)} 
                className={activeTab === index ? 'active' : ''}> 
                     {value.title} 
                </li> 
            ))}  
        </div> 
        <div className="tab-content">
            {tabContent[activeTab].content}
        </div>
    </div>
    );
};

export default TabComponent;