import Project from "./add-project"
export default class ProjectForm{

    constructor(){
        this.form = document.querySelector('.form-div')

        if(this.form===null){
            this.createForm()
        }
        else{
            // this.form = form
            this.form.style.display = 'block'
        }
       
    }


    createForm(){
       

        const form = document.createElement('form')
        const form_div = document.createElement('div')


        const name = document.createElement('input')
        name.name = 'name'
        name.required = 'true'
        name.className = 'inp'
        name.classList.add('name') 





        const name_label = document.createElement('label')
        name_label.for = 'name'
        name_label.textContent = 'Project Name'
        name_label.className = 'lab'




        const submit = document.createElement('input')
        submit.type = 'submit'
        submit.textContent = 'Submit'
        submit.className = 'submit-btn'


        const cancel = document.createElement('button')
        cancel.textContent = 'Cancel'
        cancel.className = 'cancel-btn'



        const btn_div = document.createElement('div')
        btn_div.className = 'btn-div'

        btn_div.appendChild(submit)
        btn_div.appendChild(cancel)





        form.appendChild(name_label)
        form.appendChild(name)

  

        form.appendChild(btn_div)
        
        form.className = 'project-form'

        form_div.appendChild(form)

        form_div.className = 'form-div'

        form_div = form_div

        const main_content = document.querySelector('.main-content')
        main_content.appendChild(form_div)

        submit.addEventListener('click',function(event){
            event.preventDefault()
          });

          
        submit.addEventListener('click',function add_p(){form_add()})

        cancel.addEventListener('click',function(event){
            event.preventDefault()
          });

        cancel.addEventListener('click',function add_p(){form_close()})



        



    }


    

    
    
}

function form_add(){

    const p_name = document.querySelector('.name').value


    const names = document.querySelectorAll('.project')
    var rep = 0

    for (var i=0;i<names.length;i++) {

       

        if( names[i].textContent==p_name){
            
            rep +=1

        }

    }

    if(p_name=='' ){
        alert('Enter all project details')
    }

    else if (rep>0){
        alert('Project Already Exists')
    }

    
    else{

    const form_div = document.querySelector('.form-div')
    form_div.style.display = 'none'


    const p = new Project(p_name)

    p.addToList()



    

    
    }
}

function form_close(){
    const form_div = document.querySelector('.form-div')
    form_div.style.display = 'none'
}