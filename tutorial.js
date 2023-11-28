<script>
    function navigate(page) {
        document.getElementById('currentLocation').innerHTML = `Estás aquí: <a href="#" onclick="navigate('Inicio')">Inicio</a> > <span>${page}</span>`;
        // Aquí puedes agregar lógica adicional para cambiar dinámicamente el contenido de la página según la navegación.
    }

    function search() {
        const searchTerm = document.getElementById('searchInput').value;
        // Aquí puedes agregar lógica para realizar la búsqueda.
        console.log(`Buscar: ${searchTerm}`);
    }

    function login() {
        // Aquí puedes agregar lógica para el proceso de inicio de sesión.
        console.log('Iniciar sesión');
    }

    function register() {
        // Aquí puedes agregar lógica para el proceso de registro.
        console.log('Registro');
    }

    function scrollToSection(section) {
        // Aquí puedes agregar lógica para desplazarte a una sección específica de la página.
        console.log(`Ir a la sección: ${section}`);
    }

    function enroll() {
        // Aquí puedes agregar lógica para el proceso de inscripción.
        console.log('Enroll');
    }

    function visitLink(link) {
        // Aquí puedes agregar lógica para redirigir a enlaces externos.
        console.log(`Visitar enlace: ${link}`);
    }

    function openSocial(platform) {
        // Aquí puedes agregar lógica para abrir enlaces a redes sociales.
        console.log(`Abrir enlace de ${platform}`);
    }
</script>
