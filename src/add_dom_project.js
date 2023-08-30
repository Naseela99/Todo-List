import display_project_task from "./display-project-task-page"
import setProject from "./set_p_name"
export default function display_project(name){

    const project_list = document.querySelector('.project-list')

    var pro = document.createElement('div')
    pro.className = 'project'
   
    pro.textContent = name

    pro.addEventListener('click',function task_pg(){
        display_project_task(name.replaceAll(' ','-'))
    })

    pro.addEventListener('click',setProject)
    
    project_list.appendChild(pro)
}