import { useContextAuth } from "../../context/AuthContext";


const Home = () => {
  const { newPost } = useContextAuth()

  return (
    <>
      <h1 className="font-bold text-center text-4xl">Todos os posts</h1>
      {newPost.length == 0 && (<h1>Nenhum Post</h1>)}
      <div className="grid grid-cols-3 gap-x-20 gap-y-10 mt-12">
        {newPost.map((post) =>
          <div key={post.titulo} className="text-center pt-5">
            <h1 className="font-bold text-3xl">{post.titulo}</h1>
            <img src={post.url} alt={post.titulo} className="w-[50%] mx-auto" />
            <div className="flex justify-center gap-2 mt-5">
              {post.tags.split(",").map((tag) =>
                <p className="font-bold">#{tag}</p>
              )}
            </div>
            <h3 className="mt-3">{post.descricao}</h3>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
