// BUDGET CONTROLLER
var budgetController = (function() {

    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income =  function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: [],
            inc: []
        }
    }

    return {
        addItem: function(type, des, val) {
            var newItem, ID;

            // Create new ID
            if(data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
            
            //Create new item based on the'inc' or 'exp' type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type ==='inc') {
                newItem = new Income(ID, des, val);
            }

            //Push it into our data structure
            data.allItems[type].push(newItem);

            //Return the element
            return newItem;
        }
    }

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
        var input, newItem;
        //1. Get the field Inputdata
        input = UICtrl.getinput();
        
        //2. Add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);
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