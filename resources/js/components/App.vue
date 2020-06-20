<template>
    <div>
        <headers />
        <router-view></router-view>
    </div>
</template>
<script>
import Headers from './Headers';

export default {
    name: 'app',  
    components: {
        headers: Headers
    }  
}

</script>
<style scoped>

</style>