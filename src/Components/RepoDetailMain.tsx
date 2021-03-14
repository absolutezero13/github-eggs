import React, { useContext, useEffect, useState } from "react";
import { GithubContext } from "../Context/GithubContext";

interface repoDetailMainProps {
  id: number;
}
const RepoDetailMain: React.FC<repoDetailMainProps> = ({ id }) => {
  const { repos } = useContext(GithubContext)!;
  const { bookmarkedRepos } = useContext(GithubContext)!;
  const [repo, setRepo] = useState<any>();
  const [bookmarkedRepo, setBookmarkedRepo] = useState<any>();
  useEffect(() => {
    const repo = repos?.find((e: any) => {
      return e.id == id;
    })!;
    setRepo(repo);
  }, []);
  useEffect(() => {
    const bookmarkedRepo = bookmarkedRepos?.find((e: any) => {
      return e.id == id;
    })!;
    setBookmarkedRepo(bookmarkedRepo);
  }, []);

  return (
    <div className="repo-detail-main">
      {repo ? (
        <p>{repo.description}</p>
      ) : (
        <p> {bookmarkedRepo && bookmarkedRepo.description} </p>
      )}
    </div>
  );
};

export default RepoDetailMain;
