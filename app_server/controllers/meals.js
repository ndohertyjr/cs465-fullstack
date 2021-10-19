var fs = require('fs');

var mealChoices = JSON.parse(fs.readFileSync('./data/meals.json', 'utf-8'));

/* GET meals view */
const meals = (req, res) => {
    res.render('meals', {title: 'Meals', mealChoices});
};

module.exports = {
    meals
}