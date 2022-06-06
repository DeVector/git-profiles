import React, { useEffect, useState } from "react";
import useGit from "../../hooks/git-hooks";
import RepositoryItem from "../repository-item";
import * as S from "./styled";

const Repositories = () => {
    const { gitState, getUserRepo, getUserStarred } = useGit();
    const [ hasUserForSearchrepo, setHasUserForSearchrepo ] = useState(false);

    useEffect(() => {
        if (gitState.user.login) {
            getUserRepo(gitState.user.login);
            getUserStarred(gitState.user.login);
        }
        setHasUserForSearchrepo(gitState.repositories);

    }, [gitState.user.login]);

    return (
        <>
            {hasUserForSearchrepo ? (
                <S.WrapperTabs
                    selectedTabClassName="is-selected"
                    selectedTabPanelClassName="is-selected"
                >
                    <S.WrapperTabList>
                        <S.WrapperTab>Repositories</S.WrapperTab>
                        <S.WrapperTab>Starred</S.WrapperTab>
                    </S.WrapperTabList>

                    <S.WrapperTabPanel>
                        <S.WrapperList>
                            {gitState.repositories.map((item) => (

                                <RepositoryItem
                                    key={item.id}
                                    name={item.name}
                                    linkToRepo={item.full_name}
                                    fullName={item.full_name}
                                />

                            ))}
                        </S.WrapperList>
                    </S.WrapperTabPanel>

                    <S.WrapperTabPanel>
                        <S.WrapperList>
                            {gitState.starred.map((item) => (
                                <RepositoryItem 
                                    key={item.id}
                                    name={item.name}
                                    linkToRepo={item.html_url}
                                    fullName={item.full_name}
                                />
                            ))}
                        </S.WrapperList>
                    </S.WrapperTabPanel>
                </S.WrapperTabs>
            ) : (
                <></>
            )}
        </>
    );
};

export default Repositories;