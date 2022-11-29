/* eslint-disable */
import React from 'react'
import { Navbar } from '../navbar/Navbar'

import './projects.scss'
import openstore from '../../images/openstore.png'
import ouichat from '../../images/ouichat.png'
import ttt from '../../images/ttt.png'

import { Card } from './Card'
import { Buttons } from './Buttons'

import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'

export function Projects() {
  const primary = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0, transition: { duration: 1 } }
  }
  return (
    <AnimatePresence>
      <motion.div
        className='container pro_primary'
        variants={primary}
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <div className='pro_navbar'>
          <Navbar home={true} about={true} projects={false} skills={true} />
        </div>

        <div className='pro_header'>Projects</div>
        <div className='container pro_content'>
          <p className='intro'>
            During education in General Assemble bootcamp, I have build two projects and
            participated in one group project. Applied technologies that I have learned in school
            and in self-edcauted online training lessons.
          </p>

          <div className='container pro_content'>
            <div className='container-fluid op'>
              <div>
                Application offers users to list their product for sale. Users are able to do CRUD
                apis to the server and see realtime updates. App has been inspired by offer apps and
                built using React and React Routing, Rest APIs, and Framer-Motion library for smooth
                dropdowns in the client-side. ExpressJS, Node JS and MongoDB ATLASS +Mongoose have
                been used on the server side. Planning to use Socket.IO to have activation of
                relationship between seller and buyers.
                <div className='op_buttons_div'>
                  <Buttons demo_link={'https://hanif101.github.io/open-store/'} github_link={'https://github.com/hanif101/open-store'} />
                </div>
              </div>

              <div className='container card_wrapper'>
                <Card
                  image={openstore}
                  title={'Open Store'}
                />
              </div>
            </div>
            <div className='och'>
              <div>
                This project was a team project that I have worked on with my 4 other classmates.
                Application allows users to process simple user functionality like a signup or
                create an account. Project inspired by Slack application. Users are able to join
                rooms and share ideas. Users are also able to create rooms and send invitations to
                others. I had done user functionalities in the backend Express js and front end
                design routes React library.
                <div className='och_buttons_div'>
                  <Buttons demo_link={'https://ga-git-good.github.io/chat-app/'} github_link={'https://github.com/ga-git-good/chat-app'} />
                </div>
              </div>

              <div className='card_wrapper'>
                <Card image={ouichat} title={'Oui Chat'}/>
              </div>
            </div>
            <div className='ttt'>
              <div>
                The first project I completed at GA was a tic-tac-toe game. The goal for this
                project was to create a functional tic-tac-toe game from scratch using new tools we
                learned before hand. Players are able to start a fresh game, keep track of games,
                change their password, and sign out of the application. Sematic HTML5, CSS3 &
                Bootstrap and JQuery technologoes used.
                <div className='ttt_buttons_div'>
                  <Buttons demo_link={'https://hanif101.github.io/tic-tac-toe/'} github_link={'https://github.com/hanif101/tic-tac-toe'} />
                </div>
              </div>
              <div className='card_wrapper'>
                <Card image={ttt} title={'Tic Tac Toe'}/>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

{
  /* <img src="..." class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div> */
}
