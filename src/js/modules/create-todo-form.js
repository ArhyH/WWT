const onFormSubmit = (evt, onSubmit) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  const todo = Object.fromEntries(formData.entries());
  onSubmit(todo);
};

const populateForm = (formNode, data) => {
  console.log(data);
  formNode.querySelector('#title').value = data.title;
  formNode.querySelector('#description').value = data.description;
  formNode.querySelector('#date').value = data.date;
  formNode.querySelector('#assignee').value = data.assignee;
  const radioButtons = formNode.querySelectorAll('[name="priority"]');
  const currentRadio = [...radioButtons].find(
    (element) => element.value === data.priority
  );
  currentRadio.checked = true;
};

export { onFormSubmit, populateForm };
