/* eslint-disable space-before-function-paren */
/* eslint-disable eol-last */
/* eslint-disable indent */
const state = {
    tableHead: [{
        name: 'Company',
        icon: 'mdi-arrow-down'

    }, {
        name: 'License use'
    }, {
        name: 'Status',
        visibility: 'hidden-sm-and-down'
    }, {
        name: 'Users',
        visibility: 'hidden-sm-and-down'
    }, {
        name: 'About',
        visibility: 'hidden-sm-and-down'
    }],
    tableRow: [{
            id: 1,
            selected: true,
            name: 'Catalog',
            site: 'catalogapp.io',
            licenseUse: 65.7,
            status: 'Customer',
            statColor: '#ECFDF3',
            statText: '#027A48',
            users: 'users',
            aboutTitle: 'Content curating app',
            aboutContent: 'Brings all your news into one place',
            logo: '@/assets/avatar1.png'

        },
        {
            id: 2,
            selected: true,
            name: 'Circooles',
            site: 'getcircooles.co',
            licenseUse: 64,
            status: 'Churned',
            statColor: '',
            users: 'users',
            aboutTitle: 'Design software',
            aboutContent: 'Super lightweight design app',
            logo: '../../assets/Avatar2.png'

        },
        {
            id: 3,
            selected: true,
            name: 'Command+R',
            site: 'cmdr.ai',
            licenseUse: 35.42,
            status: 'Customer',
            statColor: '#ECFDF3',
            statText: '#027A48',
            users: 'users',
            aboutTitle: 'Productivity app',
            aboutContent: 'Time management and productivity',
            logo: '../../assets/Avatar3.png'

        },
        {
            id: 4,
            selected: false,
            name: 'Hourglass',
            site: 'hourglass.app',
            licenseUse: 73.37,
            status: 'Customer',
            statColor: '#ECFDF3',
            statText: '#027A48',
            users: 'users',
            aboutTitle: 'Web app integrations',
            aboutContent: 'Connect web apps seamlessly',
            logo: '../../assets/Avatar4.png'

        },
        {
            id: 5,
            selected: false,
            name: 'Layers',
            site: 'getlayers.io',
            licenseUse: 27.83,
            status: 'Churned',
            statColor: '',
            users: 'users',
            aboutTitle: 'Sales CRM',
            aboutContent: 'Web-based sales doc management',
            logo: '../../assets/Avatar5.png'

        },
        {
            id: 6,
            selected: true,
            name: 'Quotient',
            site: 'quotient.co',
            licenseUse: 19.75,
            status: 'Customer',
            statColor: '#ECFDF3',
            statText: '#027A48',
            users: 'users',
            aboutTitle: 'Automation and workflow and workflowutt',
            aboutContent: 'aboTime tracking, invoicing and expensesut',
            logo: '../../assets/Avatar6.png'

        },
        {
            id: 7,
            selected: true,
            name: 'Sisyphus',
            site: 'sisphus.com',
            licenseUse: 43.17,
            status: 'Customer',
            statColor: '#ECFDF3',
            statText: '#027A48',
            users: 'users',
            aboutTitle: 'aboutt',
            aboutContent: 'about',
            logo: '../../assets/Avatar7.png'

        }
    ]
}

const getters = {
    tableHead: state => state.tableHead,
    tableRow: state => state.tableRow
}
const actions = {
    selectAll({ state }, val) {
        // if (val) {
        //     return state.tableRow.map((item, index) => {
        //         return this.state.tableRow[index].selected = true
        //     })
        // }
    }
}

export default {
    state,
    getters,
    actions
}