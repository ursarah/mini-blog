import React from "react";
import { useState, useEffect } from "react";

function Cadastro() {
  return (
    <main className="min-h-[60vh] mb-[5em]">
      <h1>Cadastro</h1>
      <form className="max-w-[40%] my-0 mx-auto">
        <label className="flex flex-col mb-1">
          <span className="mb-[.3em] font-bold text-left">Nome:</span>
          <input
            className="border-none py-[.8em] px-0"
            type="text"
            name="name"
            placeholder="Nome do usuario"
            required
          />
        </label>
        <label className="flex flex-col mb-1">
          <span className="mb-[.3em] font-bold text-left">E-mail:</span>
          <input
            className="border-none py-[.8em] px-0"
            type="text"
            name="email"
            placeholder="Email do usuario"
            required
          />
        </label>
        <label className="flex flex-col mb-1">
          <span className="mb-[.3em] font-bold text-left">Senha:</span>
          <input
            className="border-none py-[.8em] px-0"
            type="password"
            name="senha"
            placeholder="Senha do usuario"
            required
          />
        </label>
        <label className="flex flex-col mb-1">
          <span className="mb-[.3em] font-bold text-left">Confirmar senha:</span>
          <input
            className="border-none py-[.8em] px-0"
            type="password"
            name="confirmeSenha"
            placeholder="Confirme sua senha"
            required
          />
        </label>
        <button>Cadastrar</button>
      </form>
    </main>
  );
}

export default Cadastro;
