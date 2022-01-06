const express = require('express')
const { create } = require('express-handlebars')

const app = express()
const hbs = create({
    extname: 'hbs',
    helpers: {
        not(bool) { return !bool }
    }
})
const PORT = process.env.PORT || 3000

app.engine('.hbs', hbs.engine)
app.set('view engine', '.hbs')
app.set('views', './views')

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(PORT, error => {
    if (error) throw error
    console.log(`App is listening on PORT ${PORT}`)
})