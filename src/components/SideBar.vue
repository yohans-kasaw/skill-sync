<template>
    <nav
        class="h-screen w-16 hover:w-48 bg-gray-800 transition-all duration-300 ease-in-out"
    >
        <div class="py-8">
            <div
                v-for="item in menuItems"
                :key="item.id"
                @click="handleItemClick(item)"
                class="p-4 flex justify-start items-center cursor-pointer transition-colors duration-300 hover:bg-gray-700"
            >
                <i :class="item.icon" style="font-size: 1.25rem"></i>
                <span class="pl-3 truncate">{{ item.label }}</span>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Sidebar',
    data() {
        return {
            isExpanded: false,
            menuItems: [
                {
                    id: 'apply',
                    icon: 'pi pi-question-circle',
                    label: 'Should I Apply',
                    route: '/should-i-apply'
                },
                {
                    id: 'cover',
                    icon: 'pi pi-file-edit',
                    label: 'Cover Letter',
                    route: '/cover-letter'
                },
                {
                    id: 'resume',
                    icon: 'pi pi-briefcase',
                    label: 'Resume Tailer',
                    route: '/resume-tailer'
                }
            ]
        }
    },
    methods: {
        handleItemClick(item) {
            this.$router.push(item.route)
        }
    }
}
</script>

<style scoped></style>
