// let url = "https://XXXXXXX.herokuapp.com";
let url = "http://localhost:5000";


// selection = 1 for select and selection = -1 for deselect
const selectMatching = (currentid, targetid, selection) => {

    fetch(url + "/user/select", {
        method: 'POST',
        body: JSON.stringify({userid: currentid, targetid: targetid, selection: selection})
    })
        .then(res => res.json())
        .then(user => {
            console.log(user);
            // if user["matching"]["targetid"]["score"] > 10   we have a match

        }).catch(err => console.log(err));
};

const addNewUser = (id, name, email, location, introduction, skills, ideas, matching, displayName, picture, headline, interests) => {

    //use any number of fields as appropriate
    fetch(url + "/users/add", {
        method: 'POST',
        body: JSON.stringify({id: id, name: name, email: email, location: location, introduction: introduction, skills: skills, ideas: ideas, matching: matching, displayName:displayName, picture: picture, headline: headline, interests: interests})
    })
        .then(res => res.json())
        .then(res => {
            console.log(res);
        }).catch(err => console.log(err));
};


getUser = (id) => {
    fetch( url + "/users/?id=" + id, {
        method: 'GET',
    })
        .then(res => res.json())
        .then(user => {
            console.log(user);
        }).catch(err => console.log(err));
};

getMatching = (id) => {
    fetch( url + "/users/matching/?id=" + id, {
        method: 'GET',
    })
        .then(res => res.json())
        .then(matching => {
            console.log(matching);
            let list = Object.values(matching);
            list.sort(function(a, b){return a["score"] - b["score"]});
            console.log(list);
        }).catch(err => console.log(err));
};
