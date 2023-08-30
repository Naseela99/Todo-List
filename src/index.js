import init_page from './init_page';
import Project from "./add-project"
import setProject from './set_p_name';

import './style.css';

import ProjectForm from './project-add-form';



init_page()

const project_add_btn = document.querySelector('.project-add-btn')

project_add_btn.addEventListener('click',project_form)

const projects = document.querySelectorAll('.project')

for(var p=0 ; p<projects.length;p++){
    
    projects[p].addEventListener('clcik',setProject)


}

function project_form(){

    const p_form = new ProjectForm()

}
