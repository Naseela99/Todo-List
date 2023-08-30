// import Task from "./add_to_task_list"
// // import { p_name } from "./set_p_name"
// // import { getPName } from "./set_p_name"


// var visited = new Set()

// export default function checkTask(){
    

//     // const name = getPName()

//     // console.log('HEYA')
//     // console.log(name)


    
//     const submit = document.querySelector('.submit-btn-task')
//     const cancel =  document.querySelector('.cancel-btn-task')

//     submit.addEventListener('click',function(event){
//         event.preventDefault()
//       });

//     // submit.removeEventListener('click',submit_handle
//     //     )
//     submit.addEventListener('click',submit_handle)

//     // console.log(getEventListeners(submit))
        
//     function submit_handle(){

//          task_form_add()
//     } 
//     // console.log('Checking')

//     cancel.addEventListener('click',function(event){
//         event.preventDefault()
//       });

//     cancel.addEventListener('click',function add_p(){form_close()})
// }


// function task_form_add(){


//     const name = document.querySelector('.clicked').textContent


//     console.log(`In task form add}`)

//     const p_name = document.querySelector('.name-task').value
//     const p_des = document.querySelector('.desp').value
//     const p_pri = document.querySelector('.priority').value
//     const p_due = document.querySelector('.due').value




//     const names = document.querySelectorAll(`.task-element-${name.replaceAll(' ','-')}`)


//     var rep = 0

//     for (var i=0;i<names.length;i++) {


       

//         if( names[i].textContent==p_name){

            
//             rep +=1

//         }

//     }

//     console.log(p_name.includes("$"))

//     if(p_name=='' || p_des=='' || p_pri=='') {
//         alert('Enter all task details')
//     }
//     else if(p_name.includes("$") || p_name.includes('||') || p_des.includes('$') || p_des.includes('||'))
//     {
//         console.log('Yo')
//     }
//     else if (rep>0){
//         // console.log('ALERT')
//         alert('Task Already Exists')
//     }

    
//     else{

//     const form_div = document.querySelector('.task-form-div')
//     form_div.style.display = 'none'


//     const p = new Task(p_name,p_des,p_pri,p_due)

//     p.displayTask(name)

//     // localStorage.setItem('task_div',task_div)
//     // localStorage.setItem('main_content',document.querySelector('.main_content').innerHTML)


//     // console.log(localStorage.getItem('main_content'))
//     // console.log('hello')
    

    

    
//     }
// }

// function form_close(){
//     const form_div = document.querySelector('.task-form-div')
//     form_div.style.display = 'none'
// }