import React, { useState } from "react";
import * as S from "./styled";
import useGit from "../../hooks/git-hooks";

const Header = () => {
    const { getUser } = useGit();
    const [usernameForSearch, setUsernameForSearch] = useState();

    const submitGetUser = () => {
        if(!usernameForSearch) return;
        return getUser(usernameForSearch);
    };

    return (
        <header>
            <S.Wrapper>
                <input
                    type="text"
                    placeholder="Digite o usuario do git aqui"
                    onChange={(event) => setUsernameForSearch(event.target.value)}
                />
                <button type="submit" onClick={submitGetUser}>
                    <span>Buscar</span>
                </button>
            </S.Wrapper>
        </header>
    );
};

export default Header;