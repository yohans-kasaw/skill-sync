<template>
    <div class="flex w-screen">
        <nav>
            <side-bar />
        </nav>
        <div class="flex-grow ml-12">
            <main class="h-full main-background">
                <RouterView />
            </main>
        </div>
    </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
export default {
    name: 'App',
    components: {
        SideBar,
    },
    methods: {
    },
}
</script>

<style scoped></style>
