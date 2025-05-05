<template>
    <div class="flex">
        <nav>
            <side-bar />
        </nav>
        <div>
            <main>
                <RouterView />
            </main>
        </div>
    </div>
    <div style="height: 1000px">

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

<style scoped lang="sass"></style>
