<template>
  <ion-content>
    <!-- Hide-Animation -->
    <div class="allContent" :class="{ 'show': documentVisible, 'epic-hide': isHidden }">
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

      <!-- Basic elements -->
      <main class="starter">
        <p id="Title">Bienvenido</p>
        <div class="texts">
          <img src="@/media/icon.png" alt="Icon">
          <p>Apptesanos</p>
        </div>
      </main>

      <!-- Login Form -->
      <section class="login">
        <form>
          <div class="input-section">
            <font-awesome-icon :icon="['far', 'envelope']" class="faicon" />
            <input autocomplete="Username" type="text" placeholder="Correo Electrónico" required>
          </div>
          <br>
          <div class="input-section">
            <font-awesome-icon :icon="['fa', 'key']" class="faicon" />
            <input type="password" placeholder="Contraseña" required>
          </div>
          <br>
          <p class="forgot">¿Olvidó Su Contraseña?</p>
        </form>

        <div class="question-box">
          <button class="btn" id="login-btn">Iniciar Sesión</button>
          <p class="reg-btn" @click="redirect">Crear Cuenta</p>
        </div>
      </section>
    </div>
    <!-- Hide-Animation -->
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
    hideElement() {
      this.isHidden = true;
    },
    redirect(){
      this.isHidden = true;
      setTimeout(() => {
        window.location.href = "/reg"
    }, 100);
    },
    handleClick() {
      const toggler = document.querySelector('.menu__toggler');
      const menu = document.querySelector('.menu');
      toggler.classList.toggle('active');
      menu.classList.toggle('active');
    }
  },
  components: {
    IonContent
  }
}
</script>


<style scoped>
/* Font Awesome icon */
.faicon {
  margin-left: 10px;
}

/* Título */
#Title {
  font-size: 35px;
  font-weight: bold;
  /* Sombra del texto */
  text-shadow:
    0 0 5px rgba(0, 0, 0, .05),
    0 1px 3px rgba(0, 0, 0, .2),
    0 2px 3px rgba(0, 0, 0, .2),
    0 2px 5px rgba(0, 0, 0, .2),
    0 5px 5px rgba(0, 0, 0, .2);
}

/* Texto de "Olvidó su contraseña" */
.forgot {
  text-align: center;
  color: #6b6b6b;
}

/* Estilo de las secciones de entrada */
.input-section {
  border: 1px solid darkslategray;
  border-radius: 7px;
  padding: 4px;
}

/* Estilo de los campos de entrada */
.login form input {
  border-radius: 20px;
  outline: none;
  border: 0;
  padding: 8px;
}

/* Formulario de inicio de sesión */
.login form {
  margin-top: 5%;
}

/* Datos del usuario */
.userData {
  position: absolute;
  margin-top: 15%;
}

.reg-btn {
  width: 35%;
  color: orangered;
  font-weight: bold;
  text-decoration: none;
}

/* Botón de inicio de sesión */
.btn {
  background: #9EBE8F;
  width: 45%;
  height: 45px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 6px 8px 8px 0px rgba(0, 0, 0, 0.3);
}

/* Contenedor de preguntas */
.question-box {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* Fondo del contenedor (Only For Test) */
  /* background: #005c9c; */
  height: 30%;
  width: 100%;
  bottom: 10px;
}

/* Contenedor principal de inicio de sesión */
.login {
  width: 100%;
  height: 60%;
  /* Fondo del contenedor (Only For Test) */
  /* background: #005c9c; */
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Contenedor de preguntas (otra instancia) */
.question-box {
  position: absolute;
  font-size: 15px;
  text-align: center;
  width: 100%;
  bottom: 10px;
}

/* Contenedor inicial */
.starter {
  /* Fondo del contenedor (Only For Test) */
  /* background: #005c9c; */
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Imagen de ícono */
.starter img {
  width: 85px;
}

/* Contenedor de textos */
.texts {
  margin-bottom: -15%;
  justify-content: center;
  align-items: center;
  width: 100%;
  display: flex;
}

/* Texto dentro del contenedor */
.texts p {
  font-size: 40px;
  /* Sombra del texto */
  text-shadow:
    0 0 5px rgba(0, 0, 0, .05),
    0 1px 3px rgba(0, 0, 0, .2),
    0 2px 3px rgba(0, 0, 0, .2),
    0 2px 5px rgba(0, 0, 0, .2),
    0 5px 5px rgba(0, 0, 0, .2);
}
</style>