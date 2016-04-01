//Problem: User interaction doesn't provide desired results.
//Solution: Add interactivty so the user can manage daily tasks.

  //set global variables...

    //new-task
    var taskInput = document.getElementById("new-task"); 
    //first button
    var addButton = document.getElementsByTagName("button")[0]; 
    //incomplete-tasks
    var incompleteTasksHolder = document.getElementById("incomplete-tasks"); 
    //completed-tasks
    var completedTasksHolder= document.getElementById("completed-tasks"); 

//list of all functions...

  //New Task List Item function - taking as input 
  //taskInput.value but by another name (taskString)
   createNewTaskElement = function(taskString) {
    //Create List Item onto which everything else will be appended
    var listItem = document.createElement("li");
	    //create input 1 of 2 (checkbox)
	    var checkBox = document.createElement("input"); // checkbox
	    //label
	    var label = document.createElement("label");
	    //input 2 of 2 (text)
	    var editInput = document.createElement("input"); // text
	    //button.edit
	    var editButton = document.createElement("button");
	    //button.delete
	    var deleteButton = document.createElement("button");
	    //Each element needs modifying
	    checkBox.type = "checkbox";
	    editInput.type = "text";
	    editButton.innerText = "Edit";
	    editButton.className = "edit";
	    deleteButton.innerText = "Delete";
	    deleteButton.className = "delete";
	    //text is equal to the taskInput.value argument we passed into
	    //this function
	    label.innerText = taskString;
    //Each element needs appending to listItem
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    //returns a list item
    return listItem;
  }

  //Add a new task - done
   addTask = function() {
    if (taskInput.value !== "") {
	    //write action to console
	    console.log("Add task...");
	    //Create a new list item with the text from #new-task
	    //reference above function
	    var listItem =  createNewTaskElement(taskInput.value);
	    //Append listItem to incompleteTasksHolder
	    incompleteTasksHolder.appendChild(listItem);
	     bindTaskEvents(listItem,  taskCompleted);
	    taskInput.value = "Type a new task here";
      return taskInput.value;
	  }
  }

  //clear out add task field
   clearAdd = function() {
    taskInput.value = "";
  }


  //Edit an existing task - TODO
   editTask = function() {
    //writes to the console
    console.log("Edit task...");

    var listItem = this.parentNode;
    
    var editInput = listItem.querySelector("input[type=text]");
    var label = listItem.querySelector("label");
    
    var containsClass = listItem.classList.contains("editMode");

	var editButton = listItem.querySelector("button[class=edit]");
    
    //if the class of the parent is .editMode
    if(containsClass) {
      //Switch from .editMode
      //label text become the input's value
      label.innerText = editInput.value;
      editButton.innerText = "Edit";
    } else {
      //Switch to .editMode
      //input value becomes the label's text
      editInput.value = label.innerText;
      editButton.innerText = "Save";
    }
    
    //Toggle .editMode on the list item
    listItem.classList.toggle("editMode");
  }

  //Delete an existing task - done
   deleteTask = function() {
    console.log("Delete task...");
    var listItem = this.parentNode;
    var ul = listItem.parentNode;
    
    //Remove the parent list item from the ul
    ul.removeChild(listItem);
  }

  //Mark a task as complete - done
   taskCompleted = function() {
    console.log("Task complete...");
    //Append the task list item to the #completed-tasks
    var listItem = this.parentNode;
    completedTasksHolder.appendChild(listItem);
     bindTaskEvents(listItem,  taskIncomplete);
  }

  //Mark a task as incomplete - done
   taskIncomplete = function() {
    console.log("Task incomplete...");
    //Append the task list item to the #incomplete-tasks
    var listItem = this.parentNode;
    incompleteTasksHolder.appendChild(listItem);
     bindTaskEvents(listItem,  taskCompleted);
  }

  //function to bind task events - see below for its use
   bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
    console.log("Bind list item events");
    //select taskListItem's children
    //so that the following event handlers work
    var checkBox = taskListItem.querySelector("input[type=checkbox]");
    var editButton = taskListItem.querySelector("button.edit");
    var deleteButton = taskListItem.querySelector("button.delete");
    
    //bind editTask to edit button
    editButton.onclick =  editTask;
    
    //bind deleteTask to delete button
    deleteButton.onclick =  deleteTask;
    
    //bind checkBoxEventHandler to checkbox
    checkBox.onchange =  checkBoxEventHandler;
  }

   ajaxRequest = function() {
    console.log("AJAX request");
  }



  //wiring (during which we call bind function)

    //Set the click handler to the addTask function
    addButton.addEventListener("click",  addTask);
    addButton.addEventListener("click",  ajaxRequest); 
    taskInput.addEventListener("click",  clearAdd);

    //cycle over incompleteTasksHolder ul list items
    //for each list item
    for(var i = 0; i < incompleteTasksHolder.children.length; i++) {
      //bind events to list item's children (taskCompleted)
      //call bind function - see above
       bindTaskEvents(incompleteTasksHolder.children[i],  taskCompleted);
    }

    //cycle over completedTasksHolder ul list items
    //for each list item   
    for(var i = 0; i < completedTasksHolder.children.length; i++) {
      //bind events to list item's children (taskIncomplete)
      //call bind function - see above
       bindTaskEvents(completedTasksHolder.children[i],  taskIncomplete);
    }
