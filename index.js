
const form=document.querySelector("form");
const input= document.querySelector("input");
const list_el= document.querySelector("#tasks");


form.addEventListener('submit',function(){
const task=input.value;
if(!task){
    alert("Please fill the field first!")
}
else{
const Task_div_el=document.createElement("div");
Task_div_el.classList.add("task");
const Task_div_el_content=document.createElement("div");
Task_div_el_content.innerHTML=task;
Task_div_el_content.classList.add("text");

Task_div_el.appendChild(Task_div_el_content);

const Task_st =document.createElement("p");
Task_st.classList.add("Task_state");
Task_st.innerHTML="In progress";

const task_action =document.createElement("div");
task_action.classList.add("actions");

const delete_task =document.createElement("button");
delete_task.classList.add("btn");
delete_task.innerHTML="delete";
const done_task =document.createElement("button");
done_task.classList.add("btn");
done_task.innerHTML="Done";


task_action.appendChild(delete_task);
task_action.appendChild(done_task);
Task_div_el.appendChild(Task_st);
Task_div_el.appendChild(task_action);

list_el.appendChild(Task_div_el);
input.value = '';
delete_task.addEventListener('click', (e) => {
    list_el.removeChild(Task_div_el);
});
done_task.addEventListener('click', (e) => {
    Task_div_el_content.classList.toggle("checked");
    if(Task_st.innerHTML =="Achieved"){
        Task_st.classList.add("Task_state");
        Task_st.textContent ="In progress";
        
    }
    else{
        Task_st.textContent ="Achieved";
        Task_st.classList.add("achevid_Task");
    }
});
}
});

function fizzbuzz() {
   
    for (var number = 1; number <= 100; number++) {
        if (number %3 == 0 && number %5 == 0)
            console.log("FizzBuzz");
        else if (number %3 == 0 && number %5 !== 0)
            console.log("Fizz");
        else if (number %5 == 0  && number %3 !== 0)
            console.log("Buzz");
        else
        {
            console.log(number);
        }
    }

    
}
fizzbuzz();
