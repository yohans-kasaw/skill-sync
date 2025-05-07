<template>
    <div class="flex w-screen">
        <nav>
            <side-bar />
        </nav>
        <div class="flex-grow">
            <main
                class="h-screen bg-gradient-to-br from-slate-900 via-slate-800/95 via-slate-800/90 via-slate-800/85 to-blue-900"
            >
                <RouterView />
            </main>
        </div>
    </div>
</template>

<script lang="ts">
import SideBar from './components/SideBar.vue'
export default {
    name: 'App',
    components: {
        SideBar
    }
}
</script>

<style scoped>
</style>
