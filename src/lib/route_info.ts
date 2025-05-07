export default [
    {
        icon: 'mdi-home-outline',
        class: 'hidden',
        name: 'home',
        path: '/',
        redirect: '/base-info'
    },
    {
        icon: 'mdi-attachment',
        name: 'base info',
        path: '/base-info',
        component: () => import('../views/BaseInfo.vue')
    },
    {
        icon: 'mdi-help-circle-outline',
        name: 'Should I Apply',
        path: '/should-i-apply',
        component: () => import('../views/ShouldIApply.vue')
    },
    {
        icon: 'mdi-file-document-edit-outline',
        name: 'Cover Letter',
        path: '/cover-letter',
        component: () => import('../views/CoverLetter.vue')
    },
    {
        icon: 'mdi-tools',
        name: 'Resume Tailer',
        path: '/resume-tailer',
        redirect: '/base-info'
    }
]
