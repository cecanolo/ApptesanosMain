<template>
    <ion-content>
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
                <svg class="itemS" id="ic1" xmlns="http://www.w3.org/2000/svg" width="44" height="40" viewBox="0 0 44 40">
                    <!-- Contenido del icono #1 -->
                </svg>

                <!-- Icono #2 -->
                <svg class="itemS" id="ic2" xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43"
                    fill="none">
                    <!-- Contenido del icono #2 -->
                </svg>
                <!-- Icono #3 -->
                <svg class="itemS" id="ic3" xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41"
                    fill="none">
                    <!-- Contenido del icono #3 -->
                </svg>
                <!-- Icono #4 -->
                <svg class="itemS" id="ic4" xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41"
                    fill="none">
                    <!-- Contenido del icono #4 -->
                </svg>
            </div>
        </div>

        <!-- Contenido principal (aquí puedes agregar tu contenido) -->
        <main>
            <section>
                <div class="historyContent">
                    <p id="history">History</p>
                    <ul>
                        <li class="itemH">
                            <h3>$125.000</h3>
                            <p>Venta: Coffe</p>
                            <p class="date">May 12</p>
                        </li>
                        <li class="itemH">
                            <h3>$350.000</h3>
                            <p>Venta: More Coffe</p>
                            <p class="date">May 13</p>
                        </li>
                        <li class="itemH">
                            <h3>$350.000</h3>
                            <p>Venta: Yes, One More</p>
                            <p class="date">May 14</p>
                        </li>
                        <li class="itemH">
                            <h3>$350.000</h3>
                            <p class="date">May 15</p>
                            <p>Venta: Chocolate :&#41;</p>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    </ion-content>
</template>
  
<script>
export default {
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

<style>
/* Estilo para el elemento con el id "gxc" */
#gxc {
    text-align: left;
}

/* Estilo para el elemento con el id "history" */
#history {
    font-size: 2rem;
    position: inherit;
    margin-left: 4%;
}

/* Estilos para elementos con la clase "historyContent" */
.historyContent {
    width: 100%;
    height: 54%;
    /* background-color: #9EBE8F; */
    position: absolute;
    bottom: 0;
}

/* Estilos para listas dentro de elementos con la clase "historyContent" */
.historyContent ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: translateY(80px);
}

/* Estilos para elementos de lista dentro de elementos con la clase "historyContent" */
.historyContent li {
    display: flex;
    flex-direction: column;
    margin-left: 10%;
    text-align: left;
    font-size: 22px;
}

/* Estilo para el elemento con la clase "date" */
.date {
    position: absolute;
    right: 0;
    margin: 8%;
}

/* Estilos para elementos con la clase "components" */
.components {
    width: 288px;
    height: 87.619px;
    margin: auto;
    text-align: center;
    font-size: 25px;
    border-radius: 20px;
    border: 1px solid #F3F3F3;
    padding-top: 23px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

/* Estilos para elementos con la clase "icons" dentro de elementos con la clase "components" */
.components .icons {
    transform: translate(0, 15px);
    /* background-color: gray; */
}

/* Estilos para elementos con la clase "itemS" */
.itemS {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    margin: 3px;
}

/* Estilos para elementos con el id "ic1" */
#ic1 {
    background: #E1AB61;
}

/* Estilos para elementos con el id "ic2" */
#ic2 {
    background: #9EBE8F;
}

/* Estilos para elementos con el id "ic3" */
#ic3 {
    background: #9EBE8F;
}

/* Estilos para elementos con el id "ic4" */
#ic4 {
    background: #9EBE8F;
}
</style>