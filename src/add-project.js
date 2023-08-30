
import display_project from "./add_dom_project"
import add_task_page from "./add_task_page"
export default class Project{
    constructor(name){

 
        this.name = name
        
    }

    addToList(){
        
        display_project(this.name)

        var x = localStorage.getItem(this.name)

        if(x)
        {
            localStorage.setItem(this.name,x)
        }
        else{

            localStorage.setItem(this.name,'')
        }
        add_task_page(this.name)


    }
}