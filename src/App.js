import React from "react";
import Layout from "./components/layout";
import useGit from "./hooks/git-hooks";
import Profile from "./components/profile";
import Repositories from "./components/repositories";
import NoSearch from "./components/no-search";

function App() {

  const { gitState } = useGit();

  return (
    <Layout>
      {gitState.hasUser ? (
        <>
          {gitState.loading ? (
            <p>Loading</p>
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}
        </>
      ) : (
        <NoSearch />
      )}
    </Layout>
  );
};

export default App;