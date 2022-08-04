import React from 'react'
import codingquiz from "../Images/codingquiz";
import ecommerce from "../Images/ecommerce";
import readmegenerator from "../Images/readmegenerator";
import regex from "../Images/regex"
import socialnetwork from "../Images/socialnetwork"
import workday from "../Images/workday";


function Body() {

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
      description: " ",

      thumbnail: socialnetwork,
      

      // TODO: Record a demo video for projectURL
      projectURL: "https://github.com/sam-pettyjohn/random-photo-generator",
      githubURL: "https://github.com/sam-pettyjohn/random-photo-generator",
    },

    // ecommerce back-end
    {
      title: "E-Commerce Back-End Database",
      description: "Custom built back end for an e-commerce site using Express.js API and configured to use Sequelize to interact with a MySQL database.",

      thumbnail: workday,
      

      projectURL: "https://github.com/sam-pettyjohn/ecommerce-back-end",
      githubURL: "https://github.com/sam-pettyjohn/ecommerce-back-end",
    },





  ]

}

export default Body