<template>
    <ion-content>

        <div class="allContent" :class="{ 'show': documentVisible }">

            <div class="hideTop" :class="{ 'hide__top': isTop }">
                <!-- Barra de menú -->
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

                <!-- Botón de alternar menú -->
                <div class="menu__toggler" @click="handleClick"><span></span></div>

                <!-- Cabecera -->
                <div class="head">
                    <img src="@/media/icon.png" alt="ApptesanosIcon">
                    <p>Apptesanos</p>
                </div>

                <!-- Información de la persona -->
                <section class="person">
                    <div id="img"> <img src="@/media/person.png" alt="Persona"> </div>
                    <div class="infoperson">
                        <p id="company">Empresa/Razon Social</p>
                        <b>
                            <p>Santiago Gonzalez Dev</p>
                        </b>
                    </div>
                </section>
            </div>


            <!-- Opciones del usuario -->
            <section class="optuser" :class="{ 'hide__left': isLeft }">

                <!-- Opción de Inventario -->
                <div class="opt" @click="redirectI">
                    <div class="opttext">Inventario</div>
                    <div class="opticon">
                        <!-- Icono SVG para Inventario -->
                        <svg width="60" viewBox="0 0 36 36" fill="none">
                            <path d="M11.25 10.125H31.5M11.25 18H31.5M11.25 25.875H31.5" stroke="black" stroke-width="2.25"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M5.625 11.25C6.24632 11.25 6.75 10.7463 6.75 10.125C6.75 9.50368 6.24632 9 5.625 9C5.00368 9 4.5 9.50368 4.5 10.125C4.5 10.7463 5.00368 11.25 5.625 11.25Z"
                                stroke="black" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M5.625 19.125C6.24632 19.125 6.75 18.6213 6.75 18C6.75 17.3787 6.24632 16.875 5.625 16.875C5.00368 16.875 4.5 17.3787 4.5 18C4.5 18.6213 5.00368 19.125 5.625 19.125Z"
                                stroke="black" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M5.625 27C6.24632 27 6.75 26.4963 6.75 25.875C6.75 25.2537 6.24632 24.75 5.625 24.75C5.00368 24.75 4.5 25.2537 4.5 25.875C4.5 26.4963 5.00368 27 5.625 27Z"
                                stroke="black" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>

                <!-- Opción de Ventas -->
                <div class="opt" @click="redirectV">
                    <div class="opttext">Ventas</div>
                    <div class="opticon">
                        <!-- Icono SVG para Ventas -->
                        <svg width="50" viewBox="3.5 5 36 36" fill="none">
                            <path
                                d="M34.2656 8.0625H8.73438C6.13691 8.0625 4.03125 10.1682 4.03125 12.7656V30.2344C4.03125 32.8318 6.13691 34.9375 8.73438 34.9375H34.2656C36.8631 34.9375 38.9688 32.8318 38.9688 30.2344V12.7656C38.9688 10.1682 36.8631 8.0625 34.2656 8.0625Z"
                                stroke="black" stroke-width="2.6875" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4.03125 16.125H38.9688M10.75 25.1953H14.7812V26.875H10.75V25.1953Z" stroke="black"
                                stroke-width="5.03906" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>

                <!-- Opción de Calcular Costos -->
                <div class="opt" @click="redirectC">
                    <div class="opttext">Calcular Costos</div>
                    <div class="opticon">
                        <!-- Icono SVG para Calcular Costos -->
                        <svg width="50" viewBox="8 4 36 36" fill="none">
                            <path
                                d="M32.3438 4.21875H12.6562C11.1029 4.21875 9.84375 5.47795 9.84375 7.03125V37.9688C9.84375 39.5221 11.1029 40.7812 12.6562 40.7812H32.3438C33.8971 40.7812 35.1562 39.5221 35.1562 37.9688V7.03125C35.1562 5.47795 33.8971 4.21875 32.3438 4.21875Z"
                                stroke="black" stroke-width="2.8125" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M14.0634 9.84375H30.9375V15.4688H14.0634V9.84375Z" stroke="black" stroke-width="2.8125"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M14.7656 23.9062C15.9306 23.9062 16.875 22.9619 16.875 21.7969C16.875 20.6319 15.9306 19.6875 14.7656 19.6875C13.6006 19.6875 12.6562 20.6319 12.6562 21.7969C12.6562 22.9619 13.6006 23.9062 14.7656 23.9062Z"
                                fill="black" />
                            <path
                                d="M22.5 23.9062C23.665 23.9062 24.6094 22.9619 24.6094 21.7969C24.6094 20.6319 23.665 19.6875 22.5 19.6875C21.335 19.6875 20.3906 20.6319 20.3906 21.7969C20.3906 22.9619 21.335 23.9062 22.5 23.9062Z"
                                fill="black" />
                            <path
                                d="M30.2344 23.9062C31.3994 23.9062 32.3438 22.9619 32.3438 21.7969C32.3438 20.6319 31.3994 19.6875 30.2344 19.6875C29.0694 19.6875 28.125 20.6319 28.125 21.7969C28.125 22.9619 29.0694 23.9062 30.2344 23.9062Z"
                                fill="black" />
                            <path
                                d="M14.7656 30.9375C15.9306 30.9375 16.875 29.9931 16.875 28.8281C16.875 27.6631 15.9306 26.7188 14.7656 26.7188C13.6006 26.7188 12.6562 27.6631 12.6562 28.8281C12.6562 29.9931 13.6006 30.9375 14.7656 30.9375Z"
                                fill="black" />
                            <path
                                d="M22.5 30.9375C23.665 30.9375 24.6094 29.9931 24.6094 28.8281C24.6094 27.6631 23.665 26.7188 22.5 26.7188C21.335 26.7188 20.3906 27.6631 20.3906 28.8281C20.3906 29.9931 21.335 30.9375 22.5 30.9375Z"
                                fill="black" />
                            <path
                                d="M14.7656 37.9688C15.9306 37.9688 16.875 37.0244 16.875 35.8594C16.875 34.6944 15.9306 33.75 14.7656 33.75C13.6006 33.75 12.6562 34.6944 12.6562 35.8594C12.6562 37.0244 13.6006 37.9688 14.7656 37.9688Z"
                                fill="black" />
                            <path
                                d="M22.5 37.9688C23.665 37.9688 24.6094 37.0244 24.6094 35.8594C24.6094 34.6944 23.665 33.75 22.5 33.75C21.335 33.75 20.3906 34.6944 20.3906 35.8594C20.3906 37.0244 21.335 37.9688 22.5 37.9688Z"
                                fill="black" />
                            <path
                                d="M32.3438 28.8281C32.3438 27.6631 31.3994 26.7188 30.2344 26.7188C29.0694 26.7188 28.125 27.6631 28.125 28.8281V35.8594C28.125 37.0244 29.0694 37.9688 30.2344 37.9688C31.3994 37.9688 32.3438 37.0244 32.3438 35.8594V28.8281Z"
                                fill="black" />
                        </svg>
                    </div>
                </div>

                <!-- Opción de Reportes -->
                <div class="opt" @click="redirectR">
                    <div class="opttext">reportes</div>
                    <div class="opticon">
                        <!-- Icono SVG para Reportes -->
                        <svg width="50" viewBox="8 5 36 36" fill="none">
                            <path
                                d="M33.0625 4.3125H12.9375C10.5558 4.3125 8.625 6.24327 8.625 8.625V37.375C8.625 39.7567 10.5558 41.6875 12.9375 41.6875H33.0625C35.4442 41.6875 37.375 39.7567 37.375 37.375V8.625C37.375 6.24327 35.4442 4.3125 33.0625 4.3125Z"
                                stroke="black" stroke-width="2.875" stroke-linejoin="round" />
                            <path d="M15.8125 11.5H30.1875M15.8125 18.6875H30.1875M15.8125 25.875H23" stroke="black"
                                stroke-width="2.875" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </section>
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
            isTop: false,
            isLeft: false
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
        redirectI() {
            this.isTop = true;
            this.isLeft = true;
            setTimeout(() => {
                window.location.href = "/inv"
            }, 1000);
        },
        redirectV() {
            this.isTop = true;
            this.isLeft = true;
            setTimeout(() => {
                window.location.href = "/ventas"
            }, 1000);
        },
        redirectC() {
            this.isTop = true;
            this.isLeft = true;
            setTimeout(() => {
                window.location.href = "/costs"
            }, 1000);
        },
        redirectR() {
            this.isTop = true;
            this.isLeft = true;
            setTimeout(() => {
                window.location.href = "/report"
            }, 1000);
        },
    }
}
</script>



<style scoped>
/* Estilos para la sección de opciones de usuario */
.optuser {
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* Se centra verticalmente el contenido y se define el tamaño de la sección. */
    /* background: blue; */
}

/* Estilos para cada opción */
.opt {
    width: 85%;
    height: 21%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background: #F4F1F1;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    transition: transform 0.3s ease;
    /* Estilos para cada opción de usuario, incluyendo bordes redondeados y sombras. */
}

/* Estilos para el texto de la opción */
.opttext {
    font-size: 25px;
    width: 50%;
}

/* Estilos al pasar el ratón sobre la opción */
.opt:hover {
    border-radius: 20px;
    background: #9EBE8F;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    transform: translate(5px, 5px);
    /* Cambios visuales cuando se pasa el ratón sobre la opción. */
}
</style>