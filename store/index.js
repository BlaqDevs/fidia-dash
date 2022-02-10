/* eslint-disable eol-last */
/* eslint-disable no-new */
/* eslint-disable indent */

import Vuex from 'vuex'
import nav from './modules/nav'
import table from './modules/table'

const createStore = () => {
    return new Vuex.Store({
        // state: {
        //     navList1: ['Home', 'Dashboard', 'Projects', 'Tasks', 'Reporting', 'Users'],
        //     name: 'Blaq'
        // },
        // getters: {
        //     list1: state => state.navList1,
        //     name: state => state.name
        // },
        modules: {
            nav,
            table
        }
    })
}

export default createStore