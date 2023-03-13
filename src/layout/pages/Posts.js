import { useState, useEffect } from "react";
import { Constants } from "../../constants";
import useAxios from "../../hooks/useAxios";
const { BASE_API_URL } = Constants;

export const Posts = () => {
  const [data, error, loading, updateData] = useAxios(`${BASE_API_URL}/posts`);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(10);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const maximumPages = Math.ceil(data.length / postsPerPage);
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);

  if (error) {
    return <h3>Error: {error.message}</h3>;
  }
  if (loading) {
    return <h3>Loading...</h3>;
  }
  const handleClick = (e) => {
    const { step } = e.target.dataset;
    console.log(typeof step);
    if (
      (currentPage === 1 && step > 0) ||
      (currentPage === maximumPages && step < 0) ||
      (currentPage > 1 && currentPage < maximumPages)
    ) {
      setCurrentPage(currentPage + Number(step));
    }
  };
 /*  const handleDelete = (e) => {
    const deletedID = Number(e.target.dataset.id);
    const deletedIndex = currentPosts.findIndex(item => {
        return item.id === deletedID
    });
  currentPosts.splice(deletedIndex, 1)

  }  */
  const postsList = currentPosts.map((post) => (
    <li
      key={post.id}
      className=" border-solid border-2 border-blue-300 p-3 m-2 flex justify-between"
    >
     <div>
      <h4 className="mb-1 text-lg text-blue-600">{post.title}</h4>
      <p className="text-sm">{post.body}</p>
      </div>
     {/*  <button onClick={handleDelete} data-id={post.id}
       className="bg-red-500 hover:bg-red-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white">DELETE</button> */}
    </li>
  ));




  return (
    <>
      <h1>Posts</h1>
      <button
        onClick={updateData}
        className="bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white"
      >
        Reload Data!
      </button>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <ul>{postsList}</ul>
          <button
            onClick={handleClick}
            data-step={-1}
            className={
              (currentPage === 1
                ? "bg-slate-500 "
                : "bg-sky-500 hover:bg-sky-700 cursor-pointer ") +
              "px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white m-2"
            }
            disabled={currentPage === 1}
          >
            ←
          </button>
          <span>
            Page {currentPage} of {maximumPages}
          </span>
          <button
            onClick={handleClick}
            data-step={1}
            disabled={currentPage === maximumPages}
            className={
              (currentPage === maximumPages
                ? "bg-slate-500 "
                : "bg-sky-500 hover:bg-sky-700 cursor-pointer ") +
              "px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white m-2"
            }
          >
            →
          </button>
        </>
      )}
    </>
  );
};

//ottenere l'elenco dei post dal server con il link mandato e messo dentro const import.
//renderizzare una tabella che ci fa vedere i post impaginandoli a gruppi di 10. ogni pagina 10 post
//nella tabella una colonna con la possibilità di eliminare uno del post
