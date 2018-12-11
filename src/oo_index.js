
document.addEventListener("DOMContentLoaded", function domContent(){
  const taskList = new TaskList();
  const taskForm =  document.getElementById('create-task-form')
    console.log(taskForm)
    taskForm.addEventListener('submit', function formSubmitEventHandler(event) {
      event.preventDefault()
        console.log(event.target)
      const userInputField = event.target.querySelector('#new-task-description')
       console.log(userInputField)
      const userInputString = userInputField.value
        console.log(userInputString)
      const commentPTag = document.createElement('li')
        console.log(commentPTag)
        commentPTag.textContent = userInputString
       const list = document.querySelector('#list') 
        list.appendChild(commentPTag)  
    })
  
  })