import Project from "./add-project";
import Task from "./add_to_task_list";
export default function checkLocal(){



    var existed = new Set()

    if(localStorage.length>0) {

        // We have to add things here
        for (var i = 0; i < localStorage.length; i++){

            var pro = localStorage.getItem(localStorage.key(i))
            var name = localStorage.key(i)

            if(name==null){
                continue
            }


           else if (pro==''|| !pro){
                var p_ = new Project(name)
                p_.addToList()
           }

            else{

                var t = pro.split('||')

                for (var j=1;j< t.length;j++){


                    if(t[j]!='')


               
                {
                var t_name = t[j].split('$')[0]
                var t_des = t[j].split('$')[1]
                var t_pri = t[j].split('$')[2]
                var t_due = t[j].split('$')[3]
                var p = t[j].split('$')[4]


                if(!existed.has(p))

               { var p_ = new Project(p)
                p_.addToList()
                existed.add(p)
}
                var p_deets = new Task(t_name,t_des,t_pri,t_due)

                p_deets.displayTask(p)}
                }



                

            }
}
    }
    
    
}