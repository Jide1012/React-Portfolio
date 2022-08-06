import React from 'react'
import codingquiz from "../Images/codingquiz.PNG";
import ecommerce from "../Images/ecommerce.PNG";
import readmegenerator from "../Images/readmegenerator.PNG";
import regex from "../Images/regex.PNG";
import socialnetwork from "../Images/socialnetwork.PNG";
import workday from "../Images/workday.PNG";
import body from "../Images/Body.jpg"
import resume from "../Images/Jide Adesanya_Resume.pdf"





function Project() {

  let Objects = [

    {
      title: "Coding Quiz",
      description: "A fun quiz that tests your Coding Knowledge",
      thumbnail: codingquiz,
      projectURL: "https://github.com/Jide1012/Coding-Quiz",
      githubURL: "https://github.com/Jide1012/Coding-Quiz",
    },

    
    {
      title: "Ecommerce",
      description: "An e-commerce site using Express.js API and configured to using the MySQL database.",

      thumbnail: ecommerce,

      projectURL: "https://drive.google.com/file/d/1qwsEWQIbvACYLB3jQ02yPcS6Ww_jqiAl/view",
      githubURL: "https://github.com/Jide1012/E-commerce-",
    },

    {
      title: "readmegenerator",
      description: "A high-quality Professional Read.Me file developed using Node.js",

      thumbnail: readmegenerator,
      

      projectURL: "https://drive.google.com/file/d/12B5qTXtMrN9_X3AWcOImqTULjoDBr4Xp/view",
      githubURL: "https://github.com/Jide1012/Read-Me-Pro",
    },
      
        {
          title: "Regex Tutorial",
          description: "A Tutorial on how to break down an email regex.",
    
          thumbnail: regex,
    
    
          projectURL: "https://gist.github.com/Jide1012/f52f6c94d35a1a51d8fcec128e385759",
          githubURL: "https://gist.github.com/Jide1012/f52f6c94d35a1a51d8fcec128e385759",
        },


    {
      title: "Social Network",
      description: "As a social media startup U want an API for my social network that uses a NoSQL dtatbase.",

      thumbnail: socialnetwork,
      

     
      projectURL: "https://www.youtube.com/watch?v=1WaAx4b1OPI",
      githubURL: "https://github.com/Jide1012/Social-Network",
    },

    
    {
      title: "Workday Scheduler",
      description: "As a busy employee I am using a daily planner to create a schedule",

      thumbnail: workday,
      

      projectURL: "https://jide1012.github.io/My-workday/",
      githubURL: "https://github.com/Jide1012/My-workday",
    },
  ]

  return (
    <main>
            
            <div id="about" className="about">

                <h2>About Me</h2>

                <div className="about-me">
                <div className="bio-img">
                    <img src={body} alt="Jide Adesanya"/>
                    </div>

                 
                    

                    <div className="bio-p">
                        <p> 
                            Hello my name is Jide Adesanya I am from The Colony Texas. I am an ambitious student pursuing an Economics degree at the University of Texas at Austin with an Accounting Background. 
                            I am currently enrolled in Southern Methodist University coding Bootcamp.
                            I am someone who always goes above and beyond in all my work and am always eager to learn new things. 
                            Outside of work and school you can find me playing soccer and working out with my friends
                            <br></br>
                            <br></br>
                            
                        </p>
                    </div>
                    
                </div>
            </div>

            
                        <div class="UT Austin">
                        <div class="container-header">

                    
                    <div class="curriculum">
                        <div class="bootcamp">
                        <div class="container-header">
                        <h3>Coding Bootcamp</h3>
                        <h4>Certificate Program, SMU</h4>
                        </div>
                            <p>
                            Full Stack: HTML5, CSS3, 
                            JavaScript, jQuery, Express.js, React.js, Node.js, progressive 
                            web apps, agile methodology, computer science, database theory, 
                            MongoDB, MySQL, Git, Python, C#, and AWS.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
            <div id="projects" className="projects">

                <h2>Projects</h2>

            
                
                <div class="container">
                <div className="row justify-content-around">
                {Objects.map((card) => (
                    <>
                    
                        <div className="experience col-5">
                            <a href={card.projectURL}>
                                <img 
                                    src={card.thumbnail}
                                    alt={card.altTag}
                                />
                            </a>
                            <div className="container-header">
                                <h3>{card.title}</h3>
                                <p>{card.description}</p>
                            </div>
                        </div>
                    
                    </>
                ))}
                </div>   
                </div> 
            </div>
 
            <div id= "resume" className="resume">
                    <h2>Resume</h2>
                    <a href={resume}>Click Here</a>
            </div>
                    
                    
            
            
      
            
        </main>
    
  )
  

}





export default Project