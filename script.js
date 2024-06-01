document.getElementById('procurarUser').addEventListener('click', () => {
    const username = document.getElementById('username').value

    if(username){
        procurarGithubUser(username);
    }
});

async function procurarGithubUser(username) {
    const api = `https://api.github.com/users/${username}`

    try{
        const response = await fetch(api);
        if(response.ok) {
            const user = await response.json();
            displayUserInfo(user);
        } else {
            alert("Usuario não encontrado")
        }
    } catch (error) {
        console.error("Error fetching user:", error);
        alert('Error fetching user');
    }
}

function displayUserInfo(user) {
    document.getElementById('avatar').src = user.avatar_url;
    document.getElementsByClassName('result_container')[0].style.display = 'flex';
    document.getElementById('nome').textContent = user.name || "Usuário sem nome";
    document.getElementById('localizacao').textContent = user.location || "Usuário sem localização";
    document.getElementById('bio').textContent = user.bio || "Usuário sem biografia";
    document.getElementById('repos').textContent = user.public_repos;
    document.getElementById('followers').textContent = user.followers;
    document.getElementById('following').textContent = user.following;
}