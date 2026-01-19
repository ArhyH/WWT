const onFormSubmit = (evt, onSubmit) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  const list = Object.fromEntries(formData.entries());
  onSubmit(list);
  console.log(list);
};

const populateForm = (formNode, data) => {
  console.log(data);
  formNode.querySelector('#title').value = data.title;
};

export { onFormSubmit, populateForm };
