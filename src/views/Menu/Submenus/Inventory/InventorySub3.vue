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

            <!-- Componentes -->
            <div class="components">
                <p id="gxc">Gestiona</p>
                <div class="icons">
                    <!-- Icono #1 -->
                    <svg class="itemS" id="ic1" xmlns="http://www.w3.org/2000/svg" width="44" height="40"
                        viewBox="0 0 44 40">
                        <!-- Contenido del icono #1 (a completar) -->
                    </svg>

                    <!-- Icono #2 -->
                    <svg class="itemS" id="ic2" xmlns="http://www.w3.org/2000/svg" width="43" height="43"
                        viewBox="0 0 43 43" fill="none">
                        <!-- Contenido del icono #2 (a completar) -->
                    </svg>

                    <!-- Icono #3 -->
                    <svg class="itemS" id="ic3" xmlns="http://www.w3.org/2000/svg" width="41" height="41"
                        viewBox="0 0 41 41" fill="none">
                        <!-- Contenido del icono #3 (a completar) -->
                    </svg>

                    <!-- Icono #4 -->
                    <svg class="itemS" id="ic4" xmlns="http://www.w3.org/2000/svg" width="41" height="41"
                        viewBox="0 0 41 41" fill="none">
                        <!-- Contenido del icono #4 (a completar) -->
                    </svg>
                </div>
            </div>

            <!-- Título de la sección -->
            <div class="titleInv">
                <p>Producto Terminado </p>
                <!-- Icono asociado al título -->
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path
                        d="M32.471 3.78352C32.4591 3.72582 32.4309 3.67273 32.3898 3.6305C32.3487 3.58828 32.2964 3.55867 32.239 3.54516C28.4154 2.61 19.5828 5.94211 14.7924 10.729C13.9386 11.5757 13.1601 12.4951 12.4657 13.4768C10.9892 13.3432 9.51261 13.4557 8.25542 14.0041C4.70535 15.5651 3.67245 19.6418 3.38417 21.3919C3.36855 21.4878 3.37523 21.586 3.40367 21.6789C3.43211 21.7718 3.48157 21.8569 3.5482 21.9276C3.61483 21.9983 3.69685 22.0527 3.7879 22.0866C3.87895 22.1205 3.97658 22.133 4.07324 22.1231L9.77347 21.4973C9.77741 21.9273 9.80323 22.3568 9.85081 22.7841C9.88056 23.0794 10.0123 23.3552 10.2235 23.5638L12.4306 25.7709C12.6394 25.9822 12.9154 26.114 13.211 26.1436C13.6358 26.191 14.0627 26.2168 14.49 26.2209L13.865 31.9163C13.8552 32.0128 13.8678 32.1103 13.9017 32.2012C13.9356 32.2921 13.99 32.3739 14.0606 32.4405C14.1312 32.507 14.2162 32.5564 14.3089 32.5849C14.4017 32.6133 14.4997 32.6201 14.5955 32.6046C16.3463 32.3234 20.4314 31.2905 21.9832 27.7411C22.5317 26.4825 22.6442 25.0137 22.5176 23.5441C23.5022 22.8504 24.4242 22.0719 25.2732 21.2175C30.0811 16.4363 33.3921 7.79766 32.471 3.78352ZM20.9996 15.0237C20.5796 14.6038 20.2936 14.0689 20.1777 13.4864C20.0618 12.904 20.1212 12.3003 20.3484 11.7517C20.5756 11.203 20.9605 10.7341 21.4542 10.4041C21.948 10.0742 22.5285 9.89811 23.1223 9.89811C23.7161 9.89811 24.2966 10.0742 24.7904 10.4041C25.2841 10.7341 25.6689 11.203 25.8962 11.7517C26.1234 12.3003 26.1828 12.904 26.0669 13.4864C25.951 14.0689 25.665 14.6038 25.245 15.0237C24.9665 15.3028 24.6356 15.5243 24.2714 15.6754C23.9071 15.8265 23.5166 15.9043 23.1223 15.9043C22.728 15.9043 22.3375 15.8265 21.9732 15.6754C21.609 15.5243 21.2781 15.3028 20.9996 15.0237Z"
                        stroke="#E1AB61" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M7.70906 24.75C7.00813 24.836 6.35603 25.1538 5.85633 25.6528C4.61742 26.8959 4.5 31.5 4.5 31.5C4.5 31.5 9.10687 31.3826 10.3465 30.1423C10.8475 29.6434 11.1658 28.9902 11.25 28.2881"
                        stroke="#E1AB61" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>

            <!-- Opciones de entrada de datos -->
            <div class="options">
                <div class="itemGrid">
                    <!-- Etiqueta y campo de referencia -->
                    <label for="reference">Referencia</label>
                    <input id="reference" type="text" placeholder="Reference">
                </div>

                <div class="itemGrid">
                    <!-- Etiqueta y selección de unidad -->
                    <label for="opciones1">Unidad:</label> <br>
                    <select id="opciones1">
                        <option value="opcion3">Onz</option>
                        <option value="opcion1">Lb</option>
                        <option value="opcion2">Kg</option>
                        <option value="opcion4">@</option>
                    </select>
                </div>

                <div class="itemGrid">
                    <!-- Etiqueta y campo de nombre del producto -->
                    <label for="productName">Nombre Del Producto</label>
                    <input id="productName" type="text" placeholder="Product Name">
                </div>

                <div class="itemGrid">
                    <!-- Etiqueta y selección de cantidad -->
                    <label for="quantity">Cantidad:</label> <br>
                    <select id="quantity">
                        <option value="opcion3">1</option>
                        <option value="opcion1">2</option>
                        <option value="opcion2">3</option>
                        <option value="opcion4">4</option>
                    </select>
                </div>
            </div>

            <!-- Opciones adicionales -->
            <div class="moreOptions">
                <!-- Columna izquierda -->
                <div class="left">
                    <div class="moreGridExt">
                        Calcular Costos
                    </div>

                    <div class="finalPrice">
                        <!-- Título y contenido del precio de compra final -->
                        <p class="titlecdc">Total De Productos</p>
                        <p class="contentcdc">7</p>
                    </div>
                </div>

                <!-- Imagen del producto y botón de guardar -->
                <div class="imageProduct">
                    <img src="@/media/icon.png" alt="Product">
                    <div class="continueButton">Guardar</div>
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
        },
        redirect() {
            this.isHidden = true;
            setTimeout(() => {
                window.location.href = "/inv2"
            }, 100);
        }
    }
}
</script>

