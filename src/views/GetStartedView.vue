<template>
  <div class="view-getstarted">
    <div class="view-getstarted__container main-container">
		<div class="view-getstarted__image">
			<img src="@/assets/images/woman.png"/>
		</div>
		<div class="view-getstarted__wrapper">
			<h1 class="view-getstarted__title">
			Descubra um <br> mundo de<br><b> Compras</b> Exclusivas!
			</h1>
			<router-link class="view-getstarted__button" to="/login">
			Descobrir agora
			<i data-feather="eye"></i>
			</router-link>
		</div>
    </div>
  </div>
</template>

<script>
export default {
	name: 'HomeView',
	components: {
	}
}
</script>

<style lang="scss">
	.view-getstarted {
		height: 100%;
	
		&__container {
			height: 100%;
			display: flex;
			display: flex;
			justify-content: flex-end;
			flex-direction: column;
			padding-bottom: rem(80);
		}

		&__image {
			position: absolute;
			right: -4rem;
			bottom: 0;
			img {
				width: auto;
				height: 40rem;
				display: block;
			}
		}

		&__wrapper {
			
		}

		&__title {
			font-size: rem(30);
			font-weight: 700;
			color: $white;

			b {
				color: $yellow;
				font-weight: 700;
			}
		}

		&__button {
			@include button;
			margin-top: 2rem;
			font-size: rem(24);
		}

	}
  
</style>
