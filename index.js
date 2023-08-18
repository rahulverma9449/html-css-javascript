(function () {
    let tasks = [];
    const taskList = document.getElementById('list');
    const addTaskInput = document.getElementById('add');
    const tasksCounter = document.getElementById('tasks-counter');

    // console.log('Working');
    var a = 10;
    
    // function addTaskToDOM (task) {
    //     const li = document.createElement('li');
    
    //     li.innerHTML = '
    //     <input type="checkbox" id="${task.id}" ${task.done ? 'checked' : ''}
    //     class="custom-checkbox">
    //     <label for="${task.id}">${task.text}</label>
    //     <img src="" class="delete" data-id="${task.id}" > ';
    
    //     taskList.append(li);
    // }
    
    // API call to fetch the data
    async function fetchTodos(){
        // Get request
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( function (response)
        {
    
            return response.json();
        }).then( function (data){
            tasks = data.slice(0, 10);
            renderList();
    
        })
        .catch(function (error) {
            console.log('error', error);
        })
    
    
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await response.json();
            tasks = data.slice(0, 10);
            renderList();
    
        } catch (error) {
            console.log(error);
    
        }
    
    }
    
    function addTaskToDOM(task) {
        const li =  document.createElement('li');
    
        li.innerHTML = `
                <input type="checkbox" id="${task.id}" ${task.completed ? 'checked' : ''} class="custom-checkbox">
                <label for="${task.id}">${task.title}</label>
                <img src="./Javascript/delete.png" class="delete" data-id="${task.id}">
        `;
    
        taskList.append(li);
    }
    
    function renderList () {
        taskList.innerHTML = ' ';
        for (let i = 0; i < tasks.length; i++){
            addTaskToDOM(tasks[i]);
        }
        tasksCounter.innerHTML = tasks.length;
    }
    
    function toggleTask (taskId) {
        console.log(taskId);
        const task = tasks.filter(function (task){
            return task.id == Number(taskId)
        });
        if (task.length > 0){
            const currentTask = task[0];
            currentTask.completed = !currentTask.completed;
            renderList();
            showNotification('Task toggled successfully');
            return;
    
        }
    
        showNotification('Task  not toggled successfully');
    }
    
    function deleteTask (taskId) {
        const newTasks = tasks.filter(function (task){
            return task.id != Number(taskId)
        })
        tasks = newTasks;
        renderList();
        showNotification('Task deleted successfully');
    }
    
    function addTask (task) {
        if (task) {
    
        //     fetch('https://jsonplaceholder.typicode.com/todos',{
        //         method: 'POST',
        //         headers: {
        //         'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(task),
        //     }).then(function (response){
        //         return response.json();
        //     }).then( function (data){
        //     console.log(data)
        //     tasks.push(task);
        //     renderList();
        //     showNotification('Task added successfully');
        //     return;
        // })
        // .catch(function (error) {
        //     console.log('error', error);
        // })
            tasks.push(task);
            renderList();
            showNotification('Task added successfully');
            return;
        }
        showNotification('Task not added successfully');
    }
    
    function showNotification(text) {
        alert(text);
    }
    
    
    function handleInputKeypress (e) {
        if(e.key === 'Enter') {
            const text =e.target.value;
            console.log('text', text);
    
            if(!text) {
                showNotification("Task text can not be empty");
                return;
            }
    
            const task = {
                title: text,
                id: Date.now(),
                completed:false
            }
            e.target.value =  "";
            addTask(task);
    
    }
    }
     function handleClickListener(e){
        const target = e.target;
        console.log(target);
    
        if(target.className === 'delete') {
            const taskId = target.dataset.id;
            deleteTask(taskId);
            return;
        }else if (target.className == 'custom-checkbox'){
            const taskId = target.id;
            toggleTask(taskId);
            return;
        }
     }
    function initializeApp (){
    
        fetchTodos();
        addTaskInput.addEventListener('keyup', handleInputKeypress);
        document.addEventListener('click', handleClickListener);
    }
    
    
    initializeApp();
})()






// var promise = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//     reject({ message: "error"});
//     }, 3000);
// });

// promise
//     .then((data) => {
//         console.log(promise);
//     })
//     .catch((error) => {
//         console.log('error', error);
//     });
