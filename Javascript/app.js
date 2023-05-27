const tasks = document.getElementById('goals');
const addBtn = document.getElementById('add-btn');
const clearBtn = document.getElementById('clear-btn');
const taskContainer = document.querySelector('.tasks-container');
const taskArr = [];
const viewBtn = document.querySelector('.view-goals');
const modalContainer = document.getElementById('modal-container');
const modalCrossBtn = document.querySelector('.modal-cross-btn');
const overlay = document.getElementById('overlay');
const dailyTaskContainer = document.getElementById('daily-task');

// Store data In Local Storage

function storeLocalStorage(tasksValue) {
  taskArr.push(tasksValue);
  const storeData = {
    tasks: taskArr,
  };
  localStorage.setItem('dailyTask', JSON.stringify(storeData));
// storeData.tasks.forEach((task) => {
//   console.log(task)
// })
}
let getData = JSON.parse(localStorage.getItem('dailyTask'));

addBtn.addEventListener('click', () => {
  if (tasks.value === '') {
    document.querySelector('.small-text').classList.add('show-small-text');
    return;
  }
  taskContainer.innerHTML += ` <div class="tasks-wrapper row d-flex justify-content-between align-items-center my-3">
    <div class="text col-8 ">
        ${tasks.value}
    </div>
    <div class="col-4 icons d-flex justify-content-around">
        <button class="correct-btn"><i class="fa-solid fa-check"></i></button>
        <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
    </div>
</div>`;

  document.querySelector('.small-text').classList.remove('show-small-text');
  //   const tasksWrapper = document.querySelector('.tasks-wrapper');
  const correctBtn = document.querySelectorAll('.correct-btn');
  const deleteBtn = document.querySelectorAll('.delete-btn');
  correctBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const parent = e.target.parentNode;
      const doubleParent = parent.parentNode;
      const tripleParent = doubleParent.parentNode;
      parent.classList.toggle('done');
      tripleParent.firstElementChild.classList.toggle('complete-task');
    });
  });

  function removeTask() {
    const parent = this.parentNode;
    parent.parentNode.remove();
  }

  deleteBtn.forEach((btn) => {
    btn.addEventListener('click', removeTask);
  });

  storeLocalStorage(tasks.value);
  tasks.value = '';
});



clearBtn.addEventListener('click', () => {
  taskContainer.innerHTML = '';
  localStorage.clear();
  getData = JSON.parse(localStorage.getItem('dailyTask'));
  taskArr.length = 0;
});


viewBtn.addEventListener('click', () => {
  modalContainer.classList.toggle('showDisplay');
  overlay.classList.toggle('active');
  getData = JSON.parse(localStorage.getItem('dailyTask'));
  showModal();
});

function showModal() {

  if(getData) {
    getData.tasks.forEach((task) => {
      const node = document.createElement('li');
      node.textContent = `${task}`;
      const li = `
                     <li>${task}</li>
                `;
  
      dailyTaskContainer.appendChild(node)
    })
  }
  else {

   dailyTaskContainer.innerHTML = `<li>There is no tasks for today yet</li>`;
    return ;
  }
}

modalCrossBtn.addEventListener('click', () => {  
 modalContainer.classList.toggle('showDisplay');
 overlay.classList.toggle('active');
 dailyTaskContainer.innerHTML = ``;
});
