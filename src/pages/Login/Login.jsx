import React, { useEffect } from 'react';
import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { login, error: authError, loading } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');

    const user = {
      email,
      password,
    };

    const res = await login(user);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <main className="min-h-[60vh] mb-[5em]">
      <div className="text-center">
        <h1 className="text-[30px] font-bold mt-10">Entrar</h1>
        <p className="text-[#aaa] my-[2em]">Faça o login pra poder utilizar.</p>
      </div>
      <form className="max-w-[40%] my-0 mx-auto" onSubmit={handleSubmit}>
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

        {loading ? (
          <button className="btn rounded-[10px] w-full" disabled>
            Aguarde...
          </button>
        ) : (
          <button className="btn rounded-[10px] w-full">Login</button>
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

export default Login;
