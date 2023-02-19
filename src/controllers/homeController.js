let getHomepage = (rep, res) => {
    return res.render('hompage.ejs');
}

let getAboutMe = (rep, res) => {
    return res.render('test/aboutme.ejs');
} 

module.exports = {
    getHomepage:getHomepage,
    getAboutMe:getAboutMe,
}