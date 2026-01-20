const onFormSubmit = (evt, onSubmit) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  const list = Object.fromEntries(formData.entries());
  onSubmit(list);
};

const populateForm = (formNode, data) => {
  formNode.querySelector('#title').value = data.title;
};

export { onFormSubmit, populateForm };
