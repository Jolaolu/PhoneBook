import { Template } from 'meteor/templating';
import {Books} from '../lib/collections.js';

import './main.html';

Template.body.helpers({
   /* phoneBooks:[
        {text: 'My phonebook'},
        {text: 'My phonebook1'},
        {text: 'My phonebook2'},
        {text: 'My phonebook3'}

    ]*/
     phoneBooks() {
        return Books.find({});
    }
})