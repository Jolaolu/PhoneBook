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
        return Books.find({}, {sort: { CreatedAt:-1}});
    }
});

Template.add.events({
    'submit .add-form':function(){
      event.preventDefault();
            
      const target = event.target;
      const name = target.name.value;
      const number = target.number.value;


                // Store to database in collecion
                Books.insert({
                    name,
                    CreatedAt: new Date(),
                });
   
                

                console.log(name + " | " + number);
                
                 //name.value = "";
                 
          
            

            
     return false;

    }

     

});