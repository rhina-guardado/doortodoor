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
    'profile': { paramsTuple?: []; params?: {} }
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
    'profile': { paramsTuple?: []; params?: {} }
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
    'profile': { paramsTuple?: []; params?: {} }
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