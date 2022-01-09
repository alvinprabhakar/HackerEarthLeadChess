const request = require('request-promise');
const cheerio = require('cheerio');
const { resolvePtr } = require('dns');
const url = "https://www.chessgames.com/chessecohelp.html"

const chessServices = {

    getDetails: async(req,res) => {
        try {

            await request(url , (err,rep,html) => {
                if(!err && rep.statusCode==200){
                    const $ = cheerio.load(html);
                    const chessData = {};
                    $("body > font > p >table > tbody > tr ").each((index, element) => {
                        const tds = $(element).find("td");
                        const code = $(tds[0]).text();
                        chessData[code] = $($(element).find("font")[2]).text();
                      });
                     
                    
                    res.json(chessData)
                }
            })
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    getCodeDetails: async(req,res) => {
        try {
            
            await request(url , (err,rep,html) => {
                if(!err && rep.statusCode==200){
                    const $ = cheerio.load(html);
                    const chessCodeData = {};
                    $("body > font > p >table > tbody > tr ").each((index, element) => {
                        const tds = $(element).find("td");
                        const code = $(tds[0]).text();
                        if(code === req.params.id)
                        chessCodeData[code] = $($(element).find("font")[2]).text();
                      });
                     
                    
                    res.json(chessCodeData)
                }
            })
        

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = chessServices;