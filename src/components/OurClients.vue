<template>
    <section class="our-clients">
        <div class="container">
            <h2 class="our-clients-title">our clients</h2>
            <div class="our-clients-wrapper">
                <div class="our-client" v-for="(client, index) in clients" :key="index">
                    <img class="client-logo" :src="client" alt="client" >
                </div>
            </div>
        </div>
    </section>
</template>


<script>


export default {
    data: () => ({
        clients: [
            require("../assets/img/clients/jti.png"),
            require("../assets/img/clients/miller.png"),
            require("../assets/img/clients/roshen.png"),
            require("../assets/img/clients/basf.png"),
            require("../assets/img/clients/inbev.png"),
            require("../assets/img/clients/disney.png"),
            require("../assets/img/clients/unilever.png"),
            require("../assets/img/clients/danone.png"),
            require("../assets/img/clients/raiffeisen.png"),
            require("../assets/img/clients/knauf.png"),
            require("../assets/img/clients/pfiser.png"),
            require("../assets/img/clients/dtek.png")
        ]
    })
}
</script>