import * as THREE from 'three';

import { Scene } from 'three';

const scene = new Scene();

if (!WebGL.isWebGLAvailable()) {

    const warning = WebGL.getWebGLErrorMessage();
    document.getElementById( 'container' ).appendChild( warning );

}