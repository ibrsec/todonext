<a name="readme-top"></a>
 
  
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/ibrsec/todonext/">
    <img src="./public/next.svg" alt="Logo" width="250"   >
  </a>

  <h3 align="center">Typescript Next Todo App</h3>

  <p align="center">
    An awesome Typescript Next Todo App (next api)
    <a href="https://github.com/ibrsec/todonext"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://todonext-mu.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/ibrsec/todonext/issues">Report Bug</a>
    ·
    <a href="https://github.com/ibrsec/todonext/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>📎 Table of Contents 📎 </summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
     <!-- <li><a href="#figma">Figma</a></li> -->
     <li><a href="#overview">Overview</a></li>
     <li><a href="#quick-setup">Quick Setup</a></li>
     <li><a href="#directory-structure">Directory structure</a></li>
     <li><a href="#built-with">Built With</a></li>
    <!-- <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li> -->

    
  </ol>
</details>





---

<!-- ABOUT THE PROJECT -->
<a name="about-the-project"></a>
## ℹ️ About The Project
  
[![todonext](./public/project.png)](https://todonext-mu.vercel.app/) 




<p align="right">(<a href="#readme-top">back to top</a>)</p>


---

<!-- ## Figma 

<a href="https://www.figma.com/file/ePyCHKsx2ODB32uLgyUEEd/bootstrap-home-page?type=design&node-id=0%3A1&mode=design&t=edDzadCB9Ev5FS1a-1">Figma Link</a>  

  <p align="right">(<a href="#readme-top">back to top</a>)</p>




--- -->
<a name="overview"></a>
## 👀 Overview

 
🎯 Used Next environment with typescript</br> 
🎯 Axios is used for requests</br>
🖥 Todos are stored in ui</br>
🖥 Todos can be added</br>
🖥 Todos can be edited</br>
🖥 Todos status can be changed to completed</br>
🖥 Todos can be deleted</br> 
🌱 As Backend next js is used but any db is not used! So Datas are saved to the ui!</br> 
🌱 Because of that sometimes page needs a refresh</br> 
<!-- 🌱 ÷Screen and search the Legends on the app</br> -->
<!-- 💪   </br> -->
<!-- 🐞 Check the finished tasks   </br> -->


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<a name="quick-setup"></a>
## 🛫 Quick Setup

```sh
# clone the project
git clone https://github.com/ibrsec/todonext.git

# enter the project directory
cd todonext

# install dependency
npm install || yarn install

# develop
npm run dev || yarn start
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ## 🐞 Debug

![todonext.gif](/todonext.gif) -->








<a name="directory-structure"></a>
## 📂 Directory structure 

```diff
todonext  (folder)
  |          
  |---public (folder) 
  |                
+ |---src (folder)    
  |     |---app (folder)          
  |     |    |---api (folder)         
  |     |    |   └---todos (folder) 
  |     |    |         |---[id] (folder) 
  |     |    |         |     └---route.ts 
  |     |    |         |
  |     |    |         |---data.ts
  |     |    |         └---route.ts
  |     |    |        
  |     |    |---global.css 
  |     |    |---layout.tsx
  |     |    └---page.tsx
  |     |            
  |     |            
  |     |---dbConfig (folder)   
  |     |           
  |     |          
  |     └---types.d.ts 
  |         
  |---next.config.mjs 
  |---postcss.config.mjs
  |---tailwind.config.ts
  |---.eslintrc.json  
  |----tsconfig.json
  |----package.json
  |----yarn.lock
  └----readme.md 
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<a name="built-with"></a>
### 🏗️ Built With

 
<!-- https://dev.to/envoy_/150-badges-for-github-pnk  search skills-->

 <img src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white">
 <img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white&color=red"> 
 <img src="https://img.shields.io/badge/TypeScript-F7DF1E?style=for-the-badge&logo=typescript&logoColor=black"> 
 <!-- <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white">  -->
 <img src="https://img.shields.io/badge/tailwind-563D7C?style=for-the-badge&logo=tailwind&logoColor=white"> 
 <!-- <img src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white">  -->
 <img src="https://img.shields.io/badge/axios-CC6699?style=for-the-badge&logo=axios&logoColor=white"> 
 <!-- <img src="https://img.shields.io/badge/context_api-AB4BFE?style=for-the-badge&logo=context&logoColor=FFC920">  -->
 <!-- <img src="https://img.shields.io/badge/redux-AB4BFE?style=for-the-badge&logo=redux&logoColor=FFC920">  -->
 <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"> 
 <img src="https://img.shields.io/badge/nextjs-20232A?style=for-the-badge&logo=next&logoColor=61DAFB"> 
 <!-- <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white">  -->
 <!-- <img src="https://img.shields.io/badge/swal_alert2-CA4245?style=for-the-badge&logo=swal-alert2&logoColor=white">  -->
 




<p align="right">(<a href="#readme-top">back to top</a>)</p>
