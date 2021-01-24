const todos = [];


const pendingCLass = "bg-blue-400 w-full text-center text-white rounded py-4 border-2 border-blue-500 transition transform ease-in-out duration-300 hover:bg-blue-500 hover:text-white hover:scale-110 hover:-rotate-1 cursor-pointer";
const completedClass = "bg-yellow-400 w-full text-center text-white rounded py-4 border-2 border-yellow-500 transition transform ease-in-out duration-300 hover:bg-yellow-500 hover:text-white hover:scale-110 hover:rotate-1 cursor-pointer";
const pendingList = document.getElementById("pendinglist");
const completedList = document.getElementById("completedlist");

const showTodos = () => {
    const pendingTodos = todos.filter((todo) => todo.status === "pending");

    pendingList.innerHTML = "";
    pendingTodos.forEach((todo)=>{
        const pendingItem = document.createElement('li');
        pendingItem.className= pendingCLass;
        pendingItem.innerText= todo.text;
        pendingItem.id = todo.id;
        pendingList.appendChild(pendingItem);
    });
    
    const completedTodos = todos.filter((todo) => todo.status === "done");
    
    completedList.innerHTML = "";
    completedTodos.forEach((todo)=>{
        const completedItem = document.createElement('li');
        completedItem.className= completedClass;
        completedItem.innerText= todo.text;
        completedItem.id = todo.id;
        completedList.appendChild(completedItem);
    });
};



const newTodo = document.getElementById("newTodo");
const addForm = document.getElementById("addForm");
addForm.addEventListener('submit', event=>{
    event.preventDefault();
    todos.push({
    id: Math.floor(Math.random() * 100000).toString(),
    text: newTodo.value,
    status: "pending",
}); 
newTodo.value = "";
showTodos();
});

pendingList.addEventListener('click',(event)=>{
    todos.find(todo => todo.id === event.target.id).status = "done";
    showTodos();
});

completedList.addEventListener('click',(event)=>{
    todos.find(todo => todo.id === event.target.id).status = "pending";
    showTodos();
});

