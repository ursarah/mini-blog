import React, { useEffect } from 'react';
import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

function Cadastro() {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const { createUser, error: authError, loading } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');

    const user = {
      displayName,
      email,
      password,
    };

    if (password !== confirmPassword) {
      setError('As senhas precisam ser iguais');
      return;
    }

    const res = await createUser(user);
  };

  // aqui ele ta monitorando o authError, se ele der aquelas mensagens no console muda aqui
  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <main className="min-h-[60vh] mb-[5em]">
      <div className="text-center my-10">
        <h1 className="text-[30px] font-bold">Cadastre-se para postar</h1>
        <p className="my-5">Crie seu usuário e compartilhe suas histórias</p>
      </div>
      <form className="max-w-[40%] my-0 mx-auto" onSubmit={handleSubmit}>
        <label className="flex flex-col mb-1">
          <span className="my-[.3em] font-bold text-left">Nome:</span>
          <input
            className="bg-[#f6fcff] py-[.8em] px-2 border-b-[1px] border-b-solid border-b-black focus:outline-none"
            type="text"
            name="name"
            placeholder="Nome do usuario"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            required
          />
        </label>
        <label className="flex flex-col mb-1">
          <span className="my-[.3em] font-bold text-left">E-mail:</span>
          <input
            className="bg-[#f6fcff] py-[.8em] px-2 border-b-[1px] border-b-solid border-b-black focus:outline-none"
            type="text"
            name="email"
            placeholder="Email do usuario"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="flex flex-col mb-1">
          <span className="my-[.3em] font-bold text-left">Senha:</span>
          <input
            className="bg-[#f6fcff] py-[.8em] px-2 border-b-[1px] border-b-solid border-b-black focus:outline-none"
            type="password"
            name="senha"
            placeholder="Senha do usuario"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label className="flex flex-col mb-1">
          <span className="my-[.3em] font-bold text-left">Confirmar senha:</span>
          <input
            className="bg-[#f6fcff] py-[.8em] px-2 border-b-[1px] border-b-solid border-b-black focus:outline-none"
            type="password"
            name="confirmeSenha"
            placeholder="Confirme sua senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        {loading ? (
          <button className="btn rounded-[10px] w-full" disabled>
            Aguarde...
          </button>
        ) : (
          <button className="btn rounded-[10px] w-full">Cadastrar</button>
        )}
        {error && (
          <p className="text-[#721c24] bg-[#f8d7da] border-1 border-solid border-black p-2 text-center mt-8 rounded-[5px]">
            {error}
          </p>
        )}
      </form>
    </main>
  );
}

export default Cadastro;
