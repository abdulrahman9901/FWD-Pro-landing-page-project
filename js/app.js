/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const menu =document.getElementById('navbar__list');
const sections =Array.from(document.querySelectorAll('section'));
const sectionCount =sections.length;
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function createListItem (){
    for(section of sections){
                   /*getting section name and id */ 
        const sectionName= section.getAttribute('data-nav');
        const sectionLink= section.getAttribute('id');
                   /* creating a list item and and with section name and id */
        const listItem =document.createElement('li');
        listItem.innerHTML=`<a href="#${sectionLink}" class="menu__link">${sectionName}</a>`;
                    /* append the list item to the navbar*/
        menu.appendChild(listItem);

    }
}

function inViewPort(elem){
    return(elem.getBoundingClientRect().top>=0);
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport

function activateSection(){
       for(section of sections){
           if(inViewPort(section)){
               // if it's not already activated  
               if(!section.classList.contains('your-active-class'))
                //then activate it
               section.classList.add('your-active-class');
           }else{
               //if not in view port make sure it's not active
            section.classList.remove('your-active-class');
           }
       }
}
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
createListItem();
// Scroll to section on link click

// Set sections as active
document.addEventListener('scroll',activateSection());

