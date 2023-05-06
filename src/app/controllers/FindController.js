
class FindController{
    
    //get /find
    index(req, res) {
        res.render('find')
    }
}

module.exports = new FindController;