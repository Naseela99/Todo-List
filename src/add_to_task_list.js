import {format} from'date-fns'
export default class Task{
    constructor(t_name,t_des,t_pri,t_due){
        this.name = t_name
        this.des =  t_des
        this.pri = t_pri
        this.due = t_due
    
    }
    displayTask(name){


        const task_div = document.createElement('div')
        task_div.className = `task-list-${name.replaceAll(' ','-')}-task`
        task_div.classList.add('task-list')

        const task_btn = document.createElement('button')
        task_btn.className = `task-element-btn`

        const task_name = document.createElement('div')
        task_name.className = `task-element-${name.replaceAll(' ','-')}`
        task_name.textContent = this.name

        const task_des = document.createElement('div')
        task_des.className = 'task-element'
        task_des.textContent = this.des

        const task_pri= document.createElement('div')
        task_pri.className = 'task-element'
        task_pri.textContent = this.pri



        const task_due = document.createElement('div')
        task_due.className = 'task-element'
        if (this.due){
        task_due.textContent = format(new Date(this.due), 'yyyy-MM-dd')

        }
        else{
            task_due.textContent = this.due

        }

        const task_del = document.createElement('button')
        task_del.className = 'task-element-del'
        task_del.textContent = 'X'

        task_div.appendChild(task_btn)
        task_div.appendChild(task_name)
        task_div.appendChild(task_des)
        task_div.appendChild(task_pri)
        task_div.appendChild(task_due)
        task_div.appendChild(task_del)


        task_btn.addEventListener('click',function changeBg(){
            if (task_btn.style.backgroundColor == 'rgb(0, 251, 0)'){
            task_btn.style.backgroundColor = 'white'

            }
            else{
            task_btn.style.backgroundColor = 'rgb(0, 251, 0)'
            }
        })

        task_del.addEventListener('click',function hide(){
            task_div.remove()
        })







        const to_add = document.querySelector(`.${name.replaceAll(' ','-')}`)

        to_add.appendChild(task_div)



    }
}