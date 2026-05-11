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
router.on('/track').render('pages/track').as('track')
router.on('/profile').render('pages/profile').as('profile')
router.on('/AY').render('pages/AY').as('AY')
router.on('/ConectExpress').render('pages/ConectExpress').as('ConectExpress')
router.on('/GlobalBox').render('pages/GlobalBox').as('GlobalBox')
router.on('/Fidix').render('pages/Fidix').as('Fidix')
router.on('/CargoRapido').render('pages/CargoRapido').as('CargoRapido')
router.on('/Enviomundo').render('pages/Enviomundo').as('Enviomundo')
router.on('/comparator').render('pages/comparator').as('comparator')
router.on('/courierprofile').render('pages/courierprofile').as('courierprofile')
router.on('/suscription').render('pages/suscription').as('suscription')

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
