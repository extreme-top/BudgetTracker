import { dashboard, expenses, transactions,trend, settings } from "./icons"
export const menuItems = [
    {
        id : 1,
        title : 'Home',
        icon : dashboard,
        link: '/home'
    },
    {
        id : 2,
        title: 'View Transactions',
        icon: transactions,
        link: '/transactions'
    },
    {
        id : 3,
        title: 'Incomes',
        icon: trend,
        link: '/income'
    },
    {
        id : 4,
        title: 'Expenses',
        icon: expenses,
        link: '/expenses'
    },
    {
        id : 5,
        title: 'Settings',
        icon: settings,
        link: '/Settings'
    }
]