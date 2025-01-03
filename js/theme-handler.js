function setLightThemeIndex() {
    document.getElementById('stylesheet').href='css/global.css';
    document.getElementById('banner').style='object-fit: contain; max-width: 50em; border-radius: 15px; border: 2px solid black; width: 100%; height: 100%;';
    sessionStorage.setItem("theme", "light");
}

function setDarkThemeIndex() {
    document.getElementById('stylesheet').href='css/global-dark.css';
    document.getElementById('banner').style='object-fit: contain; max-width: 50em; border-radius: 15px; border: 2px solid white; width: 100%; height: 100%;';
    sessionStorage.setItem("theme", "dark");
}

function setHiCfThemeIndex() {
    document.getElementById('stylesheet').href='css/global-hi-cf.css';
    document.getElementById('banner').style='object-fit: contain; max-width: 50em; border-radius: 15px; border: 2px solid white; width: 100%; height: 100%;';
    sessionStorage.setItem("theme", "hicf");
}

function setSunriseThemeIndex() {
    document.getElementById('stylesheet').href='css/global-sunrise.css';
    document.getElementById('banner').style='object-fit: contain; max-width: 50em; border-radius: 15px; border: 2px solid black; width: 100%; height: 100%;';
    sessionStorage.setItem("theme", "sunrise");
}


function checkThemeIndex() {
    var storedValue = sessionStorage.getItem('theme'); 
    if (storedValue === 'light') { setLightThemeIndex();};
    if (storedValue === 'dark') { setDarkThemeIndex();};
    if (storedValue === 'hicf') { setHiCfThemeIndex();};
    if (storedValue === 'sunrise') { setSunriseThemeIndex();};
}

function checkThemePages() {
    var storedValue = sessionStorage.getItem('theme'); 
    if (storedValue === 'light') { setLightThemePages();};
    if (storedValue === 'dark') { setDarkThemePages();};
    if (storedValue === 'hicf') { setHiCfThemePages();};
    if (storedValue === 'sunrise') { setSunriseThemePages();};
}

function checkThemeBlogPages() {
    var storedValue = sessionStorage.getItem('theme'); 
    if (storedValue === 'light') { setLightThemeBlogPages();};
    if (storedValue === 'dark') { setDarkThemeBlogPages();};
    if (storedValue === 'hicf') { setHiCfThemeBlogPages();};
    if (storedValue === 'sunrise') { setSunriseThemeBlogPages();};
}


function setLightThemePages() {
    document.getElementById('stylesheet').href='../css/global.css';
    document.getElementById('banner').style='object-fit: contain; max-width: 50em; border-radius: 15px; border: 2px solid black; width: 100%; height: 100%;';
    sessionStorage.setItem("theme", "light");
}

function setDarkThemePages() {
    document.getElementById('stylesheet').href='../css/global-dark.css';
    document.getElementById('banner').style='object-fit: contain; max-width: 50em; border-radius: 15px; border: 2px solid white; width: 100%; height: 100%;';
    sessionStorage.setItem("theme", "dark");
}

function setHiCfThemePages() {
    document.getElementById('stylesheet').href='../css/global-hi-cf.css';
    document.getElementById('banner').style='object-fit: contain; max-width: 50em; border-radius: 15px; border: 2px solid white; width: 100%; height: 100%;';
    sessionStorage.setItem("theme", "hicf");
}

function setSunriseThemePages() {
    document.getElementById('stylesheet').href='../css/global-sunrise.css';
    document.getElementById('banner').style='object-fit: contain; max-width: 50em; border-radius: 15px; border: 2px solid black; width: 100%; height: 100%;';
    sessionStorage.setItem("theme", "sunrise");
}


function setLightThemeBlogPages() {
    document.getElementById('stylesheet').href='../../css/global.css';
    document.getElementById('banner').style='object-fit: contain; max-width: 50em; border-radius: 15px; border: 2px solid black; width: 100%; height: 100%;';
    sessionStorage.setItem("theme", "light");
}

function setDarkThemeBlogPages() {
    document.getElementById('stylesheet').href='../../css/global-dark.css';
    document.getElementById('banner').style='object-fit: contain; max-width: 50em; border-radius: 15px; border: 2px solid white; width: 100%; height: 100%;';
    sessionStorage.setItem("theme", "dark");
}

function setHiCfThemeBlogPages() {
    document.getElementById('stylesheet').href='../../css/global-hi-cf.css';
    document.getElementById('banner').style='object-fit: contain; max-width: 50em; border-radius: 15px; border: 2px solid white; width: 100%; height: 100%;';
    sessionStorage.setItem("theme", "hicf");
}

function setSunriseThemeBlogPages() {
    document.getElementById('stylesheet').href='../../css/global-sunrise.css';
    document.getElementById('banner').style='object-fit: contain; max-width: 50em; border-radius: 15px; border: 2px solid black; width: 100%; height: 100%;';
    sessionStorage.setItem("theme", "sunrise");
}

function revealThemes() {

}

function hideThemes() {

}
