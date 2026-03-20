// --- 1. MENU RESPONSIVO (INTERAÇÃO DINÂMICA) ---
// Seleciona o ícone do "hambúrguer" e a lista de links do menu
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

// Verifica se os elementos existem na página atual antes de adicionar o evento
if (menuIcon && navLinks) {
    menuIcon.addEventListener('click', () => {
        // Alterna a classe 'active' para mostrar/esconder o menu no celular
        navLinks.classList.toggle('active');
        
        // Esta interação permite que o menu apareça/desapareça 
        // em dispositivos móveis conforme solicitado nos requisitos.
    });
}

// --- 2. ALTERNAR TEMA CLARO/ESCUROCOM MEMÓRIA (localStorage) ---
const themeBtn = document.getElementById('theme-toggle');

// 2.1 Verifica ao carregar a página se o tema escuro está salvo
if (localStorage.getItem('tema') === 'dark') {
    document.body.classList.add('dark-mode');
}

if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        // Alterna a classe no body
        document.body.classList.toggle('dark-mode');
        
        // 2.2 Salva a preferência do usuário
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('tema', 'dark');
        } else {
            localStorage.setItem('tema', 'light');
        }
        
        // O uso do localStorage garante que a escolha do usuário 
        // persista entre as diferentes páginas do site.
    });
}

// --- 3. VALIDAÇÃO E SIMULAÇÃO DE ENVIO DO FORMULÁRIO ---
const form = document.getElementById('contactForm');

if (form) {
    form.addEventListener('submit', function(e) {
        // Impede que a página recarregue ao clicar no botão enviar
        e.preventDefault(); 
        
        // Captura os valores e usa o .trim() para remover espaços vazios inúteis
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const msg = document.getElementById('mensagem').value.trim();
        const feedback = document.getElementById('feedback');

        // Validação Obrigatória: Verifica se algum campo está vazio
        if (nome === "" || email === "" || msg === "") {
            alert("Por favor, preencha todos os campos do formulário.");
            return; // Interrompe a execução se houver erro
        }

        // Validação de E-mail: Verifica se o formato é usuário@dominio.com
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Por favor, insira um e-mail em formato válido.");
            return;
        }

        // Simulação de envio com sucesso
        // Após validar, limpa o formulário e exibe o feedback visual.
        feedback.innerHTML = "Mensagem enviada com sucesso, " + nome + "!";
        feedback.style.color = "green";
        feedback.style.fontWeight = "bold";
        
        alert("Mensagem enviada com sucesso!");
        
        form.reset(); // Limpa todos os campos do formulário
    });
}
