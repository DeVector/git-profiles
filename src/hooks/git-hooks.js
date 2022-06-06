import { useContext } from "react";
import { GitContext } from "../providers/git-provider";

const useGit = () => {
    const { gitState, getUser, getUserRepo, getUserStarred } = useContext(
        GitContext
    );

    return { gitState, getUser, getUserRepo, getUserStarred };
};

export default useGit;