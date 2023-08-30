import checkTask from "./check_btns"
import Task from "./add_to_task_list"
export default class TaskForm{

    constructor(name){

        // console.log(`Name in TaskForm: ${name}`)
        this.project_name = name
        // console.log(`After assigning in taskForm: ${this.project_name}`)

        this.createForm(this.project_name)

        
        
       

    
        // console.log('In c')
       
       
    }

    


    createForm(project_name_1){

        const cur_form = document.querySelector('.task-form-div')

        if(cur_form===null){
       

        const form = document.createElement('form')
        const form_div = document.createElement('div')


        const name = document.createElement('input')
        name.name = 'name'
        name.required = 'true'
        name.className = 'inp-task'
        name.classList.add('name-task') 

        const desp = document.createElement('input')
        desp.name = 'desp'
        desp.required = 'true'
        desp.className = 'inp'
        desp.classList.add('desp')



        const priority = document.createElement('select')
        priority.name = 'priority'
        var option = document.createElement('option')
        option.text = 'P1'
        priority.add(option)

        var option2 = document.createElement('option')
        option2.text = 'P2'
        priority.add(option2)

        var option3 = document.createElement('option')
        option3.text = 'P3'
        priority.add(option3)

        priority.required = 'true'
        priority.className = 'inp'
        priority.classList.add('priority')



        const due = document.createElement('input')
        due.name = 'due'
        due.type = 'date'
        due.required = 'true'
        due.className = 'inp'
        due.classList.add('due')




        const name_label = document.createElement('label')
        name_label.for = 'name'
        name_label.textContent = 'Name'
        name_label.className = 'lab'


        const des_label = document.createElement('label')
        des_label.for = 'desp'
        des_label.textContent = 'Description'
        des_label.className = 'lab'



        const p_label = document.createElement('label')
        p_label.for = 'priority'
        p_label.textContent = 'Priority'
        p_label.className = 'lab'



        const due_label = document.createElement('label')
        due_label.for = 'due'
        due_label.textContent = 'Due Date'
        due_label.className = 'lab'


        const submit = document.createElement('input')
        submit.type = 'submit'
        submit.textContent = 'Submit'
        submit.className = 'submit-btn-task'


        const cancel = document.createElement('button')
        cancel.textContent = 'Cancel'
        cancel.className = 'cancel-btn-task'



        const btn_div = document.createElement('div')
        btn_div.className = 'btn-div'

        btn_div.appendChild(submit)
        btn_div.appendChild(cancel)





        form.appendChild(name_label)
        form.appendChild(name)

        form.appendChild(des_label)
        form.appendChild(desp)

        form.appendChild(p_label)
        form.appendChild(priority)

        form.appendChild(due_label)
        form.appendChild(due)

        form.appendChild(btn_div)
        
        form.className = 'task-form'

        form_div.appendChild(form)

        form_div.className = 'task-form-div'


        const main_content = document.querySelector('.main-content')
        main_content.appendChild(form_div)


        submit.addEventListener('click',function(event){
            event.preventDefault()
          });
    
        submit.addEventListener('click',submit_handle)
    
            
        function submit_handle(){
    
             task_form_add(project_name_1)
        } 
    
        cancel.addEventListener('click',function(event){
            event.preventDefault()
          });
    
        cancel.addEventListener('click',function add_p(){form_close()})







        

        }

        else{
            cur_form.style.display = 'block'
        }

        


        



    }


    

    
    
}


function task_form_add(n){

    const name = document.querySelector('.clicked').textContent



    const p_name = document.querySelector('.name-task').value
    const p_des = document.querySelector('.desp').value
    const p_pri = document.querySelector('.priority').value
    const p_due = document.querySelector('.due').value






    const names = document.querySelectorAll(`.task-element-${name.replaceAll(' ','-')}`)

    var rep = 0

    for (var i=0;i<names.length;i++) {


       

        if( names[i].textContent==p_name){

            
            rep +=1

        }

    }

    if(p_name=='' || p_des=='' || p_pri==''){
        alert('Enter all task details')
    }

    else if(p_name.includes("$") || p_name.includes('||') || p_des.includes('$') || p_des.includes('||'))
    {
        alert('Please use only alpha numeric characters')
    }

    else if (rep>0){
        alert('Task Already Exists')
    }

    
    else{

    const form_div = document.querySelector('.task-form-div')
    form_div.style.display = 'none'


    const p = new Task(p_name,p_des,p_pri,p_due)
    
    console.log(`HEREEEEEEEE${p_name}`)
    localStorage.setItem(name,localStorage.getItem(name)+`||${p_name}$${p_des}$${p_pri}$${p_due}$${name}`)


    p.displayTask(name)

    


    
    

    
    }
}

function form_close(){
    const form_div = document.querySelector('.task-form-div')
    form_div.style.display = 'none'
}

