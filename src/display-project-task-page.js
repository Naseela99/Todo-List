export default function display_project_task(name){
    

    const task_divs = document.querySelectorAll('.task-div-inner')

    for(var i=0; i<task_divs.length;i++){
        task_divs[i].style.display = 'none'
    }

    const task = document.querySelector(`.${name}`)

    task.style.display = 'block'


}





