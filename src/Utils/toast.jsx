import toast from "react-hot-toast";

export const successNotify = (text) => toast.success(text);
export const errorNotify = (text) => toast.error(text);