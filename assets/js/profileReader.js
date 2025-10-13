

async function fetchProfile(){
    const url = '';
    const readProfile = await fetch(url);
    return await readProfile.json();

}