import React, { useState } from "react";
import '../styles/Tabs.css';
import TabNavItem from "./TabNavItem";
import TabContent from "./TabContent";
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
        startDate: "2019",
        endDate: "2021"
    },
    {
        school: "College of the Canyons",
        degree: "Associate of Science - AS",
        fieldOfStudy: "Computer Science",
        startDate: "2015",
        endDate: "2019"
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

const Tabs = () => {
    
    const [activeTab, setActiveTab] = useState("active");

    return (
        <div className="tabs">
            {/*Tab nav*/}
            <ul className="nav">
                <TabNavItem title="About" id= "about" activeTab={activeTab} setActiveTab={setActiveTab}/>
                <TabNavItem title="Experience" id= "experience" activeTab={activeTab} setActiveTab={setActiveTab}/>
                <TabNavItem title="Education" id= "education" activeTab={activeTab} setActiveTab={setActiveTab}/>
                <TabNavItem title="Portfolio" id= "projects" activeTab={activeTab} setActiveTab={setActiveTab}/>

            </ul>
            <div className="outlet">
                {/*Content will be shown here*/}
                <TabContent id="about" activeTab={activeTab} >
                    <AboutTab aboutMe = {aboutMe}/>
                </TabContent>

                <TabContent id="experience" activeTab={activeTab}>
                    <ExperienceTab experience={experience}/>
                </TabContent>

                <TabContent id="education" activeTab={activeTab}>
                    <EducationTab education={education}/>
                </TabContent>

                <TabContent id="projects" activeTab={activeTab}>
                    <ProjectsTab projects={projects}/>
                </TabContent>
                
            </div>
        </div>
    )
};

export default Tabs;