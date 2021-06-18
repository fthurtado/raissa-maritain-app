import React, {useState} from 'react';

import '../styles/ThoughtsViewStyles.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Dialog } from '@material-ui/core';

function ThoughtsView() {
  const [openModal, setOpenModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState('');

  return (
    <div className="App">
      <Dialog
        open={openModal}
        onClose={() => setOpenModal(false)}
        maxWidth={false}
      >
        <div className="modal-content">
          <div className="modal-title">{modalTitle}</div>
          <div className="modal-reflection">
            {modalContent}
          </div>
        </div>
      </Dialog>
      <Navbar />
        <div className="thoughts-container">
          <div className="thought-container">
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
              height="40vh" viewBox="0 0 1280.000000 960.000000"
              preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,960.000000) scale(0.100000,-0.100000)"
              fill="#ff9f3f" stroke="none">
              <path d="M11978 9593 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"/>
              <path d="M7739 8386 c-2 -2 -35 -6 -74 -9 -145 -12 -356 -61 -462 -108 -24
              -11 -45 -19 -49 -19 -3 0 -35 -13 -71 -30 -35 -16 -68 -30 -73 -30 -5 0 -10
              -4 -12 -8 -1 -5 -37 -28 -78 -52 -182 -105 -371 -271 -490 -429 -14 -19 -36
              -47 -50 -63 l-25 -29 -62 78 c-111 140 -324 331 -454 408 -19 11 -59 34 -89
              52 -30 18 -62 35 -70 39 -8 3 -49 21 -90 40 -119 53 -222 85 -389 119 -81 17
              -311 30 -396 22 -486 -42 -945 -293 -1238 -676 -41 -53 -86 -117 -101 -142
              -15 -24 -31 -51 -36 -59 -28 -46 -105 -225 -131 -307 -32 -97 -63 -235 -77
              -333 -9 -70 -9 -413 0 -505 9 -93 43 -286 62 -357 9 -32 23 -84 31 -115 18
              -65 53 -170 85 -253 12 -30 28 -73 36 -94 25 -68 164 -347 217 -436 101 -169
              221 -352 243 -371 8 -6 14 -16 14 -21 0 -5 9 -22 21 -36 11 -15 40 -52 62 -83
              77 -103 242 -302 299 -360 29 -30 59 -41 93 -35 41 8 59 28 85 97 68 185 240
              327 433 359 100 17 264 7 317 -20 21 -11 44 -20 49 -20 23 0 130 -77 188 -135
              74 -75 143 -206 183 -350 5 -16 43 -127 85 -245 42 -118 80 -228 85 -245 5
              -16 27 -82 50 -145 22 -63 59 -169 81 -235 21 -66 43 -129 48 -140 5 -11 12
              -29 14 -40 12 -48 127 -368 137 -379 5 -8 54 -40 107 -72 125 -75 139 -75 266
              1 53 31 101 62 106 69 5 6 105 297 222 646 116 349 238 712 270 807 66 197 94
              255 163 331 154 168 400 237 626 175 80 -23 136 -54 214 -120 80 -67 127 -130
              157 -213 28 -78 66 -115 111 -106 42 8 47 13 138 116 176 199 454 592 561 793
              5 9 13 25 19 35 36 63 99 188 127 252 18 41 40 89 48 105 8 17 30 75 50 130
              20 55 40 110 45 123 6 13 10 34 10 47 0 14 4 25 8 25 7 0 26 63 38 127 1 6 7
              27 13 45 15 47 48 245 62 367 13 118 7 482 -10 546 -5 22 -13 56 -16 75 -35
              202 -153 479 -278 656 -259 367 -678 635 -1112 715 -110 20 -334 36 -346 25z"/>
              <path d="M10334 6340 c-140 -20 -255 -125 -279 -253 -4 -20 -8 -37 -9 -37 0
              -1 -30 -3 -66 -6 -83 -6 -123 -19 -182 -56 -96 -60 -126 -123 -162 -338 -3
              -19 -8 -44 -10 -55 -2 -11 -11 -72 -20 -135 -10 -63 -21 -122 -25 -130 -5 -8
              -27 -18 -51 -22 -137 -23 -244 -141 -271 -298 -5 -30 -14 -89 -19 -130 -5 -41
              -12 -86 -15 -100 -2 -14 -7 -36 -10 -50 -3 -14 -7 -45 -10 -70 -2 -25 -8 -67
              -14 -95 -5 -27 -12 -70 -16 -95 -3 -25 -11 -72 -16 -105 -5 -33 -14 -89 -20
              -125 -5 -36 -12 -76 -14 -90 -3 -14 -14 -86 -26 -160 -11 -74 -21 -144 -24
              -155 -2 -11 -4 -27 -4 -37 -1 -9 -56 -69 -123 -135 -67 -65 -190 -184 -273
              -265 -310 -303 -381 -371 -425 -407 -25 -20 -50 -41 -57 -48 -7 -6 -45 -24
              -85 -40 -64 -24 -86 -28 -175 -28 -64 0 -107 5 -114 12 -9 9 -7 28 9 80 12 37
              26 86 31 108 6 22 17 63 25 90 8 28 28 100 45 160 17 61 44 157 61 215 16 58
              36 130 44 160 8 30 31 111 51 180 60 204 55 322 -18 436 -42 66 -96 105 -202
              146 -47 18 -80 22 -150 22 -83 0 -96 -3 -165 -36 -97 -47 -169 -118 -214 -212
              -19 -39 -37 -87 -41 -106 -4 -19 -14 -48 -21 -65 -7 -16 -22 -59 -34 -95 -32
              -101 -106 -326 -138 -420 -43 -124 -78 -232 -218 -655 -70 -209 -130 -389
              -134 -400 -5 -11 -31 -90 -59 -175 -28 -85 -64 -196 -80 -246 -28 -85 -59
              -212 -77 -309 -4 -22 -8 -47 -10 -55 -38 -197 -38 -559 0 -870 20 -166 55
              -409 76 -535 25 -146 25 -147 34 -215 4 -30 10 -63 12 -72 5 -17 54 -18 844
              -18 755 0 838 2 844 16 3 9 6 156 6 327 0 397 12 485 89 642 l50 103 298 294
              c371 365 648 636 868 849 93 90 251 243 350 340 99 97 256 250 349 340 186
              181 251 259 301 364 43 90 91 238 110 340 9 44 20 96 25 115 8 31 33 187 46
              290 2 19 14 91 25 160 12 69 23 143 24 165 2 22 13 108 24 190 29 203 29 208
              41 308 5 48 15 126 21 175 6 48 12 101 14 117 5 41 42 325 50 385 5 33 10 79
              35 295 5 50 12 103 14 119 5 43 -17 145 -42 193 -25 48 -103 111 -175 142 -56
              24 -142 28 -212 9 -37 -10 -50 -10 -67 1 -57 36 -89 49 -137 60 -28 6 -53 10
              -54 10 -1 -1 -25 -5 -53 -9z"/>
              <path d="M2239 6286 c-20 -8 -55 -26 -77 -41 -37 -24 -45 -26 -73 -16 -55 19
              -174 14 -232 -11 -105 -43 -192 -160 -204 -272 -3 -28 0 -85 6 -126 7 -41 14
              -97 17 -125 2 -27 11 -95 19 -150 12 -89 26 -192 30 -220 0 -5 4 -32 8 -60 4
              -27 15 -99 23 -160 8 -60 17 -123 20 -140 2 -16 9 -68 14 -115 9 -78 25 -187
              36 -250 3 -14 9 -63 15 -110 5 -47 14 -113 20 -148 5 -34 11 -74 13 -90 4 -27
              39 -247 51 -312 3 -19 10 -60 15 -90 57 -341 111 -521 205 -686 43 -75 117
              -153 424 -444 102 -96 199 -188 216 -205 66 -64 422 -403 451 -431 81 -75 361
              -340 464 -439 63 -60 180 -173 260 -250 295 -283 346 -340 390 -428 36 -72 52
              -120 76 -224 4 -15 10 -188 14 -383 4 -195 8 -356 9 -357 0 -2 381 -3 846 -3
              l844 0 5 33 c3 17 10 64 17 102 6 39 13 84 14 100 2 17 12 88 24 160 11 72 23
              150 25 175 3 25 11 83 17 130 22 176 31 312 34 540 3 252 -4 334 -51 590 -7
              34 -74 268 -86 300 -11 28 -188 539 -223 645 -13 39 -65 189 -115 335 -50 146
              -98 283 -105 305 -23 68 -151 437 -174 500 -12 33 -37 105 -55 160 -19 55 -46
              125 -60 156 -53 110 -193 218 -306 234 -25 3 -53 7 -64 9 -35 5 -157 -24 -212
              -50 -111 -52 -194 -173 -207 -300 -6 -61 13 -166 49 -274 9 -25 22 -67 29 -95
              15 -57 105 -370 160 -555 20 -69 43 -147 50 -175 8 -27 21 -72 29 -100 8 -27
              13 -52 10 -55 -3 -3 -53 -7 -111 -8 -90 -3 -114 -1 -167 19 -115 42 -110 37
              -501 410 -487 464 -485 461 -489 494 -2 17 -13 84 -25 150 -11 66 -23 138 -26
              160 -4 22 -12 72 -20 110 -15 81 -26 140 -30 175 -2 14 -9 54 -15 90 -6 36
              -15 94 -21 130 -11 73 -12 79 -40 238 -11 63 -21 126 -23 140 -17 149 -133
              271 -282 298 -41 8 -51 19 -57 72 -4 26 -9 65 -12 87 -3 22 -12 74 -20 115 -7
              41 -17 95 -21 120 -4 25 -8 47 -9 50 -1 3 -5 21 -9 40 -32 137 -158 235 -317
              247 l-67 6 -12 41 c-46 153 -156 238 -315 243 -50 2 -94 -3 -116 -11z"/>
              </g>
            </svg>
            <div
              onClick={() => {
                setOpenModal(true);
                setModalTitle('Padre Nuestro');
                setModalContent('Con esta frase Raissa pone en evidencia total ' +
                                'la importancia de la oración que Jesús nos enseñó, ' +
                                'no solo calificandola como verdadera, que es lo común ' +
                                'en todos los católicos, sino definiendola como esencial ' +
                                'y, por lo tanto, elevandola por sobre todas las demás formas' + 
                                'de oración. De esta manera podemos irnos dando cuenta de la importancia' +
                                'que dio la autora a estos versos en su reflexión.');
              }}
              className="thought-message"
            >
              "La caridad de Cristo nos ha dejado la oración escencial, el Padre nuestro, la oración universalmente verdadera y necesaria."
            </div>
          </div>
          <div className="divider"/>
          <div className="thought-container">
            <div
              onClick={() => {
                setModalTitle('Cielo');
                setModalContent('La reflexión que hace la autora sobre la vida despues de la muerte '+
                'está profúndamente influenciada por la época en la que vivió. Esta frase tiene su concepción '+
                'en el periodo entre guerras, donde Raissa y su marido entran, al igual que la mayoría de Europa, '+
                'en desesperación al verse enfrentados de manera cruenta con la realidad de la muerte, llegando incluso '+
                'a considerar el suicidio. '+
                'Es en este contexto que la autora comienza su conversión, encontrando una renovada esperanza '+
                'en la promesa de la vida eterna.');
                setOpenModal(true);
              }}
              className="thought-message"
            >
              "No deja de ser extraño que el más allá, que nos importa mucho más que todo lo de aquí abajo, y del que nuestra esperanza toda esta pendiente."
            </div>
            <svg xmlnsX="http://ns.adobe.com/Extensibility/1.0/" xmlnsI="http://ns.adobe.com/AdobeIllustrator/10.0/" xmlnsGraph="http://ns.adobe.com/Graphs/1.0/" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="-949 951 100 125" style={{enableBackgroundNew: "-949 951 100 100"}} xmlSpace="preserve" fill="#ff9f3f" height="38vh" width="60vh"><switch><foreignObject requiredExtensions="http://ns.adobe.com/AdobeIllustrator/10.0/" x="0" y="0" width="1" height="1"/><g iExtraneous="self"><g><path d="M-864.7,992.4c-2.3-8.4-10-14.6-19.1-14.6c-6.4,0-12.1,3.1-15.7,7.8c3.3,2.2,5.9,5.3,7.5,8.9c7,2.6,11.8,9.2,11.8,16.9     c0,5-2,9.5-5.3,12.7h18.1c8.8,0,16-7.2,16-16C-851.5,1000.3-857.2,993.7-864.7,992.4z"/><path d="M-896.1,998.9c-1.8-6.7-7.9-11.6-15.2-11.6c-6.3,0-11.8,3.7-14.3,9.1c-0.3,0-0.6,0-0.9,0c-5.2,0-9.4,4.1-9.7,9.2     c-0.3,0-0.6,0-0.9,0c-5.2,0-9.3,4.2-9.3,9.3c0,5.2,4.2,9.3,9.3,9.3h38.9c7,0,12.7-5.7,12.7-12.7     C-885.6,1005.2-890.1,999.9-896.1,998.9z"/></g></g></switch></svg>
          </div>
          <div className="divider"/>
          <div className="thought-container">
            <svg fill="#ff9f3f" height="38vh" width="60vh" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xmlSpace="preserve"><path d="M95,60.106c0-3.782-3.077-6.859-6.859-6.859H11.859C8.077,53.248,5,56.325,5,60.106v23.931h17.467V71.899  c0-0.489,0.398-0.888,0.888-0.888s0.888,0.399,0.888,0.888v12.138h51.513V71.899c0-0.489,0.399-0.888,0.888-0.888  s0.888,0.399,0.888,0.888v12.138H95V60.106z"/><path d="M50,23.563c4.692,0,8.154-0.475,10.533-1.03c-2.694-2.32-6.155-3.759-9.949-3.895C50.388,18.635,50.201,18.63,50,18.63  c-0.201,0-0.388,0.005-0.585,0.007c-3.796,0.137-7.259,1.578-9.954,3.9C41.843,23.087,45.31,23.563,50,23.563z"/><path d="M50,27.163c-3.885,0-9.287-0.409-13.253-1.628c-1.837,2.624-2.924,5.81-2.924,9.25c0,8.921,7.257,16.178,16.178,16.178  c8.92,0,16.178-7.257,16.178-16.178c0-3.44-1.087-6.626-2.925-9.25C59.286,26.754,53.884,27.163,50,27.163z"/><path d="M50,26.23c8.735,0,17.578-1.763,17.578-5.133S58.735,15.963,50,15.963c-8.735,0-17.578,1.763-17.578,5.133  S41.265,26.23,50,26.23z M34.508,20.995c0.329-1.348,6.034-3.299,15.492-3.299c9.366,0,15.101,1.934,15.484,3.271l0.036,0.129  l-0.036,0.129c-0.383,1.337-6.118,3.271-15.484,3.271c-9.091,0-15.15-1.909-15.491-3.277l-0.028-0.112L34.508,20.995z"/></svg>
            <div
              onClick={() => {
                setModalTitle('Santidad');
                setModalContent('La vida de un católico significa en perpetua alabanza al santo nombre '+
                                'de Dios. Al vivir en esta continua alabanza, logramos acercarnos de forma tangencial '+
                                'al inaccesible nombre del Señor, lo que nos permite vivir bajo estandares que exigen una '+
                                'continua e infinita mejoría, lo que significa, al fin y al cabo, el cumplimiento del mandato de '+
                                'santidad. En esta reflexión se hace notar el nivel de preparación intelectual de la autora, que le permite '+
                                'cuestionar los dichos de uno de los intelectuales más cognotados de su epoca, como lo es el padre Lagrange.');
                setOpenModal(true)
              }}
              className="thought-message"
            >
              "Como acertadamente ha dicho el padre Lagranche, la inaccesible santidad de Dios exige comunicarse. Pedir que su nombre sea santificado es pedir que se cumpla plenamente la obra de santidad, que es la suya, y a la que en el transcurso del tiempo se asociarán los que viven de su gracia."
            </div>
          </div>
          <div className="divider" />
          <div className="thought-container">
            <div
              onClick={() => {
                setModalTitle('Reino');
                setModalContent('Esta reflexión contiene en sus entrañas una verdad teológica '+
                                'de suma importancia. Al expresar la venida del reino de Dios '+
                                'como el cumplimiento de la obra corredentora, se expresa también la importancia ' +
                                'que juega en la acción salvífica del Señor la libertad del hombre, jugando un rol fundamental '+
                                'en la expansion de su reino. Esto implica un necesario empoderamiento de todo católico en la labor '+ 
                                'redentora de Jesús.');
                setOpenModal(true);
              }}
              className="thought-message"
              
            >"Al decir venga a nosotros tu reino pedimos este cumplimiento progresivo de la obra corredentora. Pedimos que Dios haga avanzar hacia el término como incansables caminantes, y cooperar a la expansión de su reino."</div>
            <svg fill="#ff9f3f" height="40vh" width="60vh" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xmlSpace="preserve"><path d="M93.004,14.618v4.526h-2.65v-4.526h-2.454v4.526h-2.65v-4.526h-2.062v4.526h-2.65v-4.526h-2.454v4.526h-2.65v-4.526h-3.069  v15.715l2.479,3.52h0.007v29.751H63.594V57.62h2.122l-8.933-14.625H24.328v-2.07h1.829l-5.983-6.99l-5.249-13.547L9.677,33.935  l-5.983,6.99h2.051v43.523h3.921h0h14.662h39.266h1.631v-6.609c0-5.064,7.852-5.064,7.852,0v6.609h1.774h2.991h15.593V33.731  l2.487-3.398V14.618H93.004z"/></svg>
          </div>
          <div className="divider" />
          <div className="thought-container">
            <svg fill="#ff9f3f" height="40vh" width="60vh" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xmlSpace="preserve"><path d="M9.869,68.256c3.215-5.262,8.02-8.035,14.192-8.101c5.163-0.054,9.37,2.155,12.682,6.089  c0.66,0.783,0.619,0.732,1.546,0.264c1.394-0.708,2.791-1.453,4.265-1.949c4.474-1.506,9.042-1.604,13.571-0.312  c3.596,1.022,6.9,2.625,9.246,5.729c0.217,0.284,0.521,0.533,0.837,0.709c0.874,0.486,1.629,0.149,1.856-0.812  c0.082-0.338,0.1-0.693,0.123-1.043c0.125-1.821,0.254-3.643,0.356-5.466c0.253-4.531,0.603-9.062,0.706-13.596  c0.117-5.096-0.906-10.023-2.889-14.723c-0.758-1.797-1.695-3.519-2.557-5.273c-0.385-0.786-1.002-1.125-1.89-1.033  c-0.88,0.091-1.769,0.188-2.649,0.162c-0.983-0.028-2.029-0.011-2.936-0.333c-1.645-0.585-3.21-1.396-4.799-2.136  c-0.713-0.333-1.422-0.529-2.228-0.498c-0.554,0.021-1.152-0.1-1.669-0.312c-1.332-0.546-1.584-1.749-1.619-3.013  c-0.032-1.118,0.341-1.577,1.567-2.068c-0.013-0.036-0.027-0.072-0.04-0.109c1.598,0.4,3.808,0.884,5.196,0.884  c1.3,0,1.826-0.276,2.289-0.518c0.039-0.02,0.08-0.041,0.117-0.061l1.539-0.358c0.209-0.05,0.348-0.25,0.319-0.465  c-0.026-0.213-0.226-0.364-0.431-0.363c-0.868,0.031-1.34,0.208-1.715,0.392l-1.879,0.438c-0.049-0.653-0.041-1.953,0.604-3.236  c0.104-0.208,0.02-0.459-0.188-0.563c-0.207-0.103-0.461-0.02-0.562,0.187c-0.738,1.471-0.752,2.927-0.689,3.683  c-1.498-0.121-3.626-0.629-4.99-0.985c-0.355-0.809-0.719-1.613-1.05-2.433c-0.546-1.35-0.365-2.564,0.759-3.572  c0.22-0.196,0.409-0.43,0.641-0.611c2.224-1.735,4.442-3.478,6.688-5.182c0.938-0.711,1.922-1.371,2.924-1.991  c1.328-0.822,2.684-0.999,4.008,0.056c0.244,0.194,0.527,0.342,0.77,0.54c2.109,1.732,4.256,3.421,6.301,5.223  c1.494,1.315,2.891,2.746,4.26,4.191c1.02,1.074,1.459,2.477,2.016,3.831c1.129,2.744,2.389,5.436,3.662,8.117  c3.057,6.429,6.146,12.841,8.824,19.442c1.928,4.756,3.73,9.555,4.807,14.588c1.03,4.82,1.331,9.682,0.532,14.577  c-0.354,2.161-0.683,4.299-0.297,6.526c0.353,2.035-0.312,3.77-2.722,4.989c-4.45,2.259-9.228,3.507-14.08,4.493  c-5.668,1.15-11.405,1.835-17.174,2.188c-4.732,0.289-9.473,0.516-14.211,0.556c-5.239,0.044-10.479-0.157-15.718-0.248  c-1.622-0.028-3.25,0.055-4.862-0.083c-2.711-0.23-5.353-0.756-7.704-2.284c-1.72-1.114-3.267-2.409-4.513-4.038  C6.475,82.402,5.97,74.635,9.869,68.256z"/></svg>
            <div
              onClick={() => {
                setModalTitle('Voluntad');
                setModalContent('En esta afrimación se hace clara separación de la voluntad en dos tipos. En primer lugar, '+
                                'está la voluntad que representa la potencialidad cierta de realizar un acto, es decir '+
                                'el querer realizar un acción sin haberlo hecho todavia. En segundo lugar, está la voluntad que '+
                                'significa la formalización del deseo, es decir la voluntad que nos lleva a realizar dicho acto. Esta acotación '+
                                'tiene profunda relación a como la autora entiende la tentación, como veremos en la próxima reflexión.');
                setOpenModal(true);
              }}
              className="thought-message"
            >
              "Atendamos primero a los que los teólogos llaman Voluntas signi: es la voluntad divina en un sentido metafórico (...) por oposición a la voluntas beneplaciti (...) a tal o cual forma de manifestación."
            </div>
          </div>
          <div className="divider" />
          <div className="thought-container">
            <div
              onClick={() => {
                setModalTitle('Tentación');
                setModalContent('En esta frase podemos ver como Raissa lleva toda su reflexión sobre la voluntad '+
                                'al plano de la tentación, donde expresa que lo importante en última instancia es no ' +
                                'orientar la que sería la voluntas beneplaciti hacia la tentación, lo que sería dejarse '+
                                'vencer por esta.');
                setOpenModal(true)
              }}
              className="thought-message"
            >
              "Santo Tomás escribe lo mismo: en la sexta petición no pedimos no ser tentados, sino no ser vencidos por la tentación."
            </div>
            <svg fill="#ff9f3f" height="40vh" width="40vh" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" style={{enableBackgroundNew: "0 0 100 100"}} xmlSpace="preserve"><g><g><path d="M69.6,27.9c-9,0-12.7,3.8-16.6,5.2c0-0.4,0-0.7,0-1.1c0-1.5,0-3.2-0.2-5c-0.1-0.9-0.1-1.9-0.3-2.8c-0.1-1-0.2-1.9-0.4-2.9    c-0.1-1-0.3-1.9-0.5-2.9c-0.2-1-0.4-1.9-0.6-2.8c-0.2-0.9-0.5-1.8-0.7-2.6c-0.2-0.8-0.5-1.6-0.7-2.3c-0.2-0.7-0.5-1.3-0.7-1.9    c-0.2-0.6-0.4-1-0.6-1.4c-0.3-0.8-0.5-1.3-0.5-1.3L43,8.5c0,0,0.2,0.4,0.5,1.1c0.2,0.4,0.4,0.8,0.6,1.3c0.2,0.5,0.4,1.1,0.7,1.7    c0.3,0.6,0.5,1.3,0.7,2c0.2,0.7,0.5,1.5,0.7,2.3c0.2,0.8,0.5,1.7,0.6,2.5c0.2,0.9,0.4,1.8,0.5,2.6c0.2,0.9,0.3,1.8,0.4,2.7    c0.1,0.9,0.2,1.8,0.3,2.6c0.1,1.7,0.2,3.3,0.3,4.6c0,0.4,0,0.7,0,1.1c-2.9-1.4-7.2-5.2-17.9-5.2C19,27.9,8.2,37.7,8.2,51    c0,22.3,17.5,46.2,27.6,46.2c8.3,0,8.6-2.7,14.3-2.7c5.8,0,6.1,2.7,14.7,2.7c9.5,0,27.2-23.9,27.2-46.2    C91.8,37.7,81,27.9,69.6,27.9z"/></g><g><path d="M70.1,16.6C76.6,10,75,2.8,75,2.8S66.3,2.4,61,7.7c-5.2,5.3-6.9,15.2-6.9,15.2S63.1,23.7,70.1,16.6z"/></g></g></svg>
          </div>
          <div className="divider" />
          <div className="thought-container">
            <svg fill="#ff9f3f" height="30vh" width="40vh" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 30 37.5" xmlSpace="preserve"><g transform="translate(-570 -680)"><g xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M583,684.5c0,1.381,1.119,2.5,2.5,2.5c1.381,0,2.5-1.119,2.5-2.5c0-0.565-0.195-1.081-0.512-1.5H589v-3h-1v2h-5v-2h-1v3    h1.512C583.195,683.419,583,683.935,583,684.5z"/><path d="M599.922,694.971l-1.648-2.497l-0.45,0.901c-1.104-0.447-2.538-0.639-3.453-0.074c-0.397,0.246-0.87,0.739-0.87,1.699    c0,1.037,0.492,1.79,0.968,2.518c0.569,0.871,1.157,1.77,1.157,3.357c0,1.043-1.338,1.893-2.984,1.893    c-1.086,0-2.082-0.377-2.803-1.06c-0.357-0.338-0.623-0.759-0.838-1.226V698v-8h1v9h2v-11h-13v5h-2v-6h2v-5h-1v4h-1v-4h-1v4h-1v-4    h-1v5h2v6h-1v2h1v14h1v-14h4v-5h1v19h3v-11h1v11h3v-6.746c0.054,0.056,0.094,0.127,0.15,0.18c0.908,0.86,2.148,1.334,3.49,1.334    c2.234,0,3.984-1.271,3.984-2.893c0-1.885-0.732-3.005-1.32-3.904c-0.449-0.688-0.805-1.231-0.805-1.971    c0-0.541,0.227-0.744,0.396-0.849c0.551-0.341,1.61-0.212,2.478,0.121l-0.439,0.877L599.922,694.971z"/></g></g></svg>
            <div
              onClick={() => {
                setModalTitle('Mal');
                setModalContent('Para esta reflexión se presenta al mal como una realidad que fue vencida '+
                                'en el sacrificio de la cruz, pero que sigue existiendo en la tierra '+
                                'debido a la libertad del ser humano. Estaremos libres de todo mal, unicamente cuando '+
                                'sea la última venida de Jesucristo, donde hasta la muerte se postrará a sus pies.');
                setOpenModal(true)
              }}
              className="thought-message"
            >"La sangre de Cristo nos ha liberado, pero esta liberación no llega a su cumplimiento para cada uno, sino en el término de su vida, si no se ha sustraído a la gracias. Y al mismo tiempo, seremos libres de todo mal, cualquiera que sea. Y el día de la resurrección, cuando todo sea consumado y cuando Jesús entregue todo al Padre."</div>
          </div>
        </div>
      <Footer />
    </div>
  );
};

export default ThoughtsView;