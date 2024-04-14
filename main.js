document.addEventListener('DOMContentLoaded', function () {
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    fetch('https://api.github.com/users/Le-Bueno')
        .then(function (res) {
            return res.json();
        })
        .then(function (json) {
            nameElement.innerText = json.name;
            usernameElement.innerText = json.login;
            avatarElement.src = json.avatar_url;
            followingElement.innerText = json.following;
            followersElement.innerText = json.followers;
            reposElement.innerText = json.public_repos; // Aqui corrigido de "Response" para "reposElement"
            linkElement.href = json.html_url;
        })
        .catch(function (error) {
            console.error('Erro ao carregar dados do usuário:', error);
            // Aqui você pode tratar o erro de acordo com sua lógica
        });
});
