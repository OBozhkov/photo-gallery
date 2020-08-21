<template>
	<div class="container">
		<div class="d-flex flex-row justify-content-center">
			<div class="col-md-8">
				<div class="card">
					<h1>sign in</h1>

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
	name: 'signin',

	data() {
		return {
			email: '',
			password: ''
		};
	},
	methods: {
		onSubmit() {
			console.log('submited');
			firebase
				.auth()
				.createUserWithEmailAndPassword(this.email, this.password)
				.then((user) => {
					console.log(user);
					this.$router.push('');
				})
				.catch((error) => {
					this.errors = error;
				});
		}
	}
};
</script>

<style lang="css" scoped></style>
