    const todoInput = document.querySelector("#todoInput");
	const list = document.querySelector("#listoDo");
	const todoForm = document.querySelector("#todoform");
	const sc_feedback = document.querySelector("#sc_feedback");
	const heading = document.querySelector("#heading");

	todoForm.addEventListener("submit", function(event){
        event.preventDefault();
        let task = todoInput.value;
        insertLi(task);
        removeLi(todoInput);
        screenReaderFeedBack(task);
	});

    function insertLi(task){
        let newID = generateID();
        let taskItem = createElement("li","",list,["class","task"]);
        let checker = createElement("input",null,taskItem,["type","checkbox"]);
        let label = createElement("label",task,taskItem,["for",newID]);
        checker.setAttribute("id",newID);
        let deleteButton = createElement("button","delete Ingredient", taskItem, ["class","deleteTask"]);
    }

    function createElement(tagName,textNode,parent,attribute = null){
        let node = document.createElement(tagName);
        if(textNode != null){
            let customTextNode = document.createTextNode(textNode);
            node.appendChild(customTextNode);
        }
        if(attribute != null){
            node.setAttribute(attribute[0],attribute[1]);
        }
        parent.appendChild(node);
        return node;
    }

    function removeLi(input){
        input.value = "";
    }

    function screenReaderFeedBack(task,feedback="added"){
        sc_feedback.textContent = `${task} ${feedback}.`;
    }

    function generateID(){
        let idPrefix = "task_num_";
        let tasks = document.querySelectorAll("#list > li");
        if (tasks.length == 0){
            return `${idPrefix}0`;
        }
        return idPrefix + tasks.length;
    }

    function hasClassName(element,className){
        if(element.classList.contains(className)){
            return true;
        }
        return false;
    }

    list.addEventListener("click",function(event){
        if(hasClassName(event.target, "deleteTask")){
            const li = event.target.closest("li");
            const taskName = event.target.previousElementSibling.textContent;
            deleteIngredient(li);
            focus(heading);
            screenReaderFeedBack(taskName,"removed");
        }
    });

    function deleteIngredient(theTarget){
        list.removeChild(theTarget);
    }

    function focus(element){
        element.focus();
    }