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
        description: "• Perform triage, conduct root cause analysis, and implement corrections for data issues identified during the validation process. • Ensured the accuracy of file transmission schedules, maintain file delivery logs, and reporting discrepancies to management. • Enhanced data collection procedures and implemented improvements across various internal departments and for our customers, resulting in optimized processes. Learned advanced functions in Microsoft Excel to effectively create pivot tables and generate comprehensive pivot reports. "
 
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
        description: "Architected and implemented an interactive web application that acts as a student’s educational guide containing relevant information regarding all aspects of the Computer Science/Computer Engineering field of study CSU Long Beach.",
        skills: ""
    },
    {
        projectName: "WaterQualityNetwork",
        description: "Architected and implemented a network of IoT sensors to monitor water contamination in the city of Long Beach, and developed an interactive web application that acts as a hub for all the data contamination levels obtained by sensors.",
        skills: ""
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