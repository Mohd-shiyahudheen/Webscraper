const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')

const app = express()

const url = 'https://www.olybet.it'
axios(url).then(response=>{
    const html =response.data
    const $ = cheerio.load(html)
    const outPut =[]

    $('.wrap-banner',html).each(function(){
        const banner = $(this).find('img').attr('src') 
        const eventName = $(this).find('h2').text()

        outPut.push({
            banner,
            eventName
        })      
    })

    $('.mg-sportsbook-landing',html).each(function(){
        const eventHeading = $(this).find('h4').text()

            outPut.push({
                eventHeading

            })

        })
    console.log(outPut);
}).catch(err=>console.log(err))

const PORT = 4000
app.listen(PORT,()=>console.log(`Server started on port ${PORT}`))