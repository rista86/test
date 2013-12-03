/*
 * GET home page.
 */

exports.index = function(req, res) {
    res.render('pocetna', {
	title : 'Makao'
    });
};

exports.novaPartija = function(req, res) {
    res.render('nova-partija', {
	title : 'Makao'
    });
};