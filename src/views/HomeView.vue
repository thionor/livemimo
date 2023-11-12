<template>
  <div class="view-getstarted">
    <div class="view-getstarted__container">
		<div class="view-getstarted__image">
			<img src="@/assets/images/woman.png"/>
		</div>
		<div class="view-getstarted__wrapper">
			<h1 class="view-getstarted__title">
			Descubra um mundo de <b>Compras</b> Exclusivas!
			</h1>
			<router-link to="#">
			Descobrir agora
			<i class="icon icon-chevron-right"></i>
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
			justify-content: flex-end;
			align-items: center;
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
			font-size: rem(34);
			font-weight: 700;

			b {
				color: $yellow;
			}
		}
	}
  
</style>
