import React, { useState } from "react";
import '../../styles/Tabs.css';
import TabNavItem from "../TabNavItem";
import TabContent from "../TabContent";
import About from "../../pages/About";
import Education from "../../pages/Education";
import Experience from "../../pages/Experience";
import Projects from "../../pages/Projects";


const Tabs = () => {
    
    const [activeTab, setActiveTab] = useState("active");
    
    // const handleTab1 = () => {
    //     setActiveTab("about");
    // }

    // const handleTab2 = () => {
    //     setActiveTab("experience");
    // }

    return (
        <div className="tabs">
            {/*Tab nav*/}
            <ul className="nav">
                <TabNavItem title="About" id= "active" activeTab={activeTab} setActiveTab={setActiveTab}/>
                <TabNavItem title="Education" id= "education" activeTab={activeTab} setActiveTab={setActiveTab}/>
                <TabNavItem title="Experience" id= "experience" activeTab={activeTab} setActiveTab={setActiveTab}/>
                <TabNavItem title="Projects" id= "projects" activeTab={activeTab} setActiveTab={setActiveTab}/>

            </ul>
            <div className="outlet">
                {/*Content will be shown here*/}
                <TabContent id="active" activeTab={activeTab}>
                    <About/>
                </TabContent>

                <TabContent id="education" activeTab={activeTab}>
                    <Education/>
                </TabContent>

                <TabContent id="experience" activeTab={activeTab}>
                    <Experience/>
                </TabContent>

                <TabContent id="projects" activeTab={activeTab}>
                    <Projects/>
                </TabContent>
                
            </div>
        </div>
    )
};

export default Tabs;