import { useState } from "react";


const skills = 
    //Frontend
   [ {name: "HTML/CSS", level: 95, category: "Frontend"}, 
    {name: "JavaScript", level: 70, category: "Frontend"},
    {name: "React", level: 65, category: "Frontend"},
    {name: "Tailwind", level: 60, category: "Frontend"},


    //Backend
    {name: "Node.js", level: 65, category: "Backend"},
    {name: "Express", level: 60, category: "Backend"},
    {name: "Mongodb", level: 65, category: "Backend"},


    //Tools
    {name: "Git/Github", level: 80, category: "Tools"},
    {name: "VS Code", level: 80, category: "Tools"},
    {name: "Docker", level: 65, category: "Tools"},
    {name: "Figma", level: 60, category: "Tools"},


   ];



export const SkillsSection =() => {
    const [ActiveCategory, setActiveCategory] = useState("all");
    return (
        
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">

            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill,key)=> (
                   <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover"> <div className="text-left mb-4">
                    <h3 className="font-semibold text-lg">{skill.name}</h3></div>

                    <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden ">
                    <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out" style={{width: skill.level + "%"}}/>

                    
                    
                    </div>
                    <div className="text-right mt-1">
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    
                    </div> 
                ))}
            </div>
            </div>

        </section>
    )
}