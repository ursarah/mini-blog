import React, { useState } from 'react';
import { useContextAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const NewPost = () => {
  const [titulo, setTitulo] = useState("")
  const [descricao, setDescricao] = useState("")
  const [tags, setTags] = useState("")
  const [url, setUrl] = useState("")
  const { newPost, setNewPost } = useContextAuth()
  const navigate = useNavigate()

  const handleSubmitNewPost = (e) => {
    e.preventDefault()
    if (titulo == "" && descricao == "" && tags == "" && url == "") return
    const id = Math.floor(Math.random() * 9999) + 1

    if (newPost.length === 0) {
      setNewPost([{ id, titulo, descricao, tags, url }])
    } else {
      setNewPost([...newPost, { id, titulo, descricao, tags, url }])
    }

    navigate("/")
  }

  return (
    <form className='max-w-[50%] mx-auto'>
      <div className="flex flex-col mt-5">
        <span className="my-[.3em] font-bold text-left">Titulo do post:</span>
        <input
          className="bg-[#f6fcff] p-2 border-b-1 border-b-solid border-b-black focus:outline-none"
          type="text"
          name="titulo"
          placeholder="Novo post"
          onChange={(e) => setTitulo(e.target.value)}
        />
      </div>
      <div className="flex flex-col mt-5">
        <span className="my-[.3em] font-bold text-left">Descrição:</span>
        <textarea
          className="bg-[#f6fcff] p-2 border-b-1 border-b-solid border-b-black focus:outline-none"
          name="descricao"
          placeholder="Descrição"
          onChange={(e) => setDescricao(e.target.value)}
        />
      </div>
      <div className="flex flex-col mt-5">
        <span className="my-[.3em] font-bold text-left">Tags:</span>
        <input
          className="bg-[#f6fcff] p-2 border-b-1 border-b-solid border-b-black focus:outline-none"
          type="text"
          name="tags"
          placeholder="Tags, separe com virgula"
          onChange={(e) => setTags(e.target.value)}
        />
      </div>
      <div className="flex flex-col mt-5">
        <span className="my-[.3em] font-bold text-left">Url da imagem:</span>
        <input
          className="bg-[#f6fcff] p-2 border-b-1 border-b-solid border-b-black focus:outline-none"
          type="text"
          name="link"
          placeholder="Url"
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <button className="btn rounded-[10px] w-full cursor-pointer" onClick={handleSubmitNewPost}>
        Criar post
      </button>
    </form>
  );
}

export default NewPost
