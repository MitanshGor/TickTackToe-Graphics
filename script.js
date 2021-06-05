var count=0;
var box1,box2,box3,box4,box5,box6,box7,box8,box9;
var b1,b2,b3,b4,b5,b6,b7,b8,b9;
main("12")


function main(x)
{

    line1=document.getElementsByClassName("line1");
    line2=document.getElementsByClassName("line2");
    line3=document.getElementsByClassName("line3");
    line4=document.getElementsByClassName("line4");
    line5=document.getElementsByClassName("line5");
    line6=document.getElementsByClassName("line6");
    line7=document.getElementsByClassName("line7");
    line8=document.getElementsByClassName("line8");

    
    box1=document.getElementById("box1");
    box2=document.getElementById("box2");
    box3=document.getElementById("box3");
    box4=document.getElementById("box4");
    box5=document.getElementById("box5");
    box6=document.getElementById("box6");
    box7=document.getElementById("box7");
    box8=document.getElementById("box8");
    box9=document.getElementById("box9");


    if(x >  10)
        return
  
    selectedBox=null;
    if(x=='1')
    {
        // console.log("In 1")
        selectedBox=box1;
    }
    if(x=='2')
    {
        selectedBox=box2;
    }
    if(x=='3')
    {
        selectedBox=box3;
    }
    if(x=='4')
    {
        selectedBox=box4;
    }
    if(x=='5')
    {
        selectedBox=box5;
    }
    if(x=='6')
    {
        selectedBox=box6;
    }
    if(x=='7')
    {
        selectedBox=box7;
    }
    if(x=='8')
    {
        selectedBox=box8;
    }
    if(x=='9')
    {
        selectedBox=box9;
    }
   //                               You get the desired box which you selected
    b1=box1.textContent;
    b2=box2.textContent;
    b3=box3.textContent;
    b4=box4.textContent;
    b5=box5.textContent;
    b6=box6.textContent;
    b7=box7.textContent;
    b8=box8.textContent;
    b9=box9.textContent;
    
    if(x=='1' && ( b1!="") )
    {
        return;
    }
    if(x=='2' && ( b2!="" ))
    {
        return;
    }
    if(x=='3' && ( b3!="" ))
    {
        return;
    }
    if(x=='4' && ( b4!="" ))
    {
        return;
    }
    if(x=='5' && (b5!="" ))
    {
        return;
    }
    if(x=='6' && ( b6!="" ))
    {
        return;
    }
    if(x=='7' && ( b7!="" ))
    {
        return;
    }
   
    if(x=='8' && ( b8!="" ))
    {
        return;
    }
   
    if(x=='9' && ( b9!="" ))
    {
        return;
    }
   
   
    if(count%2==0)
    {
        selectedBox.textContent="X"
        selectedBox.style.backgroundColor = 'red'
  }
    else
    {    
        selectedBox.textContent="O"
         selectedBox.style.backgroundColor = 'red'

        }
        
    count++
    b1=box1.textContent;
    b2=box2.textContent;
    b3=box3.textContent;
    b4=box4.textContent;
    b5=box5.textContent;
    b6=box6.textContent;
    b7=box7.textContent;
    b8=box8.textContent;
    b9=box9.textContent;

    flagX=false;
    flagO=false;
    
    /////////////////////////////////////////// check if x has won or not
    if( b1=='X' && b2== 'X' && b3=='X')
    {
        flagX=true;
      
        for(var x=0;x<line1.length;x++)
        {
            //print(line1[x])
            line1[x].hidden=false
        }
  
    }
    else if(b4=='X' && b5== 'X' && b6=='X')
    {
        flagX=true;
 
        for(var x=0;x<line2.length;x++)
        {
            //print(line2[x])
            line2[x].hidden=false
        }

    }
    else if(b7=='X' && b8== 'X' && b9=='X')
    {
        flagX=true;
        for(var x=0;x<line3.length;x++)
        {
            //print(line3[x])
            line3[x].hidden=false
        }
    }
    else if(b1=='X' && b4== 'X' && b7=='X')
    {
        flagX=true;
        for(var x=0;x<line4.length;x++)
        {
            //print(line4[x])
            line4[x].hidden=false
        }
     
    }
    else if(b2=='X' && b5== 'X' && b8=='X')
    {
        flagX=true;
        for(var x=0;x<line5.length;x++)
        {
            //print(line5[x])
            line5[x].hidden=false
        }
        
    }
    else if(b3=='X' && b6== 'X' && b9=='X')
    {
        flagX=true;
        for(var x=0;x<line6.length;x++)
        {
            //print(line6[x])
            line6[x].hidden=false
        }
        
    }
    else if(b1=='X' && b5== 'X' && b9=='X')
    {
        flagX=true;
        for(var x=0;x<line7.length;x++)
        {
            //print(line7[x])
            line7[x].hidden=false
        }
        
        
    }
    else if(b3=='X' && b5== 'X' && b7=='X')
    {
        flagX=true;
        for(var x=0;x<line8.length;x++)
        {
            //print(line8[x])
            line8[x].hidden=false
        }
        
        
    }
    //////////////////////////////////////////////////////////////////// CHECK IF o HAS WON OR NOT
    if( b1=='O' && b2== 'O' && b3=='O')
    {
        flagO=true;
              
        for(var x=0;x<line1.length;x++)
        {
            //print(line1[x])
            line1[x].hidden=false
        }


        
    }
    else if(b4=='O' && b5== 'O' && b6=='O')
    {
        flagO=true;
         
        for(var x=0;x<line2.length;x++)
        {
            //print(line2[x])
            line2[x].hidden=false
        }
        
    }
    else if(b7=='O' && b8== 'O' && b9=='O')
    {
        flagO=true;
        for(var x=0;x<line3.length;x++)
        {
            //print(line3[x])
            line3[x].hidden=false
        }
        
    }
    else if(b1=='O' && b4== 'O' && b7=='O')
    {
        flagO=true;
        for(var x=0;x<line4.length;x++)
        {
            //print(line4[x])
            line4[x].hidden=false
        }
        
    }
    else if(b2=='O' && b5== 'O' && b8=='O')
    {
        flagO=true;
        for(var x=0;x<line5.length;x++)
        {
            //print(line5[x])
            line5[x].hidden=false
        }
        
        
    }
    else if(b3=='O' && b6== 'O' && b9=='O')
    {
        flagO=true;
        for(var x=0;x<line6.length;x++)
        {
            //print(line6[x])
            line6[x].hidden=false
        }
        
    }
    
    else if(b1=='O' && b5== 'O' && b9=='O')
    {
        flagO=true;
        for(var x=0;x<line7.length;x++)
        {
            //print(line7[x])
            line7[x].hidden=false
        }
        
    }
    else if(b3=='O' && b5== 'O' && b7=='O')
    {
        flagO=true;
        for(var x=0;x<line8.length;x++)
        {
            line8[x].hidden=false
        }
        
    }




    if(flagX)
    {
        x = document.getElementById("XScore")
        x.value=parseInt(x.value)+1
      
      
        setTimeout(()=>
        {
            
            alert("X Player Won")
        
            box1.textContent=""
            box2.textContent=""
            box3.textContent=""
            box4.textContent=""
            box5.textContent=""
            box6.textContent=""
            box7.textContent=""
            box8.textContent=""
            box9.textContent=""
            box1.style.backgroundColor="lightyellow"
            box2.style.backgroundColor="lightyellow"
            box3.style.backgroundColor="lightyellow"
            box4.style.backgroundColor="lightyellow"
            box5.style.backgroundColor="lightyellow"
            box6.style.backgroundColor="lightyellow"
            box7.style.backgroundColor="lightyellow"
            box8.style.backgroundColor="lightyellow"
            box9.style.backgroundColor="lightyellow"
            for(var x=0;x<line1.length;x++)
            {
                line1[x].hidden=true
            }
            for(var x=0;x<line2.length;x++)
            {
                line2[x].hidden=true
            }
            for(var x=0;x<line3.length;x++)
            {
                line2[x].hidden=true
            }
            for(var x=0;x<line4.length;x++)
            {
                line4[x].hidden=true
            }

            for(var x=0;x<line5.length;x++)
            {
                line5[x].hidden=true
            }
            for(var x=0;x<line6.length;x++)
            {
                line6[x].hidden=true
            }
            for(var x=0;x<line7.length;x++)
            {
                line7[x].hidden=true
            }
            for(var x=0;x<line8.length;x++)
            {
                line8[x].hidden=true
            }


    },500)
        
       
     
        
    }
    if(flagO)
    {
        x = document.getElementById("OScore")
        x.value=parseInt(x.value)+1
        
        // console.log(x.value)

        setTimeout(()=>{
            alert("O Player Won")
    
            box1.textContent=""
            box2.textContent=""
            box3.textContent=""
            box4.textContent=""
            box5.textContent=""
            box6.textContent=""
            box7.textContent=""
            box8.textContent=""
            box9.textContent=""
            box1.style.backgroundColor="lightyellow"
            box2.style.backgroundColor="lightyellow"
            box3.style.backgroundColor="lightyellow"
            box4.style.backgroundColor="lightyellow"
            box5.style.backgroundColor="lightyellow"
            box6.style.backgroundColor="lightyellow"
            box7.style.backgroundColor="lightyellow"
            box8.style.backgroundColor="lightyellow"
            box9.style.backgroundColor="lightyellow"
            for(var x=0;x<line1.length;x++)
            {
                line1[x].hidden=true
            }
            for(var x=0;x<line2.length;x++)
            {
                line2[x].hidden=true
            }
            for(var x=0;x<line3.length;x++)
            {
                line2[x].hidden=true
            }
            for(var x=0;x<line4.length;x++)
            {
                line4[x].hidden=true
            }

            for(var x=0;x<line5.length;x++)
            {
                line5[x].hidden=true
            }
            for(var x=0;x<line6.length;x++)
            {
                line6[x].hidden=true
            }
            for(var x=0;x<line7.length;x++)
            {
                line7[x].hidden=true
            }
            for(var x=0;x<line8.length;x++)
            {
                line8[x].hidden=true
            }

    
    } ,500)
      
       
        
      
    }
    ////////////////////////////////////////////// ALL BLOCK COMPLETED BUT NO RESULT FOUND THAN RUNT HIS IF CONDITION
    if(count%9==0)
    {
        // alert("Match Tie !! Play Again")
        
        // document.getElementsByName("hover_bkgr_fricc").style.display=''
        // document.getElementsByName("popupCloseButton").click()=function(){
        //     document.getElementsByName("hover_bkgr_fricc").style.display='none'
        // }
        box1.textContent=""
        box2.textContent=""
        box3.textContent=""
        box4.textContent=""
        box5.textContent=""
        box6.textContent=""
        box7.textContent=""
        box8.textContent=""
        box9.textContent=""
        box1.style.backgroundColor="lightyellow"
        box2.style.backgroundColor="lightyellow"
        box3.style.backgroundColor="lightyellow"
        box4.style.backgroundColor="lightyellow"
        box5.style.backgroundColor="lightyellow"
        box6.style.backgroundColor="lightyellow"
        box7.style.backgroundColor="lightyellow"
        box8.style.backgroundColor="lightyellow"
        box9.style.backgroundColor="lightyellow"

        // $(window).load(function () {
        //     $(".trigger_popup_fricc").click(function(){
        //        $('.hover_bkgr_fricc').show();
        //     });
        //     $('.hover_bkgr_fricc').click(function(){
        //         $('.hover_bkgr_fricc').hide();
        //     });
        //     $('.popupCloseButton').click(function(){
        //         $('.hover_bkgr_fricc').hide();
        //     });
        // });
    }
    // console.log(b1+ " "+ b2 + " " + b3+ " " + b4+ " " + b5+ " " + b6+ " " + b7+ " " + b8+ " " + b9 + " ---> "+ count)    
//    ////////////////////////////////////

}

