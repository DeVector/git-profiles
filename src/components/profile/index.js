import React from "react";
import useGit from "../../hooks/git-hooks";
import * as S from "./styled";

const Profile = () => {
    const { gitState } = useGit();

    return(
        <S.Wrapper>
            <S.WrapperImage src={gitState.user.avatar} alt="Avatar of user" />
            <S.WrapperInfoUser>
                <div>
                    <h1>{gitState.user.name}</h1>
                    <S.WrapperUserGeneric>
                        <h3>Username:</h3>
                        <a
                            href={gitState.user.html_url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {gitState.user.login}
                        </a>
                    </S.WrapperUserGeneric>
                    <S.WrapperUserGeneric>
                        <h3>Company:</h3>
                        <span>{gitState.user.company}</span>
                    </S.WrapperUserGeneric>
                    <S.WrapperUserGeneric>
                        <h3>Location:</h3>
                        <span>{gitState.user.location}</span>
                    </S.WrapperUserGeneric>
                    <S.WrapperUserGeneric>
                        <h3>Blog:</h3>
                        <a href={gitState.user.blog} target="_blank" rel="noreferrer">{gitState.user.blog}</a>
                    </S.WrapperUserGeneric>
                </div>
                <S.WrapperStatusCount>
                    <div>
                        <h4>Followers</h4>
                        <span> {gitState.user.followers} </span>
                    </div>
                    <div>
                        <h4>Following</h4>
                        <span> {gitState.user.following} </span>
                    </div>
                    <div>
                        <h4>Gits</h4>
                        <span> {gitState.user.public_gists} </span>
                    </div>
                    <div>
                        <h4>Repositories</h4>
                        <span> {gitState.user.public_repos} </span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfoUser>
        </S.Wrapper>
    );
};

export default Profile;