<style scoped>
/* Estilo para el contenedor "moreGridExt" */
.moreGridExt {
    width: 40%;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 10%;
    top: 10%;
    background: #D9D9D9;
}

/* Estilo para el contenedor "finalPrice" */
.finalPrice {
    position: absolute;
    bottom: 25%;
    left: 10%;
}

/* Estilo para el contenedor "imageProduct" */
.imageProduct {
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

/* Estilo para el contenedor "left" */
.left {
    left: 0;
    height: 100%;
    width: 60%;
}

/* Estilo para el contenedor "options" */
.options {
    width: 100%;
    height: 20%;
    padding-left: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* Define 2 columnas con el mismo ancho */
    grid-gap: 5%;
    /* Espacio entre elementos en la cuadrícula */
}

/* Estilo para el contenedor "moreOptions" */
.moreOptions {
    height: 28%;
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
}

/* Estilo para los elementos "input" */
input {
    border: none;
    border-bottom: 1px solid #CAC7C7;
}

/* Estilo para el botón "continueButton" */
.continueButton {
    width: 69%;
    height: 40px;
    border-radius: 8px;
    background: #E1AB61;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin-top: 30%;
    font-size: 1.2em;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Estilo para el contenedor "titleInv" */
.titleInv {
    width: 100%;
    height: 9%;
    margin-top: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Estilo para el texto dentro de "titleInv" */
.titleInv p {
    font-size: 20px;
    color: #E1AB61;
}

/* Estilo para el elemento SVG dentro de "titleInv" */
.titleInv svg {
    width: auto;
    /* Ancho automático para el elemento SVG */
}
</style>