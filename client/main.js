import { Template } from 'meteor/templating';


import './main.html';

Template.body.helpers({
    book:[
        {text: 'My phonebook'},
        {text: 'My phonebook1'},
        {text: 'My phonebook2'},
        {text: 'My phonebook3'}




    ]
})