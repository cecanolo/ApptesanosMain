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
          <svg class="itemS" id="ic1" xmlns="http://www.w3.org/2000/svg" width="44" height="40" viewBox="0 0 44 40">
            <!-- Contenido del icono #1 (a completar) -->
          </svg>

          <!-- Icono #2 -->
          <svg class="itemS" id="ic2" xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43"
            fill="none">
            <!-- Contenido del icono #2 (a completar) -->
          </svg>

          <!-- Icono #3 -->
          <svg class="itemS" id="ic3" xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41"
            fill="none">
            <!-- Contenido del icono #3 (a completar) -->
          </svg>

          <!-- Icono #4 -->
          <svg class="itemS" id="ic4" xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41"
            fill="none">
            <!-- Contenido del icono #4 (a completar) -->
          </svg>
        </div>
      </div>

      <!-- Título de la sección -->
      <div class="titleInv">
        <p>Nueva Materia Prima</p>
        <!-- Icono asociado al título -->
        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
          <path
            d="M29.6875 23.75C29.6875 30.3087 25.5587 34.4375 19 34.4375C12.4413 34.4375 8.3125 30.3087 8.3125 23.75C8.3125 16.7118 15.9741 7.21031 18.3239 4.46199C18.4075 4.36434 18.5112 4.28595 18.628 4.23221C18.7448 4.17846 18.8718 4.15063 19.0004 4.15063C19.1289 4.15063 19.256 4.17846 19.3727 4.23221C19.4895 4.28595 19.5933 4.36434 19.6769 4.46199C22.0259 7.21031 29.6875 16.7118 29.6875 23.75Z"
            stroke="#9EBE8F" stroke-width="2.375" stroke-miterlimit="10" />
          <path
            d="M25.5312 24.3438C25.5312 25.761 24.9682 27.1202 23.9661 28.1224C22.964 29.1245 21.6048 29.6875 20.1875 29.6875"
            stroke="#9EBE8F" stroke-width="2.375" stroke-linecap="round" stroke-linejoin="round" />
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
            <!-- Etiqueta y campo de precio por unidad -->
            <label for="unityPrice">Precio Por Unidad</label> <br>
            <input id="unityPrice" type="text" placeholder="$0'000'000">
          </div>

          <div class="finalPrice">
            <!-- Título y contenido del precio de compra final -->
            <p class="titlecdc">Precio De Compra Final.</p>
            <p class="contentcdc">$120.000</p>
          </div>
        </div>

        <!-- Imagen del producto y botón de guardar -->
        <div class="imageProduct">
          <img src="@/media/icon.png" alt="Product">
          <div class="continueButton" @click="redirect">Guardar</div>
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
/* Establece el tamaño de fuente predeterminado para todos los elementos en 18px */
* {
  font-size: 18px;
}

/* Estilo para el contenedor "moreGridExt" */
.moreGridExt {
  position: absolute;
  left: 10px;
  top: 10px;
}

/* Estilo para el contenedor "finalPrice" */
.finalPrice {
  position: absolute;
  bottom: 10px;
  left: 10px;
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
  width: 50%;
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
  color: #9EBE8F;
}

/* Estilo para el elemento SVG dentro de "titleInv" */
.titleInv svg {
  width: auto;
  /* Ancho automático para el elemento SVG */
}
</style>
