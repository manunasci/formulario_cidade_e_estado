function myFunction(s1,s2)
{
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);

    s2.innerHTML = "";

    if(s1.value == "PR")
    {
        var optionArray= ['0|-- selecione --','1|Curitiba','2|Cascavel','3|Maringá'];
        s2.removeAttribute("disabled");
    }

    else if(s1.value == "SC")
    {
        var optionArray = ['0|-- selecione --','4|Florianópolis','5|Blumenau','6|Lages'];
        s2.removeAttribute("disabled");
    }

    else if(s1.value == "RS")
    {
        var optionArray = ['0|-- selecione --','7|Porto Alegre','8|Gramado','9|Caxias do Sul'];
        s2.removeAttribute("disabled");
    }

    else
    {
        var optionArray = ['0|-- selecione um estado --'];
        s2.setAttribute("disabled", true);

    }

    for(var option in optionArray)
    {
        var pair = optionArray[option].split("|");
        var newoption = document.createElement("option");

        newoption.value = pair[0];
        newoption.innerHTML = pair[1];
        s2.options.add(newoption);
    }
}


