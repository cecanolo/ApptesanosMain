<template>
  <ion-content>
    <div class="allContent" :class="{ 'show': documentVisible, 'epic-hide': isHidden }">
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

      <!-- Sección principal (main) -->
      <main>
        <!-- Carga de imagen -->
        <div class="UpImage">
          <div class="image-upload-container" @click="triggerImageUpload">
            <svg v-if="!selectedImage" width="50" height="50" viewBox="0 0 39 39" fill="none">
              <path
                d="M34.125 19.5C34.125 11.4258 27.5742 4.875 19.5 4.875C11.4258 4.875 4.875 11.4258 4.875 19.5C4.875 27.5742 11.4258 34.125 19.5 34.125C27.5742 34.125 34.125 27.5742 34.125 19.5Z"
                stroke="black" stroke-width="2.4375" stroke-miterlimit="10" />
              <path d="M19.5 13.4062V25.5938M25.5938 19.5H13.4062" stroke="black" stroke-width="2.4375"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <img v-else :src="selectedImage" alt="Imagen seleccionada" class="image-preview">
            <input type="file" accept="image/*" ref="imageInput" style="display: none;" @change="handleImageUpload">
          </div>
        </div>

        <!-- Formulario de registro -->
        <div class="signup">
          <form>
            <div class="input-section2">
              <font-awesome-icon :icon="['far', 'envelope']" class="faicon" />
              <input autocomplete="Username" type="text" placeholder="Correo Electrónico" required>
            </div>
            <br>
            <br>
            <div class="input-section2">
              <font-awesome-icon :icon="['fa', 'person']" class="faicon" />
              <input type="text" placeholder="Empresa" required>
            </div>
            <br>
            <br>
            <div class="input-section2">
              <font-awesome-icon :icon="['fa', 'key']" class="faicon" />
              <input autocomplete="new-password" type="password" placeholder="Contraseña" required>
            </div>
          </form>

          <div class="question-box">
            <button class="btn" id="login-btn">Registrar</button>
            <p class="reg-btn" @click="redirect">Ya Tengo Cuenta</p>
          </div>
        </div>
      </main>
    </div>
  </ion-content>
</template>

  

<style scoped>
/* General Styles */

/* Button Styles */
.reg-btn {
  width: 35%;
  color: orangered;
  font-weight: bold;
  text-decoration: none;
}

/* Button Styles */
.btn {
  background: #9EBE8F;
  width: 45%;
  height: 45px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 6px 8px 8px 0px rgba(0, 0, 0, 0.3);
}

/* Container Styles */
.question-box {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* Background for Testing (OnlyTest) */
  /* background: #005c9c; */
  height: 30%;
  width: 100%;
  bottom: 10px;
}

/* Input Styles */
input {
  background: transparent;
}

/* Header Styles */
.head p {
  padding-top: 7px;
  font-size: 2.2rem;
}

.head img {
  width: 60px;
}

/* Image Upload Styles */
.UpImage {
  margin-top: 5%;
}

.image-upload-container {
  width: 150px;
  height: 150px;
  border: 1px solid #ccc;
  border-radius: 20px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  /* Box Shadow Effect */
  box-shadow:
    rgba(50, 50, 93, 0.30) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.5) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.40) 0px -2px 6px 0px inset;
}

.image-preview {
  max-width: 100%;
  max-height: 100%;
}

/* Signup Form Styles */
.signup form input {
  border-radius: 20px;
  outline: none;
  border: 0;
  padding: 8px;
}

.signup {
  width: 100%;
  height: 60%;
  /* Background for Testing (OnlyTest) */
  /* background: #005c9c; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
}

/* Additional Styles */
.input-section2 {
  border: 1px solid darkslategray;
  border-radius: 7px;
  padding: 4px;
}

</style>
  


<script>
import { IonContent } from '@ionic/vue';

export default {
  data() {
    return {
      documentVisible: false,
      selectedImage: null,
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
    redirect() {
      this.isHidden = true;
      setTimeout(() => {
        window.location.href = "/login"
      }, 100);
    },
    handleClick() {
      const toggler = document.querySelector('.menu__toggler');
      const menu = document.querySelector('.menu');
      toggler.classList.toggle('active');
      menu.classList.toggle('active');
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.selectedImage = URL.createObjectURL(file);
      }
    },
    triggerImageUpload() {
      this.$refs.imageInput.click();
    }
  },
  components: {
    IonContent
  }
}
</script>