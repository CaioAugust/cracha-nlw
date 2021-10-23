const linksSocialMedia = {
  github: 'caioaugust',
  youtube: 'teste',
  facebook: 'teste',
  instagram: 'teste',
  twitter: 'teste'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    alert(li.children[0].href)
  }
}

//changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  
  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio 
    userAvatar.src = data.avatar_url
    userLink.href = data.html_url
    userLogin.textContent = data.login
  })
}
getGitHubProfileInfos()