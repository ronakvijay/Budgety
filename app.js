// BUDGET CONTROLLER
var budgetController = (function() {

})(); 

// UI CONTRLOLLER
var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }
    return {
        getinput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value,  //will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            }
        },

        getDOMstrings: function() {
            return DOMstrings;
        }
    }
})();

// GLOBAL APP CONTROLLER
var appController = (function(budgetCtrl, UICtrl) {

    var setUpEventListeners = function() {
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click',controlAddItem);

        document.addEventListener('keypress', function(e) {
            if(e.keyCode === 13 || event.which === 13) {
                controlAddItem();
            }
        })
    }
    
    var controlAddItem = function() {
         
        //1. Get the field Inputdata
        var input = UICtrl.getinput();
        
        //2. Add the item to the budget controller

        //3. Add the item in UI

        //4. Calculate the budget

        //5. Display the budget on the UI

    }

    return {
        init: function() {
            console.log('Application has started.');
            setUpEventListeners();
        }
    };

})(budgetController, UIController);

appController.init();