import toast from "react-hot-toast";



function emailVerify(error = {}, values) {
  if (!values.email) {
    error.email = toast.error("Email Required");
  } else if (values.email.includes(" ")) {
    error.email = toast.error("Invalid Email");
  }
  return error;
}
