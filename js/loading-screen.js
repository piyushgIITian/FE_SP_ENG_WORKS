/**
 * SP Engineering Works - Loading Screen JavaScript
 * This file handles the loading screen animation and functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize loading screen
    const loadingScreen = document.getElementById('loadingScreen');
    const loadingBar = document.getElementById('loadingBar');
    const loadingText = document.getElementById('loadingText');
    const logoContainer = document.getElementById('logoContainer');
    
    // Create SVG logo with colored paths
    const svgLogo = `
        <svg class="loading-logo" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(0,1024) scale(0.1,-0.1)" stroke="none">
                <!-- S path filled with #ce4f20 -->
                <path class="logo-s-path" fill="#ce4f20" d="M2255 7889 c-165 -17 -240 -31 -338 -66 -164 -57 -257 -112 -365
                -217 -174 -168 -264 -374 -280 -644 -16 -264 12 -432 100 -612 46 -94 62 -116
                152 -206 110 -109 187 -160 316 -205 77 -27 253 -64 350 -73 30 -3 417 -8 860
                -11 993 -6 991 -6 1058 -35 62 -27 117 -84 131 -137 16 -58 13 -143 -8 -188
                -21 -46 -79 -101 -130 -122 -98 -41 -119 -42 -1304 -44 l-1137 -2 -53 -101
                c-30 -56 -120 -221 -200 -368 -81 -146 -147 -269 -147 -272 0 -11 2781 -7
                2891 4 417 41 702 215 845 515 70 148 97 271 110 501 8 138 -12 288 -52 406
                -86 254 -319 455 -593 513 -149 31 -244 35 -999 35 -1003 1 -1090 7 -1201 87
                -89 64 -123 173 -89 286 18 60 98 142 158 162 83 28 245 32 1175 34 495 1 902
                5 906 9 3 4 55 113 114 242 60 129 139 299 176 378 l68 142 -1217 -1 c-669 -1
                -1253 -5 -1297 -10z"/>
                <!-- P path filled with #3b3a39 -->
                <path class="logo-p-path" fill="#3b3a39" d="M5347 7868 c-8 -18 -76 -170 -152 -338 -76 -168 -148 -328 -161 -357
                l-23 -51 1485 -1 c988 -1 1510 -5 1560 -12 105 -14 209 -53 271 -101 121 -92
                169 -320 101 -470 -34 -74 -70 -113 -132 -143 -111 -54 -107 -54 -1458 -55
                l-1247 0 -1 -880 0 -880 433 0 432 0 -2 505 -2 505 707 0 c389 1 759 1 822 1
                333 1 618 49 785 131 91 46 207 132 281 211 192 204 278 453 276 803 -2 368
                -105 642 -314 840 -151 142 -311 224 -534 273 -196 43 -210 44 -1691 48
                l-1422 4 -14 -33z"/>
            </g>
        </svg>
    `;
    
    // Insert SVG logo
    logoContainer.innerHTML = svgLogo;
    
    // Update loading text with percentage
    let progress = 0;
    const loadingInterval = setInterval(function() {
        progress += 5;
        if (progress <= 100) {
            loadingText.textContent = `Loading... ${progress}%`;
        } else {
            clearInterval(loadingInterval);
        }
    }, 125); // Matches the fill animation duration (2.5s / 20 steps = 125ms)
    
    // Hide loading screen when window is fully loaded
    window.addEventListener('load', function() {
        // Ensure the loading bar animation completes
        setTimeout(function() {
            // Update to 100% in case the interval hasn't reached it yet
            loadingText.textContent = 'Loading... 100%';
            
            // Add fade-out class to initiate transition
            setTimeout(function() {
                loadingScreen.classList.add('fade-out');
                
                // Remove loading screen from DOM after transition completes
                setTimeout(function() {
                    loadingScreen.style.display = 'none';
                }, 500); // Match the transition duration in CSS
            }, 300); // Small delay before starting fade-out
        }, 2500); // Match the fill animation duration
    });
});
