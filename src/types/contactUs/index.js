import * as Yup from "yup";

export const contactSchema = Yup.object().shape({
    name: Yup.string()
        .required("This field is required.")
        .min(3, "Name must be at least 3 characters")
        .trim(),

    email: Yup.string()
        .required("This field is required.")
        .email("Invalid email format."),

    message: Yup.string()
        .required("This field is required.")
        .min(10, "Message must be at least 10 characters")
        .trim(),
});