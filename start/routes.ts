/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import { controllers } from '#generated/controllers'
import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home').as('home')
router.on('/register').render('pages/register').as('register')
router.on('/log_in').render('pages/log_in').as('log_in')
router.on('/agencias').render('pages/agencias').as('agencias')
router.on('/welcome').render('pages/welcome').as('welcome')
router.on('/chat').render('pages/chat').as('chat')
router.on('/profile').render('pages/profile').as('profile')

router
  .group(() => {
    router.get('signup', [controllers.NewAccount, 'create']).as('signup')
    router.post('signup', [controllers.NewAccount, 'store'])

    router.get('login', [controllers.Session, 'create'])
    router.post('login', [controllers.Session, 'store'])
  })
  .use(middleware.guest())

router
  .group(() => {
    router.post('logout', [controllers.Session, 'destroy'])
  })
  .use(middleware.auth())
