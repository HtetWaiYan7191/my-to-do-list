const tasks = document.getElementById('goals');
const addBtn = document.getElementById('add-btn');
const clearBtn = document.getElementById('clear-btn');
const taskContainer = document.querySelector('.tasks-container');

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
  tasks.value = '';
  document.querySelector('.small-text').classList.remove('show-small-text');
  const tasksWrapper = document.querySelector('.tasks-wrapper');
  const correctBtn = document.querySelectorAll('.correct-btn');
  const deleteBtn = document.querySelectorAll('.delete-btn');
  correctBtn.forEach((btn) => {
      btn.addEventListener('click', (e)=>{
        let parent = e.target.parentNode;
        let doubleParent = parent.parentNode;
        let tripleParent = doubleParent.parentNode;
         parent.classList.toggle('done');
         tripleParent.firstElementChild.classList.toggle('complete-task');
      });
  });

  deleteBtn.forEach((btn) => {
    btn.addEventListener('click', (e)=>{
        console.log(this.parentNode)
    })
  })
});
