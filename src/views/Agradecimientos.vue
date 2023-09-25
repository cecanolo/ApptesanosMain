<template>
    <ion-content>
        <div class="mainContent">
            <!-- Menú -->
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

            <!-- Toggler del menú -->
            <div class="menu__toggler" @click="handleClick"><span></span></div>

            <!-- Sección Udec -->
            <section class="Udec">
                <div class="head">
                    <img src="@/media/icon.png" alt="ApptesanosIcon">
                    <p>Apptesanos</p>
                </div>
                <div class="images">
                    <img src="@/media/udecLogo.png" alt="UdecLogo">
                    <img src="@/media/MexicanTec.png" alt="MexULogo">
                    <p>Instituto tecnológico de<br>lázaro cardenas</p>
                </div>
                <div class="endtxt">
                    <p>Esta aplicación es producto de la alianza en investigación de la Universidad de Cundinamarca y el
                        Instituto Tecnológico de Lázaro Cárdenas.</p>
                </div>
                <div class="down-arrow"></div>
            </section>

            <!-- Sección Agradecimientos -->
            <section class="thx">
                <div class="menuView">
                </div>
                <div class="thanks">
                    <h1>Agradecimientos</h1>
                </div>
                <div class="main">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <g id="check-circle 1">
                            <path id="Vector"
                                d="M22 11.4584V12.3784C21.9988 14.5348 21.3005 16.6331 20.0093 18.3602C18.7182 20.0874 16.9033 21.3509 14.8354 21.9623C12.7674 22.5737 10.5573 22.5003 8.53447 21.753C6.51168 21.0057 4.78465 19.6245 3.61096 17.8155C2.43727 16.0064 1.87979 13.8665 2.02168 11.7147C2.16356 9.56297 2.99721 7.51473 4.39828 5.87548C5.79935 4.23622 7.69279 3.09379 9.79619 2.61855C11.8996 2.14331 14.1003 2.36074 16.07 3.2384"
                                stroke="#9EBE8F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path id="Vector_2" d="M22 4.37842L12 14.3884L9 11.3884" stroke="#9EBE8F" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                    </svg>
                    <h2>Equipo de desarrollo</h2>
                    <ul>
                        <li>Santiago Gonzalez :D</li>
                        <li>Ing. Cristian Cano</li>
                        <li>Est. Jose Rojas</li>
                        <li>Est. Victor Rojas</li>
                        <li>#5</li>
                        <li>#6</li>
                    </ul>
                </div>
                <div class="main otmain">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <g id="eye 1">
                            <path id="Vector"
                                d="M1 12.3784C1 12.3784 5 4.37842 12 4.37842C19 4.37842 23 12.3784 23 12.3784C23 12.3784 19 20.3784 12 20.3784C5 20.3784 1 12.3784 1 12.3784Z"
                                stroke="#9EBE8F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path id="Vector_2"
                                d="M12 15.3784C13.6569 15.3784 15 14.0353 15 12.3784C15 10.7216 13.6569 9.37842 12 9.37842C10.3431 9.37842 9 10.7216 9 12.3784C9 14.0353 10.3431 15.3784 12 15.3784Z"
                                stroke="#9EBE8F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                    </svg>
                    <h2>Investigadores</h2>
                    <ul>
                        <li class="xcf">Mg. Myriam Rocio Paez</li>
                        <li class="xcf">Ing. Karina Lopez</li>
                        <li class="xcf">Ing. Cristian Cano</li>
                        <li class="xcf">#4</li>
                        <li class="xcf">#5</li>
                    </ul>
                </div>
                <div class="main2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <g id="dollar-sign 1" clip-path="url(#clip0_6_359)">
                            <path id="Vector" d="M12 1.37842V23.3784" stroke="#9EBE8F" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path id="Vector_2"
                                d="M17 5.37842H9.5C8.57174 5.37842 7.6815 5.74717 7.02513 6.40354C6.36875 7.05992 6 7.95016 6 8.87842C6 9.80668 6.36875 10.6969 7.02513 11.3533C7.6815 12.0097 8.57174 12.3784 9.5 12.3784H14.5C15.4283 12.3784 16.3185 12.7472 16.9749 13.4035C17.6313 14.0599 18 14.9502 18 15.8784C18 16.8067 17.6313 17.6969 16.9749 18.3533C16.3185 19.0097 15.4283 19.3784 14.5 19.3784H6"
                                stroke="#9EBE8F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_6_359">
                                <rect width="24" height="24" fill="white" transform="translate(0 0.378418)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <h2>Entidad Financiadora</h2>
                    <p>Universidad De Cundinamarca</p>
                </div>
            </section>

            <!-- Sección Redes Sociales -->
            <section class="socialMedia">
                <div class="imageUdec1">
                    <img src="@/media/icon.png" alt="UdecLogo"> <br>
                    <p>Apptesanos 2023</p>
                </div>
                <div class="udecSocial">
                    <img src="@/media/UdecDark.png" alt="DarkUdec">
                    <ul>
                        <li class="USocial">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="26" viewBox="9 0 30 25" fill="none">
                                <path
                                    d="M17.5 22.9045C23.0761 22.9045 27.5965 18.3842 27.5965 12.8081C27.5965 7.23193 23.0761 2.71159 17.5 2.71159C11.9239 2.71159 7.40356 7.23193 7.40356 12.8081C7.40356 18.3842 11.9239 22.9045 17.5 22.9045Z"
                                    fill="black" stroke="white" stroke-width="0.0209762" stroke-miterlimit="10" />
                                <path
                                    d="M11.2806 6.95845L16.1066 13.4111L11.2502 18.6575H12.3433L16.5951 14.0641L20.0304 18.6575H23.7499L18.6523 11.8419L23.1726 6.95845H22.0796L18.1639 11.1887L15.0001 6.95845H11.2806ZM12.888 7.76352H14.5967L22.1423 17.8524H20.4336L12.888 7.76352Z"
                                    fill="white" />
                            </svg>
                            <a style="color: #000;" href="https://twitter.com/ucundinamarca">@UCundinamarca</a>
                        </li>
                        <li class="USocial">
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                <path
                                    d="M15.6926 3.11443C16.8036 3.11775 17.8682 3.56058 18.6538 4.3462C19.4394 5.13183 19.8822 6.19641 19.8856 7.30744V15.6926C19.8822 16.8036 19.4394 17.8682 18.6538 18.6538C17.8682 19.4394 16.8036 19.8822 15.6926 19.8856H7.30744C6.19641 19.8822 5.13183 19.4394 4.3462 18.6538C3.56058 17.8682 3.11775 16.8036 3.11443 15.6926V7.30744C3.11775 6.19641 3.56058 5.13183 4.3462 4.3462C5.13183 3.56058 6.19641 3.11775 7.30744 3.11443H15.6926ZM15.6926 1.4375H7.30744C4.07891 1.4375 1.4375 4.07891 1.4375 7.30744V15.6926C1.4375 18.9211 4.07891 21.5625 7.30744 21.5625H15.6926C18.9211 21.5625 21.5625 18.9211 21.5625 15.6926V7.30744C21.5625 4.07891 18.9211 1.4375 15.6926 1.4375Z"
                                    fill="black" />
                                <path
                                    d="M16.9504 7.30744C16.7016 7.30744 16.4584 7.23367 16.2516 7.09546C16.0447 6.95725 15.8835 6.76081 15.7883 6.53098C15.6931 6.30114 15.6682 6.04824 15.7167 5.80424C15.7653 5.56025 15.8851 5.33613 16.061 5.16022C16.2369 4.98432 16.461 4.86452 16.705 4.81599C16.949 4.76745 17.2019 4.79236 17.4317 4.88756C17.6616 4.98277 17.858 5.14398 17.9962 5.35083C18.1344 5.55767 18.2082 5.80086 18.2082 6.04963C18.2085 6.21491 18.1762 6.37863 18.1132 6.5314C18.0501 6.68416 17.9574 6.82296 17.8406 6.93983C17.7237 7.0567 17.5849 7.14934 17.4321 7.21242C17.2794 7.27551 17.1157 7.3078 16.9504 7.30744ZM11.5 8.14569C12.1634 8.14569 12.8119 8.34241 13.3636 8.71099C13.9152 9.07957 14.3451 9.60344 14.599 10.2164C14.8529 10.8293 14.9193 11.5037 14.7899 12.1544C14.6604 12.8051 14.341 13.4028 13.8719 13.8719C13.4028 14.341 12.8051 14.6604 12.1544 14.7899C11.5037 14.9193 10.8293 14.8529 10.2164 14.599C9.60344 14.3451 9.07957 13.9152 8.71099 13.3636C8.34241 12.8119 8.14569 12.1634 8.14569 11.5C8.14664 10.6107 8.50034 9.75804 9.12919 9.12919C9.75804 8.50034 10.6107 8.14664 11.5 8.14569ZM11.5 6.46875C10.5049 6.46875 9.53217 6.76383 8.70479 7.31667C7.8774 7.86951 7.23254 8.65529 6.85173 9.57463C6.47093 10.494 6.37129 11.5056 6.56543 12.4816C6.75956 13.4575 7.23874 14.354 7.94237 15.0576C8.646 15.7613 9.54249 16.2404 10.5185 16.4346C11.4944 16.6287 12.506 16.5291 13.4254 16.1483C14.3447 15.7675 15.1305 15.1226 15.6833 14.2952C16.2362 13.4678 16.5313 12.4951 16.5313 11.5C16.5313 10.1656 16.0012 8.88591 15.0576 7.94237C14.1141 6.99883 12.8344 6.46875 11.5 6.46875Z"
                                    fill="black" />
                            </svg>
                            <a style="color: #000;" href="https://instagram.com/UCundinamarcaoficial"> UCundinamarcaoficial</a>
                        </li>
                        <li class="USocial">
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M21.5625 11.5606C21.5625 6.00381 17.0568 1.49815 11.5 1.49815C5.94316 1.49815 1.4375 6.00381 1.4375 11.5606C1.4375 16.5829 5.1166 20.7458 9.92773 21.5014V14.4702H7.37213V11.5606H9.92773V9.34375C9.92773 6.82229 11.4304 5.42836 13.7286 5.42836C14.8296 5.42836 15.9814 5.62512 15.9814 5.62512V8.10166H14.7119C13.4626 8.10166 13.0718 8.87701 13.0718 9.67393V11.5606H15.8624L15.4167 14.4702H13.0723V21.5023C17.8834 20.7472 21.5625 16.5843 21.5625 11.5606Z"
                                    fill="black" />
                            </svg>
                            <a style="color: #000;" href="https://facebook.com/UCundinamarcaoficial"> UCundinamarcaoficial</a>
                        </li>
                        <li class="USocial">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                <path
                                    d="M18.2179 1.3125H2.88258C2.04463 1.3125 1.3125 1.91543 1.3125 2.74354V18.1129C1.3125 18.9455 2.04463 19.6875 2.88258 19.6875H18.2134C19.0559 19.6875 19.6875 18.9406 19.6875 18.1129V2.74354C19.6924 1.91543 19.0559 1.3125 18.2179 1.3125ZM7.00834 16.629H4.37596V8.4443H7.00834V16.629ZM5.7832 7.19988H5.76434C4.92187 7.19988 4.37637 6.57275 4.37637 5.78771C4.37637 4.98832 4.93623 4.37596 5.79756 4.37596C6.65889 4.37596 7.18594 4.98381 7.2048 5.78771C7.20439 6.57275 6.65889 7.19988 5.7832 7.19988ZM16.629 16.629H13.9966V12.1538C13.9966 11.0816 13.6135 10.3491 12.6611 10.3491C11.9335 10.3491 11.5028 10.8413 11.3113 11.3207C11.2395 11.493 11.2202 11.7276 11.2202 11.9671V16.629H8.58785V8.4443H11.2202V9.5833C11.6033 9.03779 12.2017 8.25275 13.5942 8.25275C15.3222 8.25275 16.6294 9.39176 16.6294 11.8474L16.629 16.629Z"
                                    fill="black" />
                            </svg>
                            <a style="color: #000;" href="https://linkedin.com/school/UCundinamarcaoficial"> UCundinamarcaoficial</a>
                        </li>
                    </ul>
                </div>
                <img src="@/media/mexicanTec.png" alt="MexicanTecx" class="imgxd">
            </section>
        </div>
    </ion-content>
</template>

<script >
export default {
    methods: {
        handleClick() {
            const toggler = document.querySelector('.menu__toggler');
            const menu = document.querySelector('.menu');
            toggler.classList.toggle('active');
            menu.classList.toggle('active');
        }
    },
};
</script>

<style>
a{
    text-decoration: none;
}

/* Estilos para la imagen */
.imgxd {
    width: 80%;
    margin: auto;
    background-color: aliceblue;
    box-shadow: 0px 0px 15px 8px whitesmoke;
}

/* Estilos para la sección de redes sociales */
.udecSocial {
    height: 35%;
    width: 100%;
    /* background-color: #837777; */
    /* Comentado temporalmente */
    display: flex;
    justify-content: center;
    align-items: center;
}

.udecSocial img {
    width: 135px;
}

.USocial a {
    font-size: 15px;
}

/* Estilos generales para elementos de lista */
ul {
    list-style: none;
    padding: 0;
}

.USocial {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    /* Agrega margen inferior para separar elementos */
}

.xcf {
    margin-top: 5px;
}

/* Estilos para la imagen y texto de la universidad */
.imageUdec1 {
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.imageUdec1 img {
    width: 100px;
}

.imageUdec1 p {
    font-size: 25px;
}

/* Estilos para la sección de redes sociales */
.socialMedia {
    background-color: #9EBE8F;
}

/* Estilos para la sección de imágenes y texto */
.images {
    height: 54vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.images p {
    font-size: 20px;
    margin: 4%;
}

.images img {
    margin: 6%;
    width: 69%;
    height: auto;
}

.endtxt {
    color: #837777;
    text-align: center;
    font-family: DM Sans;
    font-size: 26px;
    line-height: 22px;
    width: 80%;
    margin: auto;
}

/* Estilos para el botón de menú */
.menuView {
    position: absolute;
    top: 20px;
    right: 30px;
    background-color: #ffffff7e;
    width: 48px;
    height: 46px;
    border-radius: 5px;
}

/* Estilos para la sección de agradecimientos */
.thx {
    background-color: #201E1C;
}

.thx li {
    list-style: none;
}

/* Estilos para la animación de flecha hacia abajo */
.down-arrow {
    position: absolute;
    bottom: 15px;
    left: calc(50% - 14px);
    width: 0;
    height: 30px;
    border: 2px solid;
    border-radius: 2px;
    animation: jumpInfinite 1.5s infinite;
}

.down-arrow:after {
    content: " ";
    position: absolute;
    top: 12px;
    left: -9px;
    width: 16px;
    height: 16px;
    border-bottom: 4px solid;
    border-right: 4px solid;
    transform: rotateZ(45deg);
}

@keyframes jumpInfinite {
    0% {
        margin-bottom: 0;
    }

    50% {
        margin-bottom: 20px;
    }

    100% {
        margin-bottom: 0;
    }
}

/* Estilos para el contenido principal */
.mainContent {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    background-color: #fff;
}

.mainContent section {
    width: 100vw;
    height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    scroll-snap-align: center;
    opacity: 0;
    animation: fadeIn 1s ease forwards;
}

@keyframes fadeIn {
    to {
        opacity: 1;
    }
}

/* Estilos para la sección de agradecimientos */
.thanks {
    text-align: center;
}

h1,
h2 {
    color: #fff;
}

.main {
    background: #282623;
    color: #808080;
    margin: auto;
    padding: 10px;
    padding: 10px;
    height: 28%;
    width: 80%;
    border-radius: 6px;
}

.otmain {
    height: 30%;
}

.main2 {
    margin: auto;
    background: #282623;
    color: #808080;
    padding: 10px;
    height: 20%;
    width: 80%;
    border-radius: 6px;
}

.iconx {
    width: 20px;
    height: 20px;
    color: lightblue;
    margin-left: 10px;
    margin-top: 10px;
}
</style>