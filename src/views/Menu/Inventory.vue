<template>
    <ion-content>
        <div class="allContent" :class="{ 'showMain': documentVisible, 'epic-hide': isHide }">
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
                    <p id="company">Empresa/Razon Social</p>
                    <b>
                        <p>Santiago Gonzalez Dev</p>
                    </b>
                </div>
            </div>

            <!-- Componentes -->
            <div class="components">
                <p id="gxc">Gestiona</p>
                <div class="icons">
                    <!-- Icono #1 -->
                    <svg class="itemS" id="ic1" xmlns="http://www.w3.org/2000/svg" width="44" height="40"
                        viewBox="0 0 44 40">
                        <!-- Contenido del icono #1 -->
                    </svg>

                    <!-- Icono #2 -->
                    <svg class="itemS" id="ic2" xmlns="http://www.w3.org/2000/svg" width="43" height="43"
                        viewBox="0 0 43 43" fill="none">
                        <!-- Contenido del icono #2 -->
                    </svg>
                    <!-- Icono #3 -->
                    <svg class="itemS" id="ic3" xmlns="http://www.w3.org/2000/svg" width="41" height="41"
                        viewBox="0 0 41 41" fill="none">
                        <!-- Contenido del icono #3 -->
                    </svg>
                    <!-- Icono #4 -->
                    <svg class="itemS" id="ic4" xmlns="http://www.w3.org/2000/svg" width="41" height="41"
                        viewBox="0 0 41 41" fill="none">
                        <!-- Contenido del icono #4 -->
                    </svg>
                </div>
            </div>

            <div class="selectInv">
                <div class="newInv" @click="redirect1">
                    <p>Agregar Nuevo</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="41" viewBox="0 0 42 41" fill="none">
                        <path
                            d="M17.1875 22.5H1.14583C0.458333 22.5 0 22.95 0 23.625V39.375C0 40.05 0.458333 40.5 1.14583 40.5H17.1875C17.875 40.5 18.3333 40.05 18.3333 39.375V23.625C18.3333 22.95 17.875 22.5 17.1875 22.5ZM16.0417 38.25H2.29167V24.75H16.0417V38.25ZM17.1875 0H1.14583C0.458333 0 0 0.45 0 1.125V16.875C0 17.55 0.458333 18 1.14583 18H17.1875C17.875 18 18.3333 17.55 18.3333 16.875V1.125C18.3333 0.45 17.875 0 17.1875 0ZM16.0417 15.75H2.29167V2.25H16.0417V15.75ZM40.1042 0H24.0625C23.375 0 22.9167 0.45 22.9167 1.125V16.875C22.9167 17.55 23.375 18 24.0625 18H40.1042C40.7917 18 41.25 17.55 41.25 16.875V1.125C41.25 0.45 40.7917 0 40.1042 0ZM38.9583 15.75H25.2083V2.25H38.9583V15.75ZM40.1042 30.375H33.2292V23.625C33.2292 22.95 32.7708 22.5 32.0833 22.5C31.3958 22.5 30.9375 22.95 30.9375 23.625V30.375H24.0625C23.375 30.375 22.9167 30.825 22.9167 31.5C22.9167 32.175 23.375 32.625 24.0625 32.625H30.9375V39.375C30.9375 40.05 31.3958 40.5 32.0833 40.5C32.7708 40.5 33.2292 40.05 33.2292 39.375V32.625H40.1042C40.7917 32.625 41.25 32.175 41.25 31.5C41.25 30.825 40.7917 30.375 40.1042 30.375Z"
                            fill="black" />
                    </svg>
                </div>
                <div class="newInv2" @click="redirect2">
                    <p>Ver Todos</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="59" height="70" viewBox="0 0 59 70" fill="none">
                        <path d="M18.4375 19.6875H51.625M18.4375 35H51.625M18.4375 50.3125H51.625" stroke="black"
                            stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M9.21875 21.875C10.237 21.875 11.0625 20.8956 11.0625 19.6875C11.0625 18.4794 10.237 17.5 9.21875 17.5C8.20047 17.5 7.375 18.4794 7.375 19.6875C7.375 20.8956 8.20047 21.875 9.21875 21.875Z"
                            stroke="black" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M9.21875 37.1875C10.237 37.1875 11.0625 36.2081 11.0625 35C11.0625 33.7919 10.237 32.8125 9.21875 32.8125C8.20047 32.8125 7.375 33.7919 7.375 35C7.375 36.2081 8.20047 37.1875 9.21875 37.1875Z"
                            stroke="black" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M9.21875 52.5C10.237 52.5 11.0625 51.5206 11.0625 50.3125C11.0625 49.1044 10.237 48.125 9.21875 48.125C8.20047 48.125 7.375 49.1044 7.375 50.3125C7.375 51.5206 8.20047 52.5 9.21875 52.5Z"
                            stroke="black" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    </ion-content>
</template>

<script>
import { IonContent } from '@ionic/vue';

export default {
    components: {
        IonContent
    },
    data() {
        return {
            documentVisible: false,
            isHide: false
        };
    },
    mounted() {
        setTimeout(() => {
            this.documentVisible = true;
        }, 100);
    },
    methods: {
        handleClick() {
            const toggler = document.querySelector('.menu__toggler');
            const menu = document.querySelector('.menu');
            toggler.classList.toggle('active');
            menu.classList.toggle('active');
        },
        redirect1() {
            this.isHide = true;
            setTimeout(() => {
                window.location.href = "/inv1"
            }, 1000);
        },
        redirect2() {
            this.isHide = true;
            setTimeout(() => {
                window.location.href = "/invVA"
            }, 1000);
        },
    }
}
</script>


<style scoped>
.selectInv {
    width: 100%;
    height: 60%;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: red; only test */
}

.newInv {
    height: 110px;
    width: 70%;
    margin: 5%;
    border-radius: 8px;
    background: #F4F1F1;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
}

.newInv2 {
    height: 110px;
    width: 70%;
    margin: 5%;
    border-radius: 8px;
    background: #F4F1F1;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
}

.newInv:hover {
    background: #9EBE8F;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.newInv2:hover {
    background: #9EBE8F;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.newInv svg {
    margin-left: 20%;
}
.newInv2 svg {
    margin-left: 20%;
}
</style>