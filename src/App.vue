<template>
    <div class="flex w-screen">
        <nav>
            <side-bar />
        </nav>
        <div class="flex-grow ml-12">
            <main
                class="h-full main-back-ground"
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
