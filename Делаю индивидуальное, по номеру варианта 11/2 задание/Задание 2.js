const f = x => ( (x.toString().includes('.')) ? (x.toString().split('.').pop().length) : (0) );

let n = prompt('Введите n: ', '10');

if ((isNaN(parseFloat(n)) || !isFinite(n)) || (f(n)>0))
{
    alert('Ошибочное число: ' + n);
}
else if ((n <= 2) || (n>=15))
{
    alert('Недопустимое значение: ' + n);
}
else
{
    n = Number(n);    
    let t = 0;

    for(let i = 1; i< n+1; i++)
    {
        let out = 100/i; // Округлять не будем

        document.write('<hr width=' + out + '%>');
    }

    document.write('<table align="center" border = "1">');

    // Если нужно сделать ячейки таблицы больше, пропишите например вот так:
    // document.write('<td bgcolor="black"> 11 </td>');

    for(let i = 0; i<=n;i++)
    {
        document.write('<tr>');

        for(let j = 0; j<= n; j++)
        {
            //document.write('<td bgcolor="red">' + i + ', ' + j + '</td>');
            if((i == 0) || (i == n))
            {
                document.write('<td bgcolor="black"> ++ </td>');
            }
            else if((j == 0) || (j == n))
            {
                document.write('<td bgcolor="black"> ++ </td>');
            }
            else if (((i >= 2) && (i <= n-2)) && ((j == 2) || (j == n-2)))
            {
                document.write('<td bgcolor="black"> ++ </td>');
            }
            else if (((j >= 2) && (j <= n-2)) && ((i == 2) || (i == n-2)))
            {
                document.write('<td bgcolor="black"> ++ </td>');
            }
            else
            {
                document.write('<td bgcolor="white"> </td>');
            }
        }

        document.write('</tr>');
    }

    document.write('</table>');

    for(let i = n; i> 0; i--)
    {
        let out = 100/i; 

        document.write('<hr width=' + out + '%>');
    }
}
