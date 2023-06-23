import * as Yup from 'yup';

export const validationSchema = Yup.object({
  name: Yup.string().required('❗Task Name is required'),
  description: Yup.string().required('❗Task Description is required'),
  duedate: Yup.date().required('❗Due Date is required'),
});