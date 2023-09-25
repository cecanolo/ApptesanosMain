<template>
    <ion-content>
        <!-- Contenedor principal -->
        <div class="allContent" :class="{ 'showMain': documentVisible, 'epic-hide': isHidden }">

            <!-- Menú de navegación -->
            <div class="menu">
                <a href="/home">
                    <p>Home</p>
                </a>
                <a href="#">
                    <p>Section #2</p>
                </a>
                <a href="/thanks">
                    <p>Creditos</p>
                </a>
            </div>

            <!-- Botón para mostrar/ocultar el menú -->
            <div class="menu__toggler" @click="handleClick"><span></span></div>

            <!-- Cabecera -->
            <div class="head">
                <img src="@/media/icon.png" alt="ApptesanosIcon">
                <p>Apptesanos</p>
            </div>

            <!-- Información de la persona -->
            <div class="person">
                <div id="img"> <img src="@/media/person.png" alt=""> </div>
                <div class="infoperson">
                    <!-- Nombre de la empresa o razón social -->
                    <p id="company">Empresa/Razon Social</p>
                    <b>
                        <!-- Nombre de la persona -->
                        <p>Santiago Gonzalez Dev</p>
                    </b>
                </div>
            </div>

        </div>
    </ion-content>
</template>

<script>
import { IonContent } from "@ionic/vue";

export default {
    data() {
        return {
            documentVisible: false,
            isHidden: false,
        };
    },
    mounted() {
        setTimeout(() => {
            this.documentVisible = true;
        }, 100);
    },
    components: {
        IonContent
    },
    methods: {
        handleClick() {
            const toggler = document.querySelector('.menu__toggler');
            const menu = document.querySelector('.menu');
            toggler.classList.toggle('active');
            menu.classList.toggle('active');
        }
    }
}
</script>