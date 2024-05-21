const $ = require('jquery')
import '../header/header.css'

$('body').append('<header></header>');
$('header').append('<div id="logo"></div>', '<h1>Holberton Dashboard</h1>');

console.log('init header')