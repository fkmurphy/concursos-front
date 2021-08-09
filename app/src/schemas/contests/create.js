import { object, string } from 'yup';

export const schema = object({
        name: string().required().min(10, 'DEbe teer qlweqkkw')
});