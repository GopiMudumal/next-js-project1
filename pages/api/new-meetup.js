// api/new-meetup
// POST  api/new-meetup
function handler (req,res) {
    if(req.methode === "POST"){
        const data = req.body;
        const {title,image,address, description} = data;
        
    }
}

export default handler()