import React, { useContext, useEffect, useState } from "react";
import { GithubContext } from "../Context/GithubContext";

interface repoDetailMainProps {
  id: number;
}
const RepoDetailMain: React.FC<repoDetailMainProps> = ({ id }) => {
  const { repos } = useContext(GithubContext)!;
  const [repo, setRepo] = useState<any>();

  useEffect(() => {
    const repo = repos?.find((e: any) => {
      return e.id == id;
    })!;

    setRepo(repo);
  }, []);

  console.log(repo);

  return (
    <div className="repo-detail-main">
      {repo ? <p>{repo.description}</p> : <p>Loading</p>}
    </div>
  );
};

export default RepoDetailMain;
