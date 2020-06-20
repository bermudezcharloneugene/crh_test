<template>
    <div>
        <ul>
            <li>Name: {{users.name}}</li>
            <li>Phone: {{users.phone}}</li>
            <li>Website: {{users.website}}</li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'Dashboard',
    data() {
        return {
            users: [],
            id: localStorage.getItem('userId'),
        }
    },
    created() {
        axios.get('https://jsonplaceholder.typicode.com/users/'+this.id )
        .then(res => {
            this.users = res.data
        })
        .catch(err => {
            console.log(err);
        })
    }

}
</script>
<style scoped>

</style>