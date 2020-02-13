const list = document.querySelector('.projects-list--js')

fetch("https://api.github.com/users/jakubgerlee/repos")
  .then(resp => resp.json())
  .then(resp=> {
  const repos = resp;
   for(const repo of repos){
     const {description, html_url, name} = repo;
     list.innerHTML += `
     <li class="project">
     <div class="project__container">
       <img
         class="project__logo"
         src="../assets/github-logo.svg"
         alt="Github logo."
       />
       <h3 class="project__title">${name}</h3>
       <p class="project__description">${description ? description : "No description."}</p>
     </div>
     <div class="project__footer">
       <a
         class="project__link project__link--demo"
         title="Demo: demo of sample-app"
         href="#"
         >Demo</a
       >
       <a
         class="project__link project__link--code"
         title="Sourcecode: Github link to sample-app"
         href="${html_url}"
         >Github</a
       >
     </div>
   </li>
      `;
   }
})
  .catch(err => {
  console.log(err);
})
