import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="text-center flex-col items-center">
      <h1 className="text-[30px] font-bold mt-10">
        Sobre o Mini <span>Blog</span>
      </h1>
      <p className="text-[#aaa] my-[2em]">
        Este projeto é um Blog feito em React e Firebase no back-end.
      </p>
      <Link to="/posts/newpost" className="btn py-[10px] px-[15px] rounded-[10px]">
        Criar post
      </Link>
    </div>
  );
}

export default About;
