import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'home': { paramsTuple?: []; params?: {} }
    'register': { paramsTuple?: []; params?: {} }
    'log_in': { paramsTuple?: []; params?: {} }
    'agencias': { paramsTuple?: []; params?: {} }
    'welcome': { paramsTuple?: []; params?: {} }
    'chat': { paramsTuple?: []; params?: {} }
    'track': { paramsTuple?: []; params?: {} }
    'profile': { paramsTuple?: []; params?: {} }
    'AY': { paramsTuple?: []; params?: {} }
    'ConectExpress': { paramsTuple?: []; params?: {} }
    'GlobalBox': { paramsTuple?: []; params?: {} }
    'globalbox': { paramsTuple?: []; params?: {} }
    'Fidix': { paramsTuple?: []; params?: {} }
    'CargoRapido': { paramsTuple?: []; params?: {} }
    'Enviomundo': { paramsTuple?: []; params?: {} }
    'comparator': { paramsTuple?: []; params?: {} }
    'courierprofile': { paramsTuple?: []; params?: {} }
    'suscription': { paramsTuple?: []; params?: {} }
    'encomendistas': { paramsTuple?: []; params?: {} }
    'advice1': { paramsTuple?: []; params?: {} }
    'advice2': { paramsTuple?: []; params?: {} }
    'signup': { paramsTuple?: []; params?: {} }
    'new_account.store': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
    'session.store': { paramsTuple?: []; params?: {} }
    'session.destroy': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'home': { paramsTuple?: []; params?: {} }
    'register': { paramsTuple?: []; params?: {} }
    'log_in': { paramsTuple?: []; params?: {} }
    'agencias': { paramsTuple?: []; params?: {} }
    'welcome': { paramsTuple?: []; params?: {} }
    'chat': { paramsTuple?: []; params?: {} }
    'track': { paramsTuple?: []; params?: {} }
    'profile': { paramsTuple?: []; params?: {} }
    'AY': { paramsTuple?: []; params?: {} }
    'ConectExpress': { paramsTuple?: []; params?: {} }
    'GlobalBox': { paramsTuple?: []; params?: {} }
    'globalbox': { paramsTuple?: []; params?: {} }
    'Fidix': { paramsTuple?: []; params?: {} }
    'CargoRapido': { paramsTuple?: []; params?: {} }
    'Enviomundo': { paramsTuple?: []; params?: {} }
    'comparator': { paramsTuple?: []; params?: {} }
    'courierprofile': { paramsTuple?: []; params?: {} }
    'suscription': { paramsTuple?: []; params?: {} }
    'encomendistas': { paramsTuple?: []; params?: {} }
    'advice1': { paramsTuple?: []; params?: {} }
    'advice2': { paramsTuple?: []; params?: {} }
    'signup': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
  }
  HEAD: {
    'home': { paramsTuple?: []; params?: {} }
    'register': { paramsTuple?: []; params?: {} }
    'log_in': { paramsTuple?: []; params?: {} }
    'agencias': { paramsTuple?: []; params?: {} }
    'welcome': { paramsTuple?: []; params?: {} }
    'chat': { paramsTuple?: []; params?: {} }
    'track': { paramsTuple?: []; params?: {} }
    'profile': { paramsTuple?: []; params?: {} }
    'AY': { paramsTuple?: []; params?: {} }
    'ConectExpress': { paramsTuple?: []; params?: {} }
    'GlobalBox': { paramsTuple?: []; params?: {} }
    'globalbox': { paramsTuple?: []; params?: {} }
    'Fidix': { paramsTuple?: []; params?: {} }
    'CargoRapido': { paramsTuple?: []; params?: {} }
    'Enviomundo': { paramsTuple?: []; params?: {} }
    'comparator': { paramsTuple?: []; params?: {} }
    'courierprofile': { paramsTuple?: []; params?: {} }
    'suscription': { paramsTuple?: []; params?: {} }
    'encomendistas': { paramsTuple?: []; params?: {} }
    'advice1': { paramsTuple?: []; params?: {} }
    'advice2': { paramsTuple?: []; params?: {} }
    'signup': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
  }
  POST: {
    'new_account.store': { paramsTuple?: []; params?: {} }
    'session.store': { paramsTuple?: []; params?: {} }
    'session.destroy': { paramsTuple?: []; params?: {} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}