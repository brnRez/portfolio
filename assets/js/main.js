
function updateProfileInfo(profileData) {
    const name = document.getElementById('profile.name');
    const role = document.getElementById('profile.role');
    const description = document.getElementById('profile.description');

    name.innerText = profileData.name;
    role.innerText = profileData.job;
    description.innerText = profileData.description;

    //TODO: update the info above with the obtained from the profile JSON.
}

function updateProfileSkills(profileData) {
    const skills = document.getElementById('profile.skills');
    //TODO: For Each skill in the JSON, create a new card dynamically.
    skills.innerHTML = profileData.skills.map(skill => {
        return `
        <div class="skill-card"><i class="${skill.logo}"></i>${skill.name}</div>
        `
    }).join('');
}

function updateProfileProjects(profileData) {
    const projects = document.getElementById('profile.projects');
    //TODO: For Each Project in the JSON, create a new card dynamically.
    //The Projects will have each one a title, small description, github repo link and if elligible, a youtube video link. 
    projects.innerHTML = profileData.portfolio.map(project => {
        return
        //REFACTOR: implement the youtube video link.
        `
        <li>
            <h3>${project.name}</h3>
            <p>${project.description}</p>
        </li>
            `
    }).join('');

}

function updateProfileContacts(profileData) {
    const contacts = document.getElementById('profile.contacts');
    //TODO: Update the info above with the provided contacts from the JSON.
    //I Dont think i would change this, it will mostly have like, my github, Linkedin and e-mail.

}

//TODO: Add a "View CV right at the beginning"


(async () => {
    const profileData = await fetchProfile()
    updateProfileInfo(profileData)
    updateProfileProjects(profileData)
    updateProfileSkills(profileData)
})()


