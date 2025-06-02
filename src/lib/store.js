import { defineStore } from 'pinia'

export const useUserInfoStore = defineStore('userInfo', {
    state: () => ({
        resumeJson: '',
        additionalInfo: '',
        basePrompt: '',
    }),
    actions: {},
    persist: true,
})

export const useUserSettingsStore = defineStore('userSettings', {
    state: () => ({
        tabSize: 4,
    }),
    persist: true,
})
