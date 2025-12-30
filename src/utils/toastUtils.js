import { toast, Bounce } from "react-toastify";

const baseOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
};

const ToastUtils = {
    success: (message, options = {}) =>
        toast.success(message, {
            ...baseOptions,
            transition: Bounce,
            ...options,
        }),

    error: (message, options = {}) =>
        toast.error(message, {
            ...baseOptions,
            transition: Bounce,
            ...options,
        }),

    warn: (message, options = {}) =>
        toast.warn(message, {
            ...baseOptions,
            transition: Bounce,
            ...options,
        }),

    info: (message, options = {}) =>
        toast.info(message, {
            ...baseOptions,
            transition: Bounce,
            ...options,
        }),
};

export default ToastUtils;
