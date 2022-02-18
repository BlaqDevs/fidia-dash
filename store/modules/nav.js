/* eslint-disable eol-last */
/* eslint-disable indent */
const state = {
    navList1: [{ name: 'Home' }, { name: 'Dashboard', bg: 'background:#F9FAFB' }, { name: 'Projects' }, { name: 'Tasks' }, { name: 'Reporting' }, { name: 'Users' }],
    navList2: [{ name: 'Overview', bg: 'background:#F9FAFB' },
        { name: 'Notifications' },
        { name: 'Analytics' },
        { name: 'Saved reports' },
        { name: 'Trade history' },
        { name: 'User reports' }
    ],
    avatar: './assets/Avatar.png'
}

const getters = {
    list1: state => state.navList1,
    list2: state => state.navList2,
    avatar: state => state.avatar
}

export default {
    state,
    getters
}