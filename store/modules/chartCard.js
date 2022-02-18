/* eslint-disable eol-last */
/* eslint-disable indent */
const state = {
    card: [{ title: '', number: '', percentage: '', arrow: '', chart: '' }]
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