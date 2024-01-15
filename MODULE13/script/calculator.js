function equivalentCheck(){ //this allow the last value to remain untill a new number is pressed

    if (parseInt(document.getElementById("equivalent").value)){

    document.getElementById("equivalent").value = 0;
    document.getElementById("result").value = 0;
}
}

function input(x){
    equivalentCheck();
    let y = parseFloat( document.getElementById("result").value);
    
    if (document.getElementById("decimalvar").value== 0)//multiply the text inpute by 10 and add the value of x.
    {
        x += y * 10;
        document.getElementById("result").value = x;//returen x to the text output
    }

    else
    { //if the decimal is true
        let decimalcount = parseInt (document.getElementById("decimalvar").value);

        if(decimalcount==1){
                x*=1/10; //we are using maths to place the decimal point
                y+=x;
                document.getElementById("result").value=y;
        }

        else{
            document.getElementById("result").value +=x;
        }
        decimalcount++; 

        document.getElementById("decimalvar").value = decimalcount;
    }



}
function decimalpoint(){
    if (document.getElementById("decimalvar").value==0){ //this function prevent multiple decimal point.
        document.getElementById("decimalvar").value=1 

    }

    if(parseInt(document.getElementById("operation").value)){ //if this is an empty string ,it will return false.
        document.getElementById("result").value = 0;
    }
   
}
function operandCheck(){
    if(document.getElementById("operand").value==""){
        document.getElementById("operand").value= document.getElementById("result").value;
        
        document.getElementById("equivalent").value = 1;
    }

    else{
        operatorCheck();
    }
}

function operatorCheck(){
    let a = parseFloat(document.getElementById("operand").value);
    let b = parseFloat(document.getElementById("result").value);

     switch(parseInt(document.getElementById("operation").value)){
        case 1: //adition
        a +=b;
        break;

        case 2: //subtraction
        a -=b; 
        break;

         case  3: //multiplication
         a*=b;
         break;

         case 4: //division
        a /=b;



     }
     document.getElementById("operand").value = a;
     document.getElementById("result").value = a;
     document.getElementById("equivalent").value = 1;
}



function operators(x){
    switch(x){
        case 1:
            document.getElementById("operation").value = 1;//addition
            break;
            case 2:
                document.getElementById("operation").value = 2;//subtraction
                break;
                case 3:
                    document.getElementById("operation").value = 3;//multiplication
                    break;
                    case 4:
                        document.getElementById("operation").value = 4;// divition
                        break;
                        default:
    }
    operandCheck();
}

function equals(){
    operators(parseInt(document.getElementById("operation").value));
    document.getElementById("result").value = document.getElementById("operand").value;
    document.getElementById("operand"). value ="";
    document.getElementById("equivalent").value = 1;






}




function allclear(){
    document.getElementById("result").value=0;
    document.getElementById("operand").value = "";
    document.getElementById("operation").value= 0;
    document.getElementById("equivalent").value = 0;
}

function plusminus(){
    let x = parseFloat(document.getElementById("result").value);
    x *= -1;
    document.getElementById("result").value = x;
}

function percent(){
    let x = parseFloat(document.getElementById("result").value);
    x *= 0.01;
    document.getElementById("result").value = x;
}
function square(){
    let x = parseFloat(document.getElementById("result").value);
    x *= x;
    document.getElementById("result").value = x;
}