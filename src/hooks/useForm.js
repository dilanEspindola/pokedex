import { useState } from 'react';

export const useForm = data => {
  const [dataForm, setDataForm] = useState(data);

  const handleChange = e => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  return { dataForm, handleChange };
};
