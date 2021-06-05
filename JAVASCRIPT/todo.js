const todoform=document.querySelector(".js-toDoForm"),
    todoinput= todoform.querySelector("input"), 
    todolist =document.querySelector(".js-toDoList"); 
    
    const toDos_LS = "todo";
    let toDos = []; 
    const newtoDos_LS ="newtodo"; 

   function removetodo(event){
       const btn= event.target; 
       const li= btn.parentNode; 
       todolist.removeChild(li); 
       const newToDos= toDos.filter(function(toDo){
           return li.id != toDo.id;
       })
       toDos=newToDos; 
       saveToDos_LS(); 
   }

    function saveToDos_LS(){
        localStorage.setItem(toDos_LS, JSON.stringify(toDos));
    }

    function writetodo(text){
        const li= document.createElement("li");
        const span = document.createElement("span"); 
        const deletebtn= document.createElement("button"); 
        li.id= toDos.length+1; 
        deletebtn.innerText = "❌"; 
        span.innerText = text; 
        li.appendChild(span); 
        li.appendChild(deletebtn); 
        todolist.appendChild(li); 

        const todoObject = {
            text:text,
            id: toDos.length+1,
        };
        toDos.push(todoObject); 
        saveToDos_LS();    

        deletebtn.addEventListener("click",removetodo); 
    }

    function handlesubmit(event){
        event.preventDefault(); 
        const toDoValue = todoinput.value;
        writetodo(toDoValue);
        todoinput.value="";
    }

    function listuptodo(){
        const listOfToDos= localStorage.getItem(toDos_LS); 
        if (listOfToDos!==null){
            const pasedToDos = JSON.parse(listOfToDos); 
            pasedToDos.forEach(function(toDO){
                writetodo(toDO.text);
            })


        }
    }

    function init(){
        listuptodo(); 
        todoform.addEventListener("submit", handlesubmit);
       
 

    }
    init();