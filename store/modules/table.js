/* eslint-disable eol-last */
/* eslint-disable indent */
const state = {
    tableHead: ['Company', 'License use', 'Status', 'Users', 'About'],
    tableRow: [{
        selected: 'jnkk',
        logo: 'jnjk',
        name: 'nklnk',
        site: '',
        licenseUse: '',
        status: '',
        users: '',
        aboutTitle: '',
        aboutContent: ''

    }]
}

const getters = {
    tableHead: state => state.tableHead,
    tableRow: state => state.tableRow
}

export default {
    state,
    getters
}