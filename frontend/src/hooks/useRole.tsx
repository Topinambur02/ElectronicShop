import UserStore from "../store/UserStore";

const useRole = (userStore: UserStore | undefined) => {

    if (!userStore) {
        return '';
    }

    return userStore.user.role;
}

export default useRole;