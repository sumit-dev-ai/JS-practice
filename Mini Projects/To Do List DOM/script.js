function addTask(){
    const inputElem=document.getElementById("taskInput");
    const taskList=document.getElementById("taskList");

    const task=inputElem.value;
    
    if (task.trim()==="") {
        return;
    }
    const li=document.createElement("li");

    const taskSpan=document.createElement("span");
    taskSpan.innerText=task;
    
    const delButton=document.createElement("button");
    delButton.innerText="❌";
    const completeBtn=document.createElement("button");
    completeBtn.innerText="✔️";
    const editBtn = document.createElement("button");
    editBtn.innerText = "✏️ Edit";

    //li will have
    li.appendChild(taskSpan);
    li.appendChild(editBtn);
    li.appendChild(completeBtn);
    li.appendChild(delButton);

    // pushing li in t=ul with taskList
    taskList.appendChild(li);
    inputElem.value="";   //it will remove value from input box after adding task
    
    
    editBtn.style.marginLeft="5px"
    delButton.style.marginLeft="10px"
    completeBtn.style.marginLeft="10px"

    //delete items
    delButton.onclick=function(){
        li.remove();
    }
    //stroke item after click so we added a class to add css
    completeBtn.onclick=function(){
        li.classList.toggle("complete")
    }

    //edit button
    editBtn.onclick=function(){
         const isEditing = editBtn.innerText === "✏️ Edit";

 if (editBtn.innerText === "✏️ Edit") {
            const inputField = document.createElement("input");
            inputField.type = "text";
            inputField.value = taskSpan.innerText;    //it will show task value in new input box to edit

            li.insertBefore(inputField, taskSpan);    //insert input box
            li.removeChild(taskSpan);    //removes list item text
            editBtn.innerText = "✅ Save";    //change edit button text
        } else {
            const inputField = li.querySelector("input");       //input field 
            const newSpan = document.createElement("span");    //new span tag to store task entry
            newSpan.innerText = inputField.value;    // task entry saved in newSpan using value from input field

            li.insertBefore(newSpan, inputField);
            li.removeChild(inputField);
            editBtn.innerText = "✏️ Edit";

            // Update reference so further edits work
            taskSpan = newSpan;
    }
    }

}
function filterTask(){
    const searchElem=document.getElementById("searchInput");
    const search=searchElem.value;

    const taskList=document.querySelectorAll("ul#taskList li");

    taskList.forEach((item)=>{
        item.style.display=item.innerText.toLowerCase().includes(search.toLowerCase())? "block": "none"
    })    

}
