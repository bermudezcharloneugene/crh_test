<template>
    <div class="container mt-5">
        <form action="" @submit.prevent="login">
            <div class="form-group">
                <label>email</label>
                <input type="text" class="form-control" v-model="email"/>
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="text" class="form-control" v-model="password"/>
            </div>
            <div class="mt-3">
                <button class="btn btn-primary btn-block">Login</button>
            </div>
        </form>
    </div>

</template>
<script>
import axios from 'axios';

export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        login() {
            const formData = {
                email: this.email,
                password: this.password
            }
            axios.post('http://localhost:8000/api/login', {
                email: formData.email,
                password: formData.password
            })
            .then(res => {
                console.log(res.data.accessToken)
                localStorage.setItem('token', res.data.accessToken)
                localStorage.setItem('userId', res.data.user.id)

                if(localStorage.getItem('token') != null)
                {

                    this.$router.push('dashboard')
                    
                }

            })
            .catch(err => console.log(err))
        }
    }
}
</script>
<style scoped>

</style>