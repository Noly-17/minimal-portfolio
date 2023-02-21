import React from 'react';
import './styles.scss';

import { images } from '../../assets';
import { AiOutlineLink } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';

const Projects = () => {
  return (
    <div id="projects">
      <h3 className="text-center bg-primary py-20 text-6xl text-white">
        PROJECTS
      </h3>
      <section className="card-list md:items-center md:justify-center md:pb-32 md:">
        <article className="card" data-aos="fade-right">
          <div className="card-header">
            <img
              src={images.grubmarket}
              className="w-full h-[200px] object-cover"
            />
          </div>
          <div className="author-name">
            <div className="author-name-prefix">Grub Market</div>
          </div>

          <div className="tags flex">
            <a href="https://www.grubmarket.com/hello/">
              <AiOutlineLink size="1rem" />
            </a>
          </div>
        </article>
        <article className="card" data-aos="fade-right">
          <div className="card-header">
            <img src={images.fistx} className="w-full h-[200px] object-cover" />
          </div>
          <div className="author-name">
            <div className="author-name-prefix">First X</div>
          </div>

          <div className="tags flex">
            <a href="https://www.firstx.ai/">
              <AiOutlineLink size="1rem" />
            </a>
          </div>
        </article>

        <article className="card" data-aos="fade-right">
          <div className="card-header">
            <img
              src={images.gmbsite}
              className="w-full h-[200px] object-cover"
            />
          </div>
          <div className="author-name">
            <div className="author-name-prefix">GMB</div>
          </div>

          <div className="tags flex">
            <a href="https://gamemybiz.com/">
              <AiOutlineLink size="1rem" />
            </a>
          </div>
        </article>

        <article className="card" data-aos="fade-right">
          <div className="card-header">
            <img
              src={images.caremob}
              className="w-full h-[200px] object-cover"
            />
          </div>
          <div className="author-name">
            <div className="author-name-prefix">Care-Client</div>
          </div>

          <div className="tags flex">
            <a href="https://github.com/Noly-17/care-Mobile">
              <BsGithub size="1rem" />
            </a>
          </div>
        </article>

        <article className="card" data-aos="fade-right">
          <div className="card-header">
            <img
              src={images.frontida}
              className="w-full h-[200px] object-cover"
            />
          </div>
          <div className="author-name">
            <div className="author-name-prefix">Frontida</div>
          </div>

          <div className="tags flex">
            <a href="#">
              <BsGithub size="1rem" />
            </a>
            <a href="https://frontida-command-center.web.app/">
              <AiOutlineLink size="1rem" />
            </a>
          </div>
        </article>

        <article className="card" data-aos="fade-right">
          <div className="card-header">
            <img src={images.pixa} className="w-full h-[200px] object-cover" />
          </div>
          <div className="author-name">
            <div className="author-name-prefix">Pixabay-app</div>
          </div>

          <div className="tags flex">
            <a href="https://github.com/Noly-17/React-Native-Pixabay">
              <BsGithub size="1rem" />
            </a>
          </div>
        </article>

        <article className="card" data-aos="fade-right">
          <div className="card-header">
            <img src={images.care} className="w-full h-[200px] object-cover" />
          </div>
          <div className="author-name">
            <div className="author-name-prefix">Care-Admin</div>
          </div>

          <div className="tags flex">
            <a href="https://github.com/Noly-17/careSuperAdminWeb">
              <BsGithub size="1rem" />
            </a>
            <a href="care-super-admin.web.app">
              <AiOutlineLink size="1rem" />
            </a>
          </div>
        </article>

        <article className="card" data-aos="fade-right">
          <div className="card-header">
            <img
              src={images.netflix}
              className="w-full h-[200px] object-cover"
            />
          </div>
          <div className="author-name">
            <div className="author-name-prefix">Netflix</div>
          </div>

          <div className="tags flex">
            <a href="https://github.com/Noly-17/netflix-clone-project">
              <BsGithub size="1rem" />
            </a>
            <a href="https://netflix-clone-b9a53.web.app">
              <AiOutlineLink size="1rem" />
            </a>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Projects;
