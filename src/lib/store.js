import { defineStore } from 'pinia'

export const useUserInfoStore = defineStore('userInfo', {
    state: () => ({
        resumeJson: '',
        additionalInfo: '',
        basePrompt: '',
    }),
    actions: {
        setResumeJson(value) {
            this.resumeJson = value
        },
    },
    persist: true,
})
