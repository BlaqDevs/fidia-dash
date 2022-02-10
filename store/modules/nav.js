/* eslint-disable eol-last */
/* eslint-disable indent */
const state = {
    navList1: ['Home', 'Dashboard', 'Projects', 'Tasks', 'Reporting', 'Users'],
    navList2: ['Overview', 'Notifications', 'Analytics', 'Saved reports', 'Trade history', 'User reports']
}

const getters = {
    list1: state => state.navList1,
    list2: state => state.navList2
}

export default {
    state,
    getters
}