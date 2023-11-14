<template>
    <div class="view-login">
        <div class="view-login__container main-container">
            <h1 class="view-login__title">Desvende seu <br><b>Estilo</b></h1>
            <h2 class="view-login__subtitle">Faça login para descobrir e comprar</h2>
            <div class="view-login__form">
                <input class="view-login__input" name="email" placeholder="Email ou Telefone">
                <input class="view-login__input" type="password" name="password" placeholder="Senha">
                <button class="view-login__button">Entrar</button>
                <button class="view-login__button view-login__button--google">Entrar com Google</button>
                <router-link class="view-login__signup" to="#">Criar conta</router-link>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "LoginView"
    }
</script>

<style lang="scss">
    .view-login {

        height: 100%;

        &__container {
           display: flex;
           flex-direction: column;
           height: 100%;
           justify-content: flex-end;
        }

        &__title {
            font-size: rem(42);
            font-weight: 700;
            color: $white;

            b {
                color: $yellow;
                font-weight: 700;
            }
        }

        &__subtitle {
            font-size: rem(24);
            color: $white;
        }

        &__form {
            display: flex;
            flex-direction: column;
            margin-top: rem(24);
        }

        &__input {
            background: transparent;
            border:none;
            border-bottom: rem(1) solid $white;
            padding-bottom: 1rem;
            font-size: rem(16);
            color: $white;
            margin-top: rem(32);
            outline: none;

            &::placeholder {
                color: $white;
                opacity: .7;
                font-weight: 700;
            }
        }

        &__button {
            @include button;
            border: none;
            margin-top: rem(32);
            font-size: rem(18);
        }

        &__button--google {
            background-color: $white;
            color: $black;
        }

        &__signup {
            text-decoration: none;
            color: $white;
            font-weight: 700;
            text-align: center;
            margin-top: rem(40);
        }


    }
</style>