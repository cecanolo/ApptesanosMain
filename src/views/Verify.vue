<template>
  <ion-content>
    <div class="allContent" :class="{ 'showMain': documentVisible, 'epic-hide': isHidden }">
      <!-- Menu elements -->
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
      <div class="menu__toggler" @click="handleClick"><span></span></div>

      <!-- Encabezado de la aplicación -->
      <header class="head">
        <img src="@/media/icon.png" alt="ApptesanosIcon">
        <p>Apptesanos</p>
      </header>

      <div class="imagess">
        <div class="green">
          <img src="@/media/icon.png" alt="IconUdec">
        </div>

        <div class="blue">
          <img src="@/media/icon.png" alt="IconUdec">
        </div>

        <div class="yellow">
          <img src="@/media/icon.png" alt="IconUdec">
        </div>

        <p>Gestiona la contabilidad de tu empresa de artesanias</p>

      </div>

      <div class="buttonsDown" @click="redirect">
        <button style="background-color: transparent; color: #fff;   font-size: 20px;">Login</button>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M11.5156 4.8125L17.7031 11L11.5156 17.1875M16.8438 11H4.29688" stroke="black" stroke-width="2.0625"
            stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div>
  </ion-content>
</template>
    
<script>
import { IonContent } from '@ionic/vue';
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
        window.location.href = "/login"
      }, 100);
    },
  },
  components: {
    IonContent
  }
};
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
  /* Establece los márgenes y el relleno predeterminado en 0 para todos los elementos */
}

.buttonsDown {
  width: 40%;
  height: 60px;
  border-radius: 100px;
  border: 1px solid rgba(0, 0, 0, 0.00);
  background: #000;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 8%;
  left: 30%;
  /* Estilos para un botón con fondo negro, sombra y posición absoluta en la parte inferior izquierda */
}

.buttonsDown svg {
  background-color: aliceblue;
  border-radius: 10px;
  margin-left: 20px;
  margin-right: -12px;
  /* Estilos para el contenido SVG dentro del botón, con fondo azul claro y márgenes ajustados */
}

.imagess {
  width: 100%;
  height: 70vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.2px;
  /* Estilos para un contenedor de imágenes que ocupa toda la altura de la ventana y tiene contenido centrado verticalmente */
}

.imagess p {
  width: 70%;
  position: absolute;
  bottom: 0;
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  /* Estilos para un párrafo en la parte inferior del contenedor de imágenes */
}

.green {
  background: url('@/media/green.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 54%;
  height: 36%;
  display: flex;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 10%;
  right: 2%;
  /* Estilos para un elemento con fondo verde y una imagen */
}

.green img {
  width: 50%;
  /* Estilos para la imagen dentro del elemento verde */
}

.blue {
  background: url('@/media/blue.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 45%;
  height: 32%;
  display: flex;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  position: absolute;
  top: 40%;
  left: 5%;
  /* Estilos para un elemento con fondo azul y una imagen */
}

.blue img {
  width: 50%;
  /* Estilos para la imagen dentro del elemento azul */
}

.yellow {
  background: url('@/media/yellow.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 42%;
  height: 28%;
  display: flex;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  position: absolute;
  bottom: 10%;
  right: 8%;
  /* Estilos para un elemento con fondo amarillo y una imagen */
}

.yellow img {
  width: 50%;
  /* Estilos para la imagen dentro del elemento amarillo */
}
</style>
