import { useContextAuth } from "../../context/AuthContext";


const Home = () => {
  const { newPost } = useContextAuth()
  return (
    <>
      <h1 className="font-bold text-center text-4xl">Todos os posts</h1>
      {newPost.length == 0 && (<h1>Nenhum Post</h1>)}
      {newPost.map((post) =>
        <div>
          <div className="text-center pt-5">
            <h1 className="font-bold text-2xl">{post.titulo}</h1>
            <img src={post.url} alt={post.titulo} />
            <p>{post.tags}</p>
            <h3>{post.descricao}</h3>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
