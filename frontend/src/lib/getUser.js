export const getuser = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user;
}