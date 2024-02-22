<template>
    <div class="container">
        <header class="jumbotron">
            <h3>Admin content</h3>
        </header>
        <div class="list row">
            <div class="col-md-6">
                <h4>Users List</h4>
                <ul class="list-group">
                    <li class="list-group-item" :class="{ active: index == currentIndex }" v-for="(user, index) in users"
                        :key="index" @click="setActiveUser(user)">
                        {{ user.username }}
                    </li>
                </ul>
            </div>
            <div class="col-md-6">
                <div v-if="currentUser">
                    <h4>User</h4>
                    <div>
                        <label><strong>Id:</strong></label> {{ currentUser.id }}
                    </div>
                    <div>
                        <label><strong>Name:</strong></label> {{ currentUser.username }}
                    </div>
                    <div>
                        <label><strong>Email:</strong></label> {{ currentUser.email }}
                    </div>
                    <div>
                        <label><strong>Hash Password:</strong></label> {{ currentUser.password }}
                    </div>
                    <div>
                        <label><strong>Roles:</strong></label> {{ currentUser.roles }}
                    </div>
                </div>
                <div v-else>
                    <br />
                    <p>Please click on a User...</p>
                </div>
            </div>
        </div>

    </div>
</template>
  
<script>
import UserService from "../services/user.service";

export default {
    name: "AdminPanel",
    data() {
        return {
            users: [],
            currentUser: null,
            currentIndex: -1,
            userName: ""
        };
    },
    methods: {
        setActiveUser(user, index) {
            this.currentUser = user;
            this.currentIndex = user ? index : -1;
        }
    },
    mounted() {
        UserService.getAdminBoard().then(
            (response) => {
                this.users = response.data;
            },
            (error) => {
                this.content =
                    (error.response && error.response.data && error.response.data.message) ||
                    error.message ||
                    error.toString();
            }
        );
    },
};
</script>

<style>
.list {
    text-align: left;
    max-width: 750px;
    margin: auto;
}
</style>