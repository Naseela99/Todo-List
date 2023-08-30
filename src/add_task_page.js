import TaskForm from "./new_task"
export default function add_task_page(name){


   

    const task_main_div = document.createElement('div')
    task_main_div.className = 'task-div-inner'
    task_main_div.classList.add(name.replaceAll(' ','-'))

    const task_header = document.createElement('div')
    task_header.className = 'task-header'
    task_header.textContent = name

    const task_list = document.createElement('div')
    task_list.className = `task-list-header`

    const n = document.createElement('div')
    n.className = `task-header-n`
    n.textContent = 'Task'

    const d = document.createElement('div')
    d.className = `task-header-e`
    d.textContent = 'Notes'

    const p = document.createElement('div')
    p.className = `task-header-e`
    p.textContent = 'Priority'


    const t = document.createElement('div')
    t.className = `task-header-e`
    t.textContent = 'Due Date'

    task_list.appendChild(n)
    task_list.appendChild(d)
    task_list.appendChild(p)
    task_list.appendChild(t)


    const task_add = document.createElement('div')
    task_add.className = 'task-add'

    const task_add_btn = document.createElement('button')
    task_add_btn.className = 'task-add-btn'
    task_add_btn.textContent = 'Add Task +'

    task_add_btn.addEventListener('click',function f(){

        const t_form = new TaskForm(name)

    })
    task_add.appendChild(task_add_btn)

    task_main_div.appendChild(task_header)
    task_main_div.appendChild(task_add)
    task_main_div.appendChild(task_list)


    task_main_div.style.display = 'none'


    const task_div = document.querySelector('.task-div')
    task_div.appendChild(task_main_div)





}