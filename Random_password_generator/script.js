//condintional variables
let pass_length = 12;
let upperCase = true;
let lowerCase = true;
let symbols = true;
let nums = true;

//conditional values variables
let upper_chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lower_chars = 'abcdefghijklmnopqrstuvwxyz';
let symbol_chars = '!@#$%^&*()_+';
let nums_chars = '0123456789';

//Main function
function random_pass(pass_length, upperCase, lowerCase, symbols, nums){
    let generated_password = '';
    let include_chars = '';
    include_chars += upperCase ? upper_chars : '';
    include_chars += lowerCase ?  lower_chars : '';
    include_chars += symbols ?  symbol_chars  : '';
    include_chars += nums ?  nums_chars : '';

    for(let i = 0; i < pass_length; i++){
        random_index = Math.round(Math.random() * include_chars.length);
        generated_password += include_chars[random_index];
    }
    
    if (pass_length <= 0){
        return 'Password length atleast be set to 1!';
    };
    if(include_chars.length == 0){
        return 'Atleast 1 option must be selected';
    };
    return `Your generated password is ${generated_password}`;
};

result = random_pass(pass_length, upperCase, lowerCase, symbols, nums);
console.log(result);