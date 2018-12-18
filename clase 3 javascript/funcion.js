function  procesarAlumnos()
{


 for (i=1;i<k;i++)
 {
    nombre=prompt("Nombre:");
    esmasculino=confirm("Es Masculino ?");

    if (!esmasculino)
        mujeres++;

    nota=prompt("Intr. La nota");
    if (nota>=80)
    {
        if (!esmasculino)
           muejeresA++;

        alert("Ud Aprobo");
        console.log("Aprobado ", i);
    }

     else
     if (nota<80)
       alert("No Aprobo ")
       console.log("Aprobado ", i);
 }
}