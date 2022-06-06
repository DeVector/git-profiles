import React, { createContext, useCallback, useState } from "react";
import api from '../service/api';

export const GitContext = createContext({
    loading: false,
    user: {},
    repositories: [],
    starred: [],
});

const GitProvider = ({ children }) => {

    /*Definindo dados a serem salvos de acordo com o retorno da API e configurando para a pagina recarregar com a atualização de dados.*/
    const [gitState, setGitState] = useState({

        hasUser: false,
        loading: false,
        user: {
            id: undefined,
            avatar: undefined,
            login: undefined,
            name: undefined,
            html_url: undefined,
            blog: undefined,
            company: undefined,
            location: undefined,
            followers: 0,
            following: 0,
            public_gists: 0,
            public_repos: 0,
        },
        repositories: [],
        starred: [],

    });

    /*Pegando o usuario da API do git*/
    const getUser = (username) => {

        setGitState((prevState) => ({
            ...prevState,
            loading: !prevState.loading,
        }));

        api
            .get(`users/${username}`)
            .then(({ data }) => {
                setGitState((prevState) => ({
                    ...prevState,
                    hasUser: true,
                    user: {
                        id: data.id,
                        avatar: data.avatar_url,
                        login: data.login,
                        name: data.name,
                        html_url: data.html_url,
                        blog: data.blog,
                        company: data.company,
                        location: data.location,
                        followers: data.followers,
                        following: data.following,
                        public_gists: data.public_gists,
                        public_repos: data.public_repos,
                    },
                }));
            })
            .finally(() => {
                setGitState((prevState) => ({
                    ...prevState,
                    loading: !prevState.loading,
                }));
            });
    };

    /*Pegando os repositorios do usuario pela API do git */
    const getUserRepo = (username) => {
        api.get(`users/${username}/repos`).then(({ data }) => {
            console.log("data: " + JSON.stringify(data));
            setGitState((prevState) => ({
                ...prevState,
                repositories: data,
            }));
        });
    };

    /*Pegando os repositorios favoritos */
    const getUserStarred = (username) => {
        api.get(`users/${username}/starred`).then(({ data }) => {
            console.log("Data: " + JSON.stringify(data));
            setGitState((prevState) => ({
                ...prevState,
                starred: data,
            }));
        });
    };

    const contextValue = {
        gitState,
        getUser: useCallback((username) => getUser(username), []),
        getUserRepo: useCallback((username) => getUserRepo(username), []),
        getUserStarred: useCallback((username) => getUserStarred(username), []),
    };

    return (
        <GitContext.Provider value={contextValue}>
            {children}
        </GitContext.Provider>
    );

};

export default GitProvider;