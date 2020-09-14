<template>
	<div class="container">
		<div class="d-flex flex-row justify-content-center">
			<div class="col-md-8">
				<div class="card">
					<h1>Sign In</h1>

					<form @submit.prevent="onSubmit">
						<input type="text" placeholder="email" v-model="email" />

						<input type="password" placeholder="password" v-model="password" />

						<button>Submit</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';
export default {
	name: 'signup',

	data() {
		return {
			email: '',
			password: '',
			errors: ''
		};
	},
	methods: {
		onSubmit() {
			firebase
				.auth()
				.signInWithEmailAndPassword(this.email, this.password)
				.then((user) => {
					console.log(user);
					console.log('user-log');
					this.$router.push('/account');
				})
				.catch((error) => {
					this.errors = error;
				});
		}
	}
};
</script>

<style lang="css" scoped></style>
