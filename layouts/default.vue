<template>
  <div>
    <nav>
      <a v-if="user" @click="signout">signouttt</a>

      <template v-else>
        <nuxt-link to="/signin">signIn</nuxt-link>
        <nuxt-link to="/signup">signUp</nuxt-link>
      </template>
    </nav>
    <Nuxt />
  </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';
export default {
  name: 'signup',
  data() {
    return {
      user: ''
    };
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);

      this.user = user;
    });
  },
  methods: {
    signout() {
      firebase
        .auth()
        .signOut()
        .then((result) => {
          console.log(result);
          this.user = '';
          this.$router.push('/');
        });
    }
  }
};
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
