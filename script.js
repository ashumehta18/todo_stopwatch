
        function addTask() {
            let taskInput = document.getElementById("task");
            let taskText = taskInput.value.trim();
            if (taskText === "") return;
            
            let taskList = document.getElementById("task-list");
            let li = document.createElement("li");
            li.innerHTML = `${taskText} <button onclick="removeTask(this)">Remove</button>`;
            taskList.appendChild(li);
            
            taskInput.value = "";
        }

        function removeTask(button) {
            let taskList = document.getElementById("task-list");
            taskList.removeChild(button.parentElement);
        }

        let timer;
        let seconds = 0, minutes = 0, hours = 0;

        function startStopwatch() {
            if (!timer) {
                timer = setInterval(updateTime, 1000);
            }
        }

        function stopStopwatch() {
            clearInterval(timer);
            timer = null;
        }

        function resetStopwatch() {
            clearInterval(timer);
            timer = null;
            seconds = 0;
            minutes = 0;
            hours = 0;
            document.getElementById("time").textContent = "00:00:00";
        }

        function updateTime() {
            seconds++;
            if (seconds == 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
            document.getElementById("time").textContent = 
                (hours < 10 ? "0" + hours : hours) + ":" + 
                (minutes < 10 ? "0" + minutes : minutes) + ":" + 
                (seconds < 10 ? "0" + seconds : seconds);
        }
  
