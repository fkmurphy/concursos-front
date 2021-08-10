import { object, string, number, date, ref} from 'yup';
import moment from "moment";


const requiredMessage = 'Este campo es requerido.';
export const schema = object({
        name: string().required(requiredMessage).min(5, 'Debe contener al menos 5 caracteres'),
        qty: number('Debe ser un entero').required(requiredMessage),
        departament_id: number('Debe ser un entero').required(requiredMessage),
        course_id: number('Debe ser un entero').required(requiredMessage),
        career_id: number('Debe ser un entero').required(requiredMessage),
        working_day_type_id: string('Debe ser un valor válido').required(requiredMessage),
        remuneration_type_id: string('Debe ser un valor válido').required(requiredMessage),
        category_id: string('Debe ser un valor válido').required(requiredMessage),
        category_type_id: string('Debe ser un valor válido').required(requiredMessage),
        end_date: date().required(requiredMessage).min(ref('init_date'), 'Revise la fecha'),
        init_date: date().required(requiredMessage).test("is-greater", "Debe ser de hoy en adelante", function(value) {
                return moment().startOf('day').isSameOrBefore(moment(value))
        }),
        enrollment_date_end: date().required(requiredMessage)
            .min(ref('init_date'), 'Revise la fecha')
            .max(ref('end_date'), 'Revise la fecha'),
});