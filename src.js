// reference: https://stackoverflow.com/a/9968254/6908282
// All Branches API: https://api.github.com/repos/twitter/bootstrap/branches
// Branch by name: https://api.github.com/repos/twbs/bootstrap/branches/main
// commmits API: https://api.github.com/repos/twitter/bootstrap/commits?per_page=100&sha=0c22ef1c5f6f1bd66ccf6ff2645d7ecc5255e67a

function DisplayCommits() {
    fetch('https://api.github.com/repos/twitter/bootstrap/branches')
        .then((response) => response.json())
        .then((data) => console.log(data));
}