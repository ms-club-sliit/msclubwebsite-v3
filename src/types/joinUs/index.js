import * as Yup from "yup";

export const joinUsSchema1 = Yup.object().shape({
    studentId: Yup.string()
        .required("This field is required.")
        .matches(/^[A-Z]{2}\d{8}$/i, "Student ID should be in format: IT21012345"),
    fullName: Yup.string()
        .required("This field is required.")
        .trim(),
    email: Yup.string()
        .required("This field is required.")
        .email("Invalid email format."),
    mobile: Yup.string()
        .required("This field is required.")
        .matches(/^\d{10}$/, "Enter a 10-digit mobile number."),
    academicYear: Yup.string()
        .required("This field is required."),
    selfIntroduction: Yup.string()
        .required("This field is required.")
        .trim(),
});

export const joinUsSchema2 = Yup.object().shape({
    whyJoin: Yup.string()
        .required("This field is required.")
        .trim(),
    linkedIn: Yup.string()
        .url("Please enter a valid URL.")
        .nullable()
        .transform((value) => value === "" ? null : value),
    github: Yup.string()
        .url("Please enter a valid URL.")
        .nullable()
        .transform((value) => value === "" ? null : value),
    blogPage: Yup.string()
        .url("Please enter a valid URL.")
        .nullable()
        .transform((value) => value === "" ? null : value),
    volunteeringExperience: Yup.string(),
    challengeSolved: Yup.string(),
    futureVision: Yup.string(),
    skills: Yup.string(),
});