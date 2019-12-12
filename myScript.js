var myList = document.getElementById("myList");
var newTaskText = document.getElementById("newTaskText");
var removeButton = "<input class='removeTask' type='button' value='X' onclick='RemoveTask()'>";
var checkButton = "<input class='checkButton' type='button' value='V' onclick='CheckTask()'>";

function AddTask()
{
    console.log("Function AddTask is called.");

    if (newTaskText.value)
    {
        var newTask = document.createElement ("LI");
        newTask.innerHTML = newTaskText.value + checkButton + removeButton;
        myList.appendChild(newTask);
        newTaskText.value = "";
    }

}

function RemoveTask()
{
    console.log("Function RemoveTask is called.");
    let thisTask = document.activeElement.parentElement;
    thisTask.parentNode.removeChild(thisTask);
}

function CheckTask()
{
    let thisTask = document.activeElement.parentElement;

    if (thisTask.className != "checked")
    {
        console.log("If działa");
        document.activeElement.style.backgroundColor = "#13FF62"
        thisTask.style.backgroundColor ="#96ffa2";
        thisTask.style.color = "white";
        thisTask.className = "checked";
    }

    else
    {
        console.log("Drugi If działa");
        document.activeElement.style.backgroundColor = "rgb(168, 238, 255)"
        thisTask.style.backgroundColor ="rgb(168, 238, 255)";
        thisTask.style.color = "black";
        thisTask.className = "unchecked";
    }
}
