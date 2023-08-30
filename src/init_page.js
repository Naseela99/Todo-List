import checkLocal from "./local"
export default function init_page(){
    const body = document.querySelector('body')

    const main_content = document.createElement('div')
    main_content.className = 'main-content'
    

    const project_div = document.createElement('div')
    project_div.className = 'project-div'

    
    

    const project_header = document.createElement('div')
    project_header.className = 'project-header'
    project_header.textContent = 'Projects'
 
    project_div.appendChild(project_header)

    const project_add_btn = document.createElement('button')
    project_add_btn.className = 'project-add-btn'
    project_add_btn.textContent = '+'

    project_div.appendChild(project_add_btn)







    const project_list = document.createElement('div')
    project_list.className = 'project-list'

    
    
    project_div.appendChild(project_list)


  

    main_content.appendChild(project_div)
    


    const task_div = document.createElement('div')
    task_div.className = 'task-div'
    main_content.appendChild(task_div)





    body.appendChild(main_content)


    checkLocal()


    
}