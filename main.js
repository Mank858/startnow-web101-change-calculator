// Write your JavaScript here
function changeCoins(change) {
    var cents = change.toString().split('.')[1]
    var centsYo=Number(cents)
    console.log({cents})
    var quarters;
    var dimes;
    var nickels;
    var pennies;
    if (centsYo < 99) { 
        switch (true) {

        case (centsYo<99 && centsYo>24):
        quarters = Math.floor(centsYo/25);
        centsYo=centsYo%25
        
        case (centsYo<25 && centsYo>9):
        dimes = Math.floor(centsYo/10);
        centsYo=centsYo%10
        
        case (centsYo<10 && centsYo>4):
        nickels = Math.floor(centsYo/5);
        centsYo=centsYo%5
        
        case (centsYo>1):
        pennies = Math.floor(centsYo);
        }
    }         
    $('#quarters-output').text(quarters)
    $('#dimes-output').text(nickels)
    $('#nickels-output').text(dimes)
    $('#pennies-output').text(pennies)
}
function handleClickEvent() {
    var charged = $('#amount-due').val()
    var recieved = $('#amount-received').val()
    var change = recieved-charged
    var dollarBills = Math.floor(change)
    $('#dollars-output').text(dollarBills)
    var cents = changeCoins(change)
    console.log(change)
}  
$('#calculate-change').click(handleClickEvent)